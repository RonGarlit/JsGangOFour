//==============================================
// factorymethod.js
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
// Factory Method
// JavaScript does not support class-based 
// inheritance therefore the abstract classes.
// we must ensure this consistency ourselves
// that properties and methods match!!!
//----------------------------------------------
// Note here again in OOP we would define a interface
// or abstract classes.   
//==============================================

// Here our factory creates a different vehicle 
// (or product) based on the type requested
function Factory() {
    this.createVehicle = function (type) {
        var employee;

        if (type === "truck") {
            employee = new Truck();
        } else if (type === "suv") {
            employee = new SUV();
        } else if (type === "sedan") {
            employee = new Sedan();
        } else if (type === "sportscar") {
            employee = new SportsCar();
        }

        employee.type = type;
        employee.say = function () {
            // add to log heler var 
            log.add("The cost of each " + this.type + " is " + this.cost + ".");
        }
        return employee;
    }
}
//=============================================
// Vehicle/Product objects we are going to build
//=============================================        
// Vehicle Objects
// If we could declare interfaces
// it be based on say the iThingamabob 
// here we us anonymous function
var Truck = function () {
    this.cost = "$120,000";
};
var SUV = function () {
    this.cost = "$52,000";
};
var Sedan = function () {
    this.cost = "$35,000";
};
var SportsCar = function () {
    this.cost = "$45,000";
};
//=============================================
// run_FactoryMethod()
//=============================================
function run_FactoryMethod() {

    var vehicles = [];

    var factory = new Factory();

    vehicles.push(factory.createVehicle("truck"));
    vehicles.push(factory.createVehicle("suv"));
    vehicles.push(factory.createVehicle("sedan"));
    vehicles.push(factory.createVehicle("sportscar"));

    for (var i = 0, len = vehicles.length; i < len; i++) {
        vehicles[i].say();
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
// Factory Method
// JavaScript does not support class-based 
// inheritance therefore the abstract classes.
// we must ensure this consistency ourselves
// that properties and methods match!!!
//----------------------------------------------
// Note here again in OOP we would define a interface
// or abstract classes.   
//==============================================

//==============================================
// Create the "Classic" namespace with the
// FactoryMethod namespace which is also in
// the factorymethod.js
//==============================================

// Add our FactoryMethod Module on the "Classic" namespace
// of JsGangOfFour
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

JsGangOfFour.namespace("Classic").FactoryMethod = (function () {
    //==============================================    
    // Here our FactoryMethod module has the createVehicle
    // method which we again created with an anonymous function 
    //==============================================  
    var createVehicle = function (type) {
        var employee;

        if (type === "truck") {
            employee = new Truck();
        } else if (type === "suv") {
            employee = new SUV();
        } else if (type === "sedan") {
            employee = new Sedan();
        } else if (type === "sportscar") {
            employee = new SportsCar();
        }

        employee.type = type;
        employee.say = function () {
            // add to log heler var 
            log.add("The cost of each " + this.type + " is " + this.cost + ".");
        }
        return employee;
    };
    //=============================================
    // Vehicle/Product objects we are going to build
    //=============================================        
    // Vehicle Objects
    // If we could declare interfaces
    // it be based on say the iThingamabob 
    // here we us anonymous function
    var Truck = function () {
        this.cost = "$135,000";
    };
    var SUV = function () {
        this.cost = "$58,000";
    };
    var Sedan = function () {
        this.cost = "$45,000";
    };
    var SportsCar = function () {
        this.cost = "$95,000";
    };

    return {
        createVehicle: createVehicle
    };

})();
//=============================================
// run_OptimizedFactoryMethod()
//=============================================
function run_OptimizedFactoryMethod() {

    var vehicles = [];

    var factory = JsGangOfFour.Classic.FactoryMethod;

    vehicles.push(factory.createVehicle("truck"));
    vehicles.push(factory.createVehicle("suv"));
    vehicles.push(factory.createVehicle("sedan"));
    vehicles.push(factory.createVehicle("sportscar"));

    for (var i = 0, len = vehicles.length; i < len; i++) {
        vehicles[i].say();
    }
    // Display alert box from our log helper var
    log.show();
}