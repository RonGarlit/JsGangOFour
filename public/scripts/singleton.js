//==============================================
// singleton.js
//==============================================

// Singleton object is implemented as an immediate anonymous function
// Eek!! This is in the global space
var Singleton = (function () {
    // Private variable
    var instance;
    // Create our main and only real instance!!!!!
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
    // Public Method to get instance and if it doesn't exist create one. 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        }
    };
})();
//==============================================    
// run_Singleton()
//============================================== 
function run_Singleton() {
    // separately create two instance variables 
    // using the getInstance method in our module
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
    // AlertBox with results comparing whether both instances are the same.
    alert("Same instance? " + (instance1 === instance2));
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
// Singleton
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
// Singleton namespace which is also in
// the singleton.js
//==============================================
// The Namespace pattern is applied to keep the code 
// out of the global namespace.
//==============================================

// Add our Singleton Module on the "Classic" on 
// main namespace called JsGangOfFour
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
// Here our Singleton module is added to namespace
//============================================== 
JsGangOfFour.namespace("Classic").Singleton = (function () {
    //==============================================    
    // Revealing Module named Singleton encapsulates 
    // all of Singleton functions and properties.
    //==============================================  
    // Delcare private variable
    var instance;
    // Create our main and only real instance!!!!!
    var createInstance = function () {
        return {
            say: function () {
                alert("It is just little ole me. The only instance of me!");
            }
        };
    }
    // Create private method to get instance and if it doesn't exist create one. 
    var getInstance = function () {
        return instance = instance || createInstance();
    }
    // Create public method for getinstance 
    // actually REVEALing the private getInstance. 
    // (LOL ==> You see what I did there?)
    return {
        getInstance: getInstance
    };

})();
//==============================================    
// run_OptimizedSingleton()
//============================================== 
function run_OptimizedSingleton() {
    // create instance of Singleton module
    var singleton = JsGangOfFour.Classic.Singleton;
    // separately create two instance variables 
    // using the getInstance method in our module
    var instance1 = singleton.getInstance();
    var instance2 = singleton.getInstance();

    instance1.say();    // => First AlertBox says: It is just little ole me.
    instance2.say();    // => Second AlertBox says: It is just little ole me.
    // AlertBox with results comparing whether both instances are the same.
    alert("Result of test to see if instance1 and instance2 are the same? "
        + (instance1 === instance2)); // => true
}
