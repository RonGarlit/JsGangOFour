//==============================================
// adapter.js
//==============================================
// log helper
// Used to add() to var log
// then display in alert box
// via show() method
//==============================================
var log = (function () {
    var log = "";
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

//==============================================
// Adapter
// JavaScript does not support class-based 
// inheritance therefore the abstract classes.
// we must ensure this consistency ourselves
// that properties and methods match!!!
//==============================================

// Here are old and new interfaces
// and abstract clases that are used to simulate old 
// functionality but hiding the new functionality
// without breaking things.
//----------------------------------------------

// old interface
function Shipping() {
    // Old interface lacks security
    this.request = function (zipStart, zipEnd, weight) {
        // Does a bunch of stuff ...
        return "$49.75";
    }
}

// new interface
function AdvancedShipping() {
    // Requires security something old interface didn't have
    this.login = function (credentials) { /* ... */ };
    // Does a bunch of stuff similar to old interface
    // process same old data differently
    this.setStart = function (start) { /* ... */ };
    this.setDestination = function (destination) { /* ... */ };
    this.calculate = function (weight) { return "$39.50"; };
}

// adapter interface
function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();
    shipping.login(credentials);

    return {
        // create matching method like old interface
        // with same signature of parameters and return value
        // so it can be called the same way as old interface
        request: function (zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    };
}
//==============================================
// run_Adapter()
//==============================================
function run_Adapter() {
    // create original interface
    var shipping = new Shipping();
    // New evolved interface which requires credentials
    var credentials = { token: "30a8-6ee1" };
    var adapter = new ShippingAdapter(credentials);

    // add to log heler var 
    log.add("Adapter Test:");
    // original shipping object and interface
    var cost = shipping.request("78701", "10010", "2 lbs");
    // add to log heler var 
    log.add("Legacy code cost: " + cost);
    // add to log heler var 
    log.add("-------------------------");
    // new shipping object with adapted interface
    cost = adapter.request("78701", "10010", "2 lbs");
    // add to log heler var 
    log.add("New code cost: " + cost);
    // Display alert box from our log helper var
    log.show();
}

//==============================================
// Optimized JavaScript Code
//==============================================
// To understand "Optimized JavaScript Code" we must
// review some modern javascript design patterns and techniques
// which the provided links cover nicely.
//----------------------------------------------
// See these links: 
// https://addyosmani.com/blog/essential-js-namespacing/
// https://www.safaribooksonline.com/library/view/learning-javascript-design/9781449334840/ch13s15.html
// https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc
// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
// http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write
//==============================================

//==============================================
// Adapter
// JavaScript does not support class-based 
// inheritance or abstract classes.
// we must ensure this consistency ourselves
// that properties and methods match!!!
//==============================================
// Create our namespace called "JsGangOfFour".
//
// This is based on the NameSpace Pattern and 
// Module Pattern. This block of code should 
// be at the top of separate files to better 
// manage codebase.
//
// More importantly creating a structure to 
// avoid name collisions globally under one varable
// called JsGangOfFour.
//==============================================
var JsGangOfFour = {
    namespace: function (name) {
        var parts = name.split(".");
        var ns = this;

        for (var i = 0, len = parts.length; i < len; i++) {
            ns[parts[i]] = ns[parts[i]] || {};
            ns = ns[parts[i]];
        }

        return ns;
    }
};
//==============================================
// Create the "Classic" namespace with the
// AbstractFactory namespace which is also in
// the abstractfactory.js
//==============================================
// In the namespace we have the new interface
// and adapter that is used to simulate old 
// functionality but hiding the new functionality
// without breaking things.
// *** NOTE: The old interface is NOT in the 
// JsGangOfFour namespaces.
//----------------------------------------------
JsGangOfFour.namespace("Classic").Adapter = (function () {

    // Private area variables and methods
    // new interface
    var AdvancedShipping = function () {
        // Requires security something old interface didn't have
        this.login = function (credentials) { /* ... */ };
        // Does a bunch of stuff similar to old interface
        // process same old data differently
        this.setStart = function (start) { /* ... */ };
        this.setDestination = function (destination) { /* ... */ };
        this.calculate = function (weight) { return "$39.50"; };
    }

    // adapter interface
    var ShippingAdapter = function (credentials) {
        var shipping = new AdvancedShipping();
        shipping.login(credentials);

        return {
            // create matching method like old interface
            // with same signature of parameters and return value
            // so it can be called the same way as old interface            
            request: function (zipStart, zipEnd, weight) {
                shipping.setStart(zipStart);
                shipping.setDestination(zipEnd);
                return shipping.calculate(weight);
            }
        };
    };
    // Public area method
    return {
        ShippingAdapter: ShippingAdapter
    };
})(); // End of JsGangOfFour.Classic.Adapter Namespace
//----------------------------------------------
// If you look in adapter.js
// Shipping duplicated twice in JS file 
// intentionally it will just replace itself.
// for the sake of pasting in code windows in 
// adapter.ejs :-)
//----------------------------------------------
// Old interface
var Shipping = function () {
    this.request = function (zipStart, zipEnd, weight) {
        // ...
        return "$49.75";
    }
}
//==============================================
// run_OptimizedAdapter()
//==============================================
function run_OptimizedAdapter() {
    // create original interface
    var shipping = new Shipping();
    // New evolved interface which requires credentials
    var credentials = { token: "30a8-6ee1" };
    // This calls the Public area method in adapter namespace
    var adapter = new JsGangOfFour.Classic.Adapter.ShippingAdapter(credentials);

    // add to log heler var 
    log.add("Optimized Adapter Test:");
    // original shipping object and interface
    var cost = shipping.request("78701", "10010", "2 lbs");
    // add to log heler var 
    log.add("Legacy code cost: " + cost);
    // add to log heler var 
    log.add("-------------------------");
    // new shipping object with adapted interface
    cost = adapter.request("78701", "10010", "2 lbs");
    // add to log heler var 
    log.add("New code cost: " + cost);
    // Display alert box from our log helper var
    log.show();
}