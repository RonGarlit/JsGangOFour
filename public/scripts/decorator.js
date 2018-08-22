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

    log.show();
}