/*
***************NOTES Remove once code is wwritten***************
Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.


The Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems. It is a simple pattern that may seem trivial but it is powerful and extremely useful. It is often present in systems that are built around a multi-layer architecture.

The intent of the Façade is to provide a high-level interface (properties and methods) that makes a subsystem or toolkit easy to use for the client.

On the server, in a multi-layer web application you frequently have a presentation layer which is a client to a service layer. 

Communication between these two layers takes place via a well-defined API. This API, or façade, hides the complexities of the business objects and their interactions from the presentation layer.

Another area where Façades are used is in refactoring. Suppose you have a confusing or messy set of legacy objects that the client should not be concerned about. 

You can hide this code behind a Façade. The Façade exposes only what is necessary and presents a cleaner and easy-to-use interface.

Facades are a structural pattern that can often be seen in JavaScript libraries such as jQuery where, although an implementation may support methods with a wide range of behaviors, only a “facade,” or limited abstraction of these methods, is presented to the public for use.


https://www.safaribooksonline.com/library/view/learning-javascript-design/9781449334840/ch09s09.html

https://anasshekhamis.com/2017/09/21/facade-design-pattern-in-javascript/

http://www.discoversdk.com/blog/javascript-facade-pattern

https://www.joezimjs.com/javascript/javascript-design-patterns-facade/

*/


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

var Mortgage = function (name) {
    this.name = name;
}

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

var Bank = function () {
    this.verify = function (name, amount) {
        // complex logic ...
        var loadAndDoSomething = amount;
        return true;
    }
}
var Credit = function () {
    this.get = function (name) {
        // complex logic ...
        var loadNameandDoSomething = name;
        return true;
    }
}
var Background = function () {
    this.check = function (name) {
        // complex logic ...
        var loadNameandDoSomethingElse = name;
        // change for fail on a name equal something
        return true;
    }
}




//==============================================
// run_Decorator()
//==============================================
function run_Facade() {

    log.add("-------------------------");
    // add to log heler var 
    log.add("Create the User Object:");
    // add to log heler var 
    log.add("-------------------------");
    var mortgage = new Mortgage("Joan Templeton");
    var result = mortgage.applyFor("$100,000");

    log.add(result);

    log.add("-------------------------");
    // add to log heler var 
    log.add("Now decorate above User Object:");
    // add to log heler var 
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
    // Create the User object we will
    // later decorate with more properties
    // under modern javascript patterns this is known as "Mixin"
    // I still consider it the Decorator pattern or a better yet a modern extention of it.
    // See the jucie details here: 
    // http://www.talkinghightech.com/en/javascript-mixin-pattern/
    // https://addyosmani.com/resources/essentialjsdesignpatterns/book/#decoratorpatternjavascript
    // https://addyosmani.com/resources/essentialjsdesignpatterns/book/#mixinpatternjavascript
    //==============================================
    // extend method to add on to and existing object
    //==============================================

})();

//==============================================    
// run_OptimizedComposite()
//============================================== 
function run_OptimizedFacade() {

    var facade = JsGangOfFour.Classic.Facade;
    // add to log heler var 
    log.add("-------------------------");
    // add to log heler var 
    log.add("Create the User Object:");
    // add to log heler var 
    log.add("-------------------------");

    // Create user object we will decorate/extend
    var user = new User("Kelly");
    // add to log heler var 
    log.add("User:");
    // add to log heler var with user.say()
    user.say();
    // add to log heler var 
    log.add("-------------------------");

    // add to log heler var 
    log.add("Now decorate (using extend(dest, source) method) above User Object:");

    // add to log heler var with user.say()
    user.say();
    // add to log heler var 
    log.add("-------------------------")
    // add to log heler var 
    log.add("Now decorate (using extendDeep(dest, source) method) adding another layer of previously modified User Object:");

    // Display what wwe have in the log object
    log.show();
}
