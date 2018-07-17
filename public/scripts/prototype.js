//==============================================
// prototype.js
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

// Customer ojbect to clone
function Customer(first, last, status) {

    this.first = first;
    this.last = last;
    this.status = status;

    this.say = function () {
        alert("name: " + this.first + " " + this.last +
            ", status: " + this.status);
    };
}
// Classic JavaScript Proto way
function CustomerPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        var customer = new Customer();

        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;

        return customer;
    };
}
//==============================================    
// run_Prototype() 
//============================================== 
function run_Prototype() {

    var proto = new Customer("n/a", "n/a", "pending");
    var prototype = new CustomerPrototype(proto);

    var customer = prototype.clone();
    customer.say();
}

//==============================================
// Optimized JavaScript Code
//==============================================

//==============================================
// Prototype
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
// Prototype namespace which is also in
// the prototype.js
//==============================================
// The Namespace pattern is applied to keep the code 
// out of the global namespace.
//==============================================

// Add our Prototype Module on the "Classic" on 
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
// Here our Prototype module is added to namespace
//============================================== 
JsGangOfFour.namespace("Classic").Prototype = (function () {
    //==============================================    
    // Revealing Module named Prototype encapsulates 
    // all of Prototype's functions.
    // Note the use of "this"
    //==============================================  
    function Customer(first, last, status) {

        if (first) this.first = first;
        if (last) this.last = last;
        if (status) this.status = status;
    }

    Customer.prototype = {
        say: function () {
            log.add("name: " + this.first + " " + this.last +
                ", status: " + this.status);
        },
        first: "n/a",
        last: "n/a",
        status: "pending"
    };

    return { Customer: Customer };

})();
//==============================================    
// run_OptimizedPrototype()
//----------------------------------------------
// See lenghtly explaination on webpage
//============================================== 
function run_OptimizedPrototype() {
    var proto = JsGangOfFour.Classic.Prototype;
    // add to log heler var
    log.add("This is customer prototype with no parameters ");
    // create customer as just prototype for comparison
    var customer = new proto.Customer();
    customer.say();
    // add to log heler var
    log.add("------------------------------------------");
    log.add("Created a Kevin object with Customer prototype ");
    // create kevin with prototype
    var kevin = new proto.Customer("Kevin", "Summer");
    kevin.say();
    // add to log heler var
    log.add("------------------------------------------");
    log.add("Created a Ron object with Customer prototype ");
    // create ron with prototype
    var ron = new proto.Customer("Ron", "Garlit", "Really cool guy!");
    ron.say();
    // Display alert box from our log helper var
    log.show();
}