//==============================================
// decorator.js
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
// Decorator
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

// Create the User object we will
// later decorate with more properties
var User = function (name) {
    this.name = name;
    this.say = function () {
        log.add("User: \n Name: " + this.name);
    };
}

// Now pass the User object to the "decorator" object
// that we created.
var DecoratedUser = function (user, street, city) {
    this.user = user;
    this.name = user.name;  // ensures interface stays the same
    this.street = street;
    this.city = city;
    this.say = function () {
        log.add("Decorated User: \n Name: " + this.name + ", \n Street: " +
            this.street + ", \n City: " + this.city);
    };
}

//==============================================
// run_Decorator()
//==============================================
function run_Decorator() {

    log.add("-------------------------");
    // add to log heler var 
    log.add("Create the User Object:");
    // add to log heler var 
    log.add("-------------------------");
    var user = new User("Kelly");
    user.say();

    log.add("-------------------------");
    // add to log heler var 
    log.add("Now decorate above User Object:");
    // add to log heler var 
    log.add("-------------------------");
    var decorated = new DecoratedUser(user, "Broadway", "New York");
    decorated.say();
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

JsGangOfFour.namespace("Classic").Decorator = (function () {
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
    var extend = function (dest, source) {
        for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
                dest[prop] = source[prop];
            }
        }
    };
    //==============================================
    // extendDeep method to add on to and existing object
    // Add another layer of decorations?  :-)
    //==============================================
    var extendDeep = function (dest, source) {
        for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
                if (typeof prop === "object") {
                    dest[prop] = $.isArray(prop) ? [] : {};
                    this.deepExtend(dest[prop], source[prop]);
                }
                else {
                    dest[prop] = source[prop];
                }
            }
        }
    };

    return {
        extend: extend,
        extendDeep: extendDeep
    };
})();

//==============================================    
// run_OptimizedComposite()
//============================================== 
function run_OptimizedDecorator() {

    var decorator = JsGangOfFour.Classic.Decorator;
    // add to log heler var 
    log.add("-------------------------");
    // add to log heler var 
    log.add("Create the User Object:");
    // add to log heler var 
    log.add("-------------------------");
    var User = function (name) {
        this.name = name;
        this.say = function () {
            log.add("--> User: " + this.name);
        };
    }
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
    decorator.extend(user, {
        street: "Broadway",
        city: "New York",
        say: function () {
            log.add("--> Decorated User: \n|---> Name: " + this.name + ", \n|---> Street: " +
                this.street + ", \n|---> City: " + this.city);
        }
    });
    // add to log heler var with user.say()
    user.say();
    // add to log heler var 
    log.add("-------------------------")
    // add to log heler var 
    log.add("Now decorate (using extend(dest, source) method) adding another layer of previously modified User Object:");
    decorator.extendDeep(user, {
        school: "Columbia",
        grades: {
            "Spring": 4.0,
            "Fall": 3.5
        },
        say: function () {
            log.add("--> Deeply Extended User: \n|---> Name: " + this.name + ", \n|---> Street: " +
                this.street + ", \n|---> City: " + this.city + ", \n|---> School: " +
                this.school + ", \n|---> Grades: \n|------> Spring: " +
                this.grades.Spring + ", \n|------> Fall: " + this.grades.Fall);
        }
    });
    // add to log heler var with user.say()    
    user.say();
    // Display what wwe have in the log object
    log.show();
}
