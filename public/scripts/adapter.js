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



// old interface
function Shipping() {
    this.request = function(zipStart, zipEnd, weight) {
        // ...
        return "$49.75";
    }
}

// new interface
function AdvancedShipping() {
    this.login = function(credentials) { /* ... */ };
    this.setStart = function(start) { /* ... */ };
    this.setDestination = function(destination) { /* ... */ };
    this.calculate = function(weight) { return "$39.50"; };
}

// adapter interface
function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();
    shipping.login(credentials);

    return {
        request: function(zipStart, zipEnd, weight) {
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

    var shipping = new Shipping();

    var credentials = {token: "30a8-6ee1"};
    var adapter = new ShippingAdapter(credentials);

    // original shipping object and interface
    var cost = shipping.request("78701", "10010", "2 lbs");
    log.add("Old cost: " + cost);

    // new shipping object with adapted interface
    cost = adapter.request("78701", "10010", "2 lbs");
    log.add("New cost: " + cost);

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

JsGangOfFour.namespace("Classic").Adapter = (function () {

    // new interface
    var AdvancedShipping = function () {
        this.login = function (credentials) { /* ... */ };
        this.setStart = function (start) { /* ... */ };
        this.setDestination = function (destination) { /* ... */ };
        this.calculate = function (weight) { return "$39.50"; };
    }

    // adapter interface
    var ShippingAdapter = function (credentials) {
        var shipping = new AdvancedShipping();
        shipping.login(credentials);

        return {
            request: function (zipStart, zipEnd, weight) {
                shipping.setStart(zipStart);
                shipping.setDestination(zipEnd);
                return shipping.calculate(weight);
            }
        };
    };

    return {
        ShippingAdapter: ShippingAdapter
    };

})();

// old interface
var Shipping = function () {
    this.request = function (zipStart, zipEnd, weight) {
        // ...
        return "$49.75";
    }
}

// log helper
var log = (function () {
    var log = "";
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
//==============================================
// run_OptimizedAdapter()
//==============================================
function run_OptimizedAdapter() {

    var shipping = new Shipping();

    var credentials = { token: "30a8-6ee1" };
    var adapter = new JsGangOfFour.Classic.Adapter.ShippingAdapter(credentials);

    // original shipping object and interface
    var cost = shipping.request("78701", "10010", "2 lbs");
    log.add("Old cost: " + cost);

    // new shipping object with adapted interface
    cost = adapter.request("78701", "10010", "2 lbs");
    log.add("New cost: " + cost);

    log.show();
}