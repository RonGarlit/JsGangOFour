//==============================================
// AbstractFactory.ejs
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
// Abstract Factory
// JavaScript does not support class-based 
// inheritance therefore the abstract classes.
// we must ensure this consistency ourselves
// that properties and methods match!!!
//==============================================


// Here are two Factories: 
// EmployeeFactory and VendorFactory.
//----------------------------------------------
// Employee Factory - Created using named function
function EmployeeFactory() {
    this.create = function (name) {
        return new Employee(name);
    };
}
// Employee Object  
// If we could declare interfaces
// it would be the iPerson
function Employee(name) {
    this.name = name;
    this.say = function () {
        // add to log heler var 
        log.add("I am employee " + name);
    };
}

// Vendor Factory
function VendorFactory() {
    this.create = function (name) {
        return new Vendor(name);
    };
}
// Vendor Object
// If we could declare interfaces
// it would be the iPerson
function Vendor(name) {
    this.name = name;
    this.say = function () {
        // add to log heler var 
        log.add("I am vendor " + name);
    };
}
//==============================================
// run_AbstractFactory() 
//----------------------------------------------
// Demo use of EmployeeFactory & VendorFactory
// and log to alert box.
//==============================================
function run_AbstractFactory() {

    // Array of matching entity object types
    // If we could declare interfaces
    // it would be the iPerson
    // and this woud be and array of 
    // Persons or People :-)
    var persons = [];

    // Create a couple factories
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();

    // Load the array with objects created by factories
    // Names from http://funnynames.com/  :-)
    persons.push(employeeFactory.create("Anita Potty"));
    persons.push(employeeFactory.create("Pete Moss"));
    persons.push(employeeFactory.create("Belle E. Flopp"));
    persons.push(employeeFactory.create("Tyron Shulaces"));

    persons.push(vendorFactory.create("Heaven Lee"));
    persons.push(vendorFactory.create("Al K. Holic"));
    persons.push(vendorFactory.create("Lotta Hare"));
    persons.push(vendorFactory.create("Seymoure Butts"));

    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }

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
// Abstract Factory
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

// This is our AbstractFactory that will return two factories
// called FamilyFactory and PetFactory  :-)
JsGangOfFour.namespace("Classic").AbstractFactory = (function () {
    // Here are two entity objects 
    // If we could declare interfaces and abstract classes
    // it would be iMember or iFamilyMember and so on.
    //----------------------------------------------
    // Family Function Object - Created using anonymous constructor function
    var Family = function (name) {
        this.name = name;
        this.say = function () {
            // add to log heler var that is
            // declared in the top of abstractfactory.js
            log.add("My family member name is " + name);
        };
    };
    // Pet Function Object - Created using anonymous constructor function
    var Pet = function (name) {
        this.name = name;
        this.say = function () {
            // add to log heler var that is
            // declared in the top of abstractfactory.jss
            log.add("I'm a pet named " + name);
        };
    };
    // Here are two Factories: 
    // FamilyFactory and PetFactory.
    // This uses our resuable objects as a base to 
    // create other objects.
    // Again we use the anonymous constructor function
    // in creating out factory object simulating a OOP Class
    //----------------------------------------------
    // Family Factory Function Object - Created using anonymous constructor function
    var FamilyFactory = function () {
        this.create = function (name) {
            return new Family(name);
        };
    };
    // Pet Factory Function Object - Created using anonymous constructor function
    var PetFactory = function () {
        this.create = function (name) {
            return new Pet(name);
        };
    };

    return {
        FamilyFactory: FamilyFactory,
        PetFactory: PetFactory
    };
})();

//==============================================
// run_OptimizedAbstractFactory()
//----------------------------------------------
// Demo use of EmployeeFactory & VendorFactory
// and log to alert box.
//==============================================
function run_OptimizedAbstractFactory() {
    // Load our Abstract Factory in the abstract var
    var abstract = JsGangOfFour.Classic.AbstractFactory;
    // Create a couple factories new'ing up the 
    // factory functions in our abstract of 
    // AbstractFactory Namespace.
    var familyFactory = new abstract.FamilyFactory();
    var petFactory = new abstract.PetFactory();
    // Array of matching entity object types
    // If we could declare interfaces
    // it would be the iPerson
    // and this woud be and array of 
    // Persons or People :-)
    var persons = [];
    // Load the array with objects created by factories
    persons.push(familyFactory.create("Ron Garlit"));
    persons.push(familyFactory.create("Cindi Garlit"));
    persons.push(familyFactory.create("Devin Garlit"));
    persons.push(familyFactory.create("Melissa Garlit"));
    persons.push(familyFactory.create("Mark Garlit"));

    persons.push(petFactory.create("Molly Garlit"));
    persons.push(petFactory.create("Max Garlit"));
    persons.push(petFactory.create("Jax Garlit"));

    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }
    // Display alert box from our log helper var
    // declared in the top of abstractfactory.js                    
    log.show();
}


