/**********************************************
Some links on the facade pattern in JavaScript
https://www.safaribooksonline.com/library/view/learning-javascript-design/9781449334840/ch09s09.html

https://anasshekhamis.com/2017/09/21/facade-design-pattern-in-javascript/

http://www.discoversdk.com/blog/javascript-facade-pattern

https://www.joezimjs.com/javascript/javascript-design-patterns-facade/

***********************************************/


//==============================================
// facade.js
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
// Facade
// JavaScript does not support class-based 
// inheritance therefore the abstract classes.
// we must ensure this consistency ourselves
// that properties and methods match!!!
//==============================================

// Here are old and new interfaces
// and abstract classes that are used to simulate old 
// functionality but hiding the new functionality
// without breaking things.
//----------------------------------------------
// Example based on one given in Jack Poorte JavaScript 
// class which I've modified and extended
//----------------------------------------------
// Create Mortgage function
var Mortgage = function (name) {
    this.name = name;
}

// Add applyFor function to prototype that 
// is facade that accesses subsystems
Mortgage.prototype = {
    applyFor: function (amount) {

        // access multiple subsystems...

        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }

        return this.name + " has been " + result +
            " for a " + amount + " mortgage";
    }
}

// Access to subsytem we are hiding behind facade
var Bank = function () {
    this.verify = function (name, amount) {
        // complex logic ...
        var BankLoanAmountLimit = amount;
        if (BankLoanAmountLimit == "$100,000") {
            return true;

        } else {
            return false;
        }
    }
}
// Access to subsytem we are hiding behind facade
var Credit = function () {
    this.get = function (name) {
        // complex logic ...
        var RunCreditCheck = name;
        if (RunCreditCheck == "Ronald Garlit") {
            return true;

        } else {
            return false;
        }
    }
}
// Access to subsytem we are hiding behind facade
var Background = function () {
    this.check = function (name) {
        // complex logic ...
        var RunBackgroundCheck = name;
        if (RunBackgroundCheck == "Ronald Garlit") {
            return true;

        } else {
            return false;
        }

    }
}

//==============================================
// run_Decorator()
//==============================================
function run_Facade() {

    // add to log helper var 
    log.add("-------------------------");
    log.add("Process applicaton for John Doe:")
    // add to log helper var 
    log.add("-------------------------");
    var mortgage1 = new Mortgage("John Doe");
    var result1 = mortgage1.applyFor("$100,000");

    // add results to log helper var
    log.add(result1);

    log.add("-------------------------");
    // add to log helper var 
    log.add("Process applicaton for Ronald Garlit:");
    // add to log helper var 
    log.add("-------------------------");
    var mortgage2 = new Mortgage("Ronald Garlit");
    var result2 = mortgage2.applyFor("$100,000");

    // add results to log helper var
    log.add(result2);
    // add to log helper var 
    log.add("-------------------------");
    // Display what wwe have in the log object
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

JsGangOfFour.namespace("Classic").Facade = (function () {
    //==============================================
    // JavaScript does not support class-based 
    // inheritance therefore the abstract classes.
    // we must ensure this consistency ourselves
    // that properties and methods match!!!
    //----------------------------------------------
    // Note here again in OOP we would define a interface
    // or abstract classes.   
    //==============================================

    // PRIVATE AREA
    //==============================================

    //==============================================
    // Create our private Mortgage function
    // this is thee facade that will access
    // several subsystems
    //==============================================
    var Mortgage = function (name) {
        this.name = name;
    };

    Mortgage.prototype = {
        applyFor: function (amount) {

            // access multiple subsystems...

            var result = "approved";
            if (!new Bank().verify(this.name, amount)) {
                result = "denied";
            } else if (!new Credit().get(this.name)) {
                result = "denied";
            } else if (!new Background().check(this.name)) {
                result = "denied";
            }

            return this.name + " has been " + result +
                " for a " + amount + " mortgage";
        }
    };

    //==============================================
    // Access to subsytem we are hiding behind facade
    // by creating a private Bank function
    //==============================================
    var Bank = function () {
        this.verify = function (name, amount) {
            // complex logic ...
            var BankLoanAmountLimit = amount;
            if (BankLoanAmountLimit == "$100,000") {
                return true;

            } else {
                return false;
            }
        }
    };
    //==============================================
    // Access to subsytem we are hiding behind facade
    // by creating a private Credit function
    //==============================================
    var Credit = function () {
        this.get = function (name) {
            // complex logic ...
            var RunCreditCheck = name;
            if (RunCreditCheck == "Ronald Garlit") {
                return true;

            } else {
                return false;
            }
        }
    };
    //==============================================
    // Access to subsytem we are hiding behind facade
    // by creating a private Background function
    //==============================================
    var Background = function () {
        this.check = function (name) {
            // complex logic ...
            var RunBackgroundCheck = name;
            if (RunBackgroundCheck == "Ronald Garlit") {
                return true;

            } else {
                return false;
            }

        }
    };
    //==============================================
    // Expose out mortgage function
    // Make a public function
    //==============================================
    return {
        Mortgage: Mortgage
    };

})();

//==============================================    
// run_OptimizedComposite()
//============================================== 
function run_OptimizedFacade() {

    var facade = JsGangOfFour.Classic.Facade;

    log.add("Begin processing applications...")
    // add to log helper var 
    log.add("-------------------------");
    log.add("Processing application for Jane Smith:")

    var mortgage3 = new facade.Mortgage("Jane Smith");
    var result3 = mortgage3.applyFor("$100,000");

    // add results to log helper var
    log.add("---> " + result3);

    // add to log helper var 
    log.add("Processing application for Ronald Garlit:");

    var mortgage4 = new facade.Mortgage("Ronald Garlit");
    var result4 = mortgage4.applyFor("$100,000");

    // add results to log helper var
    log.add("---> " + result4);
    // add to log helper var 
    log.add("-------------------------");
    // Display what wwe have in the log object

    log.add("Processing complete...")
    log.show();

}
