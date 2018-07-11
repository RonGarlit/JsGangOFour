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
//
//==============================================

    function Shop() {
        this.construct = function (builder) {
            builder.step1();
            builder.step2();
            return builder.get();
        }
    }

    function CarBuilder() {
        this.car = null;
        this.step1 = function () {
            this.car = new Car();
        };
        this.step2 = function () {
            this.car.addParts();
        };
        this.get = function () {
            return this.car;
        };
    }

    function TruckBuilder() {
        this.truck = null;
        this.step1 = function () {
            this.truck = new Truck();
        };
        this.step2 = function () {
            this.truck.addParts();
        };
        this.get = function () {
            return this.truck;
        };
    }

    function Car() {
        this.doors = 0;
        this.addParts = function () {
            this.doors = 4;
        };
        this.say = function () {
            log.add("I am a " + this.doors + "-door car");
        };
    }

    function Truck() {
        this.doors = 0;
        this.addParts = function () {
            this.doors = 2;
        };
        this.say = function () {
            log.add("I am a " + this.doors + "-door truck");
        };
    }


//==============================================
// run_Builder()
//==============================================
    function run_Builder() {
        var shop = new Shop();

        var carBuilder = new CarBuilder();
        var truckBuilder = new TruckBuilder();

        var car = shop.construct(carBuilder);
        var truck = shop.construct(truckBuilder);

        car.say();
        truck.say();

        log.show();
    }

//==============================================
// Optimized JavaScript Code
//==============================================

//==============================================
//
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

    Patterns.namespace("Classic").Builder = (function () {

        var Car = function () {
            this.doors = 0;
            this.addParts = function () {
                this.doors = 4;
            };
            this.say = function () {
                log.add("I am a " + this.doors + "-door car");
            };
        };

        var Truck = function () {
            this.doors = 0;
            this.addParts = function () {
                this.doors = 2;
            };
            this.say = function () {
                log.add("I am a " + this.doors + "-door truck");
            };
        };
        
        var Shop = function () {
            this.construct = function (builder) {
                builder.step1();
                builder.step2();
                return builder.get();
            }
        };

        var CarBuilder = function () {
            this.car = null;
            this.step1 = function () {
                this.car = new Car();
            };
            this.step2 = function () {
                this.car.addParts();
            };
            this.get = function () {
                return this.car;
            }
        };

        var TruckBuilder = function () {
            this.truck = null;
            this.step1 = function () {
                this.truck = new Truck();
            };
            this.step2 = function () {
                this.truck.addParts();
            };
            this.get = function () {
                return this.truck;
            };
        };

        return {
            Shop: Shop,
            CarBuilder: CarBuilder,
            TruckBuilder: TruckBuilder
        };
    })();

//==============================================
// run_OptimizedBuilder()
//==============================================
    function run_OptimizedBuilder() {

        var builder = Patterns.Classic.Builder;

        var carBuilder = new builder.CarBuilder();
        var truckBuilder = new builder.TruckBuilder();

        var shop = new builder.Shop();

        var car = shop.construct(carBuilder);
        var truck = shop.construct(truckBuilder);

        car.say();
        truck.say();

        log.show();
    }