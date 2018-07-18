//==============================================
// singleton.js
//==============================================


var Singleton = (function () {

    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        }
    };
})();


function run() {

    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();

    alert("Same instance? " + (instance1 === instance2));  
}

//==============================================
// Optimized JavaScript Code
//==============================================


var Patterns = {
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

Patterns.namespace("Classic").Singleton = (function () {

    var instance;

    var createInstance = function () {
        return {
            say: function () {
                alert("I am the greatest");
            }
        };
    }
        
    var getInstance = function () {
        return instance = instance || createInstance();
    }

    return {
        getInstance: getInstance
    };

})();


function run() {

    var singleton = Patterns.Classic.Singleton;

    var instance1 = singleton.getInstance();
    var instance2 = singleton.getInstance();

    instance1.say();                        // => I am the greatest!

    alert("Same instance? " + (instance1 === instance2)); // => true
}
