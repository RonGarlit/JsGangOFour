//==============================================
// Builder.js
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
// Builder
// JavaScript does not support class-based 
// inheritance therefore the abstract classes.
// we must ensure this consistency ourselves
// that properties and methods match!!!
//----------------------------------------------
// Note here again in OOP we would define a interface
// or multiple interfaces to define the multiple steps
// that the builder objects need.    
//==============================================


// Here are three builders under control of a director: 
// WidgetBuilder, GadgetBuilder and ThingamajigBuilder.
//----------------------------------------------
// Manufacturing - Is our "Director" of construction using 
// the builders  - Created using named function
// The construct function accepts an instance of a "Builder" 
// to build the appropriate object. Say like iBuilder
function Manufacturing() {
    this.construct = function (builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}
// Widget Builder
function WidgetBuilder() {
    this.widget = null;
    this.step1 = function () {
        this.widget = new Widget();
    };
    this.step2 = function () {
        this.widget.addParts();
    };
    this.get = function () {
        return this.widget;
    };
}
// Gadget Builder
function GadgetBuilder() {
    this.gadget = null;
    this.step1 = function () {
        this.gadget = new Gadget();
    };
    this.step2 = function () {
        this.gadget.addParts();
    };
    this.get = function () {
        return this.gadget;
    };
}
// Thingamajig Builder
function ThingamajigBuilder() {
    this.thingamajig = null;
    this.step1 = function () {
        this.thingamajig = new Thingamajig();
    };
    this.step2 = function () {
        this.thingamajig.addParts();
    };
    this.get = function () {
        return this.thingamajig;
    };
}
//=============================================
// Product objects we are going to build
//=============================================        
// Widget Object
// If we could declare interfaces
// it be based on say the iThingamabob interface
function Widget() {
    this.buttons = 0;
    this.addParts = function () {
        this.buttons = 4;
    };
    this.say = function () {
        // add to log heler var 
        log.add("I am a " + this.buttons + "-button widget");
    };
}
// Gadget Object
// If we could declare interfaces
// it be based on say the iThingamabob interface
function Gadget() {
    this.buttons = 0;
    this.addParts = function () {
        this.buttons = 2;
    };
    this.say = function () {
        // add to log heler var 
        log.add("I am a " + this.buttons + "-button gadget");
    };
}
// Thingamajig Object
// If we could declare interfaces
// it be based on say the iThingamabob interface
function Thingamajig() {
    this.buttons = 0;
    this.addParts = function () {
        this.buttons = 8;
    };
    this.say = function () {
        // add to log heler var 
        log.add("I am a " + this.buttons + "-button thingamajig");
    };
}

//==============================================
// run_Builder()
//==============================================
function run_Builder() {
    // Create instance of our director
    var manufacturing = new Manufacturing();
    // create concrete builder objects
    var widgetBuilder = new WidgetBuilder();
    var gadgetBuilder = new GadgetBuilder();
    var thingamajigBuilder = new ThingamajigBuilder();
    // Manufacture (create) the products
    var widget = manufacturing.construct(widgetBuilder);
    var gadget = manufacturing.construct(gadgetBuilder);
    var thingamajig = manufacturing.construct(thingamajigBuilder);
    // Use the products
    widget.say();
    gadget.say();
    thingamajig.say();
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
// Builder
// JavaScript does not support class-based 
// inheritance therefore the abstract classes.
// we must ensure this consistency ourselves
// that properties and methods match!!!
//----------------------------------------------
// Note here again in OOP we would define a interface
// or multiple interfaces to define the multiple steps
// that the builder objects need.    
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
    // Look at links above for details on NameSpace pattern
    // and this function and popular other methods to manage it.
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
// Builder namespace which is also in
// the builder.js
//==============================================

// Add our Builder Module on the "Classic" namespace
// of JsGangOfFour
JsGangOfFour.namespace("Classic").Builder = (function () {
    //==============================================    
    // Here are three builders under control of a director: 
    // WidgetBuilder, GadgetBuilder and ThingamajigBuilder.
    //----------------------------------------------
    // Manufacturing - Is our "Director" of construction using 
    // the builders  - Created using named function
    // The construct function accepts an instance of a "Builder" 
    // to build the appropriate object. Say like iBuilder
    //==============================================  

    //==============================================  
    // This is the private area of the module.
    // You define variables and functions which represent the 
    // module's private state. It is off-limits to the outside world. 
    //
    // This is courtesy of the closure created by the function 
    // in which the private state is maintained.
    //==============================================     
    var Manufacturing = function () {
        this.construct = function (builder) {
            builder.step1();
            builder.step2();
            return builder.get();
        }
    };
    // WidgetBuilder Builder- Created using anonymous constructor function
    var WidgetBuilder = function () {
        this.widget = null;
        this.step1 = function () {
            this.widget = new Widget();
        };
        this.step2 = function () {
            this.widget.addParts();
        };
        this.get = function () {
            return this.widget;
        }
    };
    // GadgetBuilder Builder- Created using anonymous constructor function
    var GadgetBuilder = function () {
        this.gadget = null;
        this.step1 = function () {
            this.gadget = new Gadget();
        };
        this.step2 = function () {
            this.gadget.addParts();
        };
        this.get = function () {
            return this.gadget;
        };
    };

    // Thingamajig Builder- Created using anonymous constructor function
    var ThingamajigBuilder = function () {
        this.thingamajig = null;
        this.step1 = function () {
            this.thingamajig = new Thingamajig();
        };
        this.step2 = function () {
            this.thingamajig.addParts();
        };
        this.get = function () {
            return this.thingamajig;
        };
    }

    //=============================================
    // Product objects we are going to build
    //=============================================        
    // Widget Object- Created using anonymous constructor function
    // If we could declare interfaces
    // it be based on say the iThingamabob interface
    var Widget = function () {
        this.buttons = 0;
        this.addParts = function () {
            this.buttons = 4;
        };
        this.say = function () {
            // add to log heler var 
            log.add("I am a " + this.buttons + "-button widget");
        };
    };
    // Gadget Object- Created using anonymous constructor function
    // If we could declare interfaces
    // it be based on say the iThingamabob interface
    var Gadget = function () {
        this.buttons = 0;
        this.addParts = function () {
            this.buttons = 2;
        };
        this.say = function () {
            // add to log heler var 
            log.add("I am a " + this.buttons + "-button gadget");
        };
    };
    // Gadget Object- Created using anonymous constructor function
    // If we could declare interfaces
    // it be based on say the iThingamabob interface 
    var Thingamajig = function () {
        this.buttons = 0;
        this.addParts = function () {
            this.buttons = 8;
        };
        this.say = function () {
            // add to log heler var 
            log.add("I am a " + this.buttons + "-button thingamajig");
        };
    };
    //==============================================  
    // The public area is the returned object literal. It represents 
    // the public interface (properties and methods) of the module 
    // which is accessible from anywhere in the program.
    //==============================================  
    return {
        Manufacturing: Manufacturing,
        WidgetBuilder: WidgetBuilder,
        GadgetBuilder: GadgetBuilder,
        ThingamajigBuilder: ThingamajigBuilder

    };
})();

//==============================================
// run_OptimizedBuilder()
//==============================================
function run_OptimizedBuilder() {
    // Make a shorter verson of our namespace of Builder Module
    var builder = JsGangOfFour.Classic.Builder;
    // Create concrete instance of our director
    var manufacturing = new builder.Manufacturing();
    // create concrete builder objects
    var widgetBuilder = new builder.WidgetBuilder();
    var gadgetBuilder = new builder.GadgetBuilder();
    var thingamagigBuilder = new builder.ThingamajigBuilder();
    // Manufacture (create) the products
    var widget = manufacturing.construct(widgetBuilder);
    var gadget = manufacturing.construct(gadgetBuilder);
    var thingamagig = manufacturing.construct(thingamagigBuilder);
    // Use the products
    thingamagig.say();
    widget.say();
    gadget.say();
    // Display alert box from our log helper var
    log.show();
}