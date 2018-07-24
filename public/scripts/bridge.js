//==============================================
// bridge.js
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
// JavaScript does not support class-based 
// inheritance therefore the abstract classes.
// we must ensure this consistency ourselves
// that properties and methods match!!!
//----------------------------------------------
// Note here again in OOP we would define a interface
// or abstract classes.   
//==============================================

// I modified and extended Joseph Zimmerman's bridge pattern version, frankly 
// because his example of remote control was way cooler than my original example
// which was something lame with hand and mouse movements.  LOL :-)
// See his article on Bridge Pattern here:
// https://www.joezimjs.com/javascript/javascript-design-patterns-bridge/

// this would be our interface or abstract class.
// but we can't do that.  So we are making this
// to be our BASE functionality for a remote control 
var RemoteControl = function (tv) {
    this.tv = tv;
    this.on = function () {
        this.tv.on();
    };
    this.off = function () {
        this.tv.off();
    };
    this.setChannel = function (ch) {
        this.tv.tuneChannel(ch);
    };
};
// this would be another interface or abstract class.
// but we can't do that.  So we are making this
// to be our base functionality for another remote control 
// notice this has different functionality

/* Newer, Better Remote Control */
var PowerRemote = function (tv) {
    this.tv = tv;
    this.currChannel = 0;
    this.setChannel = function (ch) {
        this.currChannel = ch;
        this.tv.tuneChannel(ch);
    };
    this.nextChannel = function () {
        this.setChannel(this.currChannel + 1);
    };
    this.prevChannel = function () {
        this.setChannel(this.currChannel - 1);
    };
};
// Take the PowerRemote and add the BASE functionality
// of the RemoteControl
PowerRemote.prototype = new RemoteControl();
/** TV Interface
    Since there are no Interfaces in JavaScript I am just
    going to use comments to define what the implementors
    should implement
    function on
    function off
    function tuneChannel(channel)
*/
//Set up some specific functionality for a couple TV's.
//----------------------------------------------
/* Sony TV */
var SonyTV = function () {
    this.on = function () {
        // add to log heler var 
        log.add('Sony TV is on');
    };
    this.off = function () {
        // add to log heler var 
        log.add('Sony TV is off');
    };
    this.tuneChannel = function (ch) {
        // add to log heler var 
        log.add('Sony TV tuned to channel ' + ch);
    };
}
/* Toshiba TV */
var ToshibaTV = function () {
    this.on = function () {
        // add to log heler var 
        log.add('Welcome to Toshiba entertainment');
    };
    this.off = function () {
        // add to log heler var 
        log.add('Goodbye Toshiba user');
    };
    this.tuneChannel = function (ch) {
        // add to log heler var 
        log.add('Channel ' + ch + ' is set on your Toshiba television');
    };
}
//==============================================    
// run_Bridge() 
//============================================== 
function run_Bridge() {
    /* Let's see it in action */
    // Let setup some functionality for a sony tv
    var sony = new SonyTV();
    // Let setup some functionality for a toshiba tv
    var toshiba = new ToshibaTV();
    // create a remote for sony
    var std_remote = new RemoteControl(sony);
    // create a remote for toshiba
    var pwr_remote = new PowerRemote(toshiba);

    // Let put the remotes through their paces.
    log.add("-------------------------");
    // add to log heler var 
    log.add("Sony Remote Test:");
    // add to log heler var 
    log.add("-------------------------");
    std_remote.on();            // prints "Sony TV is on"
    std_remote.setChannel(55);  // prints "Sony TV tuned to channel 55"
    std_remote.setChannel(20);  // prints "Sony TV tuned to channel 20"
    std_remote.off();           // prints "Sony TV is off"

    log.add("");
    log.add("-------------------------");
    // add to log heler var 
    log.add("Toshiba Remote Test:");
    // add to log heler var 
    log.add("-------------------------");
    pwr_remote.on();            // prints "Welcome to Toshiba entertainment"
    pwr_remote.setChannel(55);  // prints "Channel 55 is set on your Toshiba television"
    pwr_remote.nextChannel();   // prints "Channel 56 is set on your Toshiba television"
    pwr_remote.prevChannel();   // prints "Channel 55 is set on your Toshiba television"
    // add to log heler var 
    log.add("-------------------------");
    pwr_remote.off();           // prints "Goodbye Toshiba user"

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

JsGangOfFour.namespace("Classic").Bridge = (function () {
    //==============================================
    // JavaScript does not support class-based 
    // inheritance therefore the abstract classes.
    // we must ensure this consistency ourselves
    // that properties and methods match!!!
    //----------------------------------------------
    // Note here again in OOP we would define a interface
    // or abstract classes.   
    //==============================================

    // I modified and extended Joseph Zimmerman's bridge pattern version, frankly 
    // because his example of remote control was way cooler than my original example
    // which was something lame with hand and mouse movements.  LOL :-)
    // See his article on Bridge Pattern here:
    // https://www.joezimjs.com/javascript/javascript-design-patterns-bridge/

    // ******** PRIVATE AREA ********
    // this would be our interface or abstract class.
    // but we can't do that.  So we are making this
    // to be our BASE functionality for a remote control 
    var RemoteControl = function (tv) {
        this.tv = tv;
        this.on = function () {
            this.tv.on();
        };
        this.off = function () {
            this.tv.off();
        };
        this.setChannel = function (ch) {
            this.tv.tuneChannel(ch);
        };
    };
    // this would be another interface or abstract class.
    // but we can't do that.  So we are making this
    // to be our base functionality for another remote control 
    // notice this has different functionality

    /* Newer, Better Remote Control */
    var PowerRemote = function (tv) {
        this.tv = tv;
        this.currChannel = 0;
        this.setChannel = function (ch) {
            this.currChannel = ch;
            this.tv.tuneChannel(ch);
        };
        this.nextChannel = function () {
            this.setChannel(this.currChannel + 1);
        };
        this.prevChannel = function () {
            this.setChannel(this.currChannel - 1);
        };
    };
    // Take the PowerRemote and add the BASE functionality
    // of the RemoteControl
    PowerRemote.prototype = new RemoteControl();
    /** TV Interface
        Since there are no Interfaces in JavaScript I am just
        going to use comments to define what the implementors
        should implement
        function on
        function off
        function tuneChannel(channel)
    */
    //Set up some specific functionality for a couple TV's.
    //----------------------------------------------
    /* Sony TV */
    var SonyTV = function () {
        this.on = function () {
            // add to log heler var 
            log.add('Sony TV is on');
        };
        this.off = function () {
            // add to log heler var 
            log.add('Sony TV is off');
        };
        this.tuneChannel = function (ch) {
            // add to log heler var 
            log.add('Sony TV tuned to channel ' + ch);
        };
    }
    /* Toshiba TV */
    var ToshibaTV = function () {
        this.on = function () {
            // add to log heler var 
            log.add('Welcome to Toshiba entertainment');
        };
        this.off = function () {
            // add to log heler var 
            log.add('Goodbye Toshiba user');
        };
        this.tuneChannel = function (ch) {
            // add to log heler var 
            log.add('Channel ' + ch + ' is set on your Toshiba television');
        };
    }
    // ******** PUBLIC AREA ******** 
    //Exposing our functions (What I like to call - Pseudo Classes
    // because I'm OOP progreammer at heart)
    return {
        RemoteControl: RemoteControl,
        PowerRemote: PowerRemote,
        SonyTV: SonyTV,
        ToshibaTV: ToshibaTV
    };

})();
//==============================================    
// run_OptimizedBridge()
//============================================== 
function run_OptimizedBridge() {

    // Load our Bridge module name in the bridge var
    var bridge = JsGangOfFour.Classic.Bridge;
    /* Let's see it in action */
    // Let setup some functionality for a sony tv
    var sony = new bridge.SonyTV();
    // Let setup some functionality for a toshiba tv
    var toshiba = new bridge.ToshibaTV();
    // create a remote for sony
    var std_remote = new bridge.RemoteControl(sony);
    // create a remote for toshiba
    var pwr_remote = new bridge.PowerRemote(toshiba);

    // Let put the remotes through their paces.
    log.add("=========================");
    // add to log heler var 
    log.add("Optimized JavaScript Code");
    // add to log heler var 
    log.add("=========================");

    // Let put the remotes through their paces.
    log.add("");
    log.add("-------------------------");
    // add to log heler var 
    log.add("Sony Remote Test:");
    // add to log heler var 
    log.add("-------------------------");
    std_remote.on();            // prints "Sony TV is on"
    std_remote.setChannel(55);  // prints "Sony TV tuned to channel 55"
    std_remote.setChannel(20);  // prints "Sony TV tuned to channel 20"
    std_remote.off();           // prints "Sony TV is off"

    log.add("");
    log.add("-------------------------");
    // add to log heler var 
    log.add("Toshiba Remote Test:");
    // add to log heler var 
    log.add("-------------------------");
    pwr_remote.on();            // prints "Welcome to Toshiba entertainment"
    pwr_remote.setChannel(55);  // prints "Channel 55 is set on your Toshiba television"
    pwr_remote.nextChannel();   // prints "Channel 56 is set on your Toshiba television"
    pwr_remote.prevChannel();   // prints "Channel 55 is set on your Toshiba television"
    // add to log heler var 
    log.add("-------------------------");
    pwr_remote.off();           // prints "Goodbye Toshiba user"

    // Display alert box from our log helper var
    log.show();

}