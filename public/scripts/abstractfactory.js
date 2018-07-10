// log helper
// Used to add() to var log
// then display in alert box
// via show() method
// Keyboard test
var log = (function () {
  var log = "";
  return {
      add: function (msg) { log += msg + "\n"; },
      show: function () { alert(log); log = ""; }
  }
})();


function Employee(name) {
  this.name = name;
  this.say = function () {
      log.add("I am employee " + name);
  };
}

function EmployeeFactory() {
  this.create = function (name) {
      return new Employee(name);
  };
}

function Vendor(name) {
  this.name = name;
  this.say = function () {
      log.add("I am vendor " + name);
  };
}

function VendorFactory() {
  this.create = function (name) {
      return new Vendor(name);
  };
}


function run_AbstractFactory() {

  var persons = [];

  var employeeFactory = new EmployeeFactory();
  var vendorFactory = new VendorFactory();

  persons.push(employeeFactory.create("Joan DiSilva"));
  persons.push(employeeFactory.create("Tim O'Neill"));

  persons.push(vendorFactory.create("Gerald Watson"));
  persons.push(vendorFactory.create("Nicole McNight"));

  for (var i = 0, len = persons.length; i < len; i++) {
      persons[i].say();
  }

  log.show();
}


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

Patterns.namespace("Classic").AbstractFactory = (function () {

  var Family = function (name) {
      this.name = name;
      this.say = function () {
          log.add("My family member name is " + name);
      };
  };

  var Pet = function (name) {
      this.name = name;
      this.say = function () {
          log.add("I'm a pet named " + name);
      };
  };

  var FamilyFactory = function () {
      this.create = function (name) {
          return new Family(name);
      };
  };

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



function run_OptimizedAbstractFactory() {

  var abstract = Patterns.Classic.AbstractFactory;

  var familyFactory = new abstract.FamilyFactory();
  var petFactory = new abstract.PetFactory();

  var persons = [];

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

  log.show();
}


