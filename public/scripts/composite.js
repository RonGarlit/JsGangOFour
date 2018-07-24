//==============================================
// composite.js
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
// Composite
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

// Basic node class/entity as I like to think of it.
var Node = function (name) {
    this.children = [];
    this.name = name;
}
// Add functionality to the prototype
// so that the Node inherits (so to speak)
// the same functionality to track it children
// trim or remove the children, now if it has children
// get a child, etc...
Node.prototype = {
    add: function (child) {
        this.children.push(child);
    },
    remove: function (child) {
        var len = this.children.length;
        for (var i = 0; i < len; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    },
    getChild: function (i) {
        return this.children[i];
    },
    hasChildren: function () {
        return this.children.length > 0;
    }
}

// recursively traverse the nodes in the tree
function traverse(indent, node) {
    // add to log heler var 
    log.add(Array(indent++).join("--") + node.name);

    for (var i = 0, len = node.children.length; i < len; i++) {
        // Traverse the tree
        traverse(indent, node.getChild(i));
    }
}
//=============================================
// run_Composite()
//=============================================     
function run_Composite() {
    // Name some nodes to the levels we want to assign them too
    // as we build our tree.  Boy was I tempted to build a 
    // family tree here.  LOL  :-)
    // Instead I kept with Jack Poorte example at DOFactory.com
    // See our home page of this app.
    var tree = new Node("root");
    var leftBranch = new Node("leftBranch")
    var rightBranch = new Node("rightBranch");
    var leftBranchleftLeaf = new Node("leftBranchleftLeaf");
    var leftBranchrightLeaf = new Node("leftBranchrightLeaf");
    var leftBranchrightLeafHasBabyLeaf = new Node("leftBranchrightLeafHasBabyLeaf");
    var rightBranchleftLeaf = new Node("rightBranchleftLeaf");
    var rightBranchrightLeaf = new Node("rightBranchrightLeaf");

    //=============================================
    // built a tree establish the root 
    // (node - Component in diagram)
    // Net add branchs (nodes) to the tree root
    // then add some leafs (leaves) that could become
    // branches.  :-)
    //=============================================  
    // add  the left branch
    tree.add(leftBranch);
    // add  the right branch
    tree.add(rightBranch);
    // trim the right branch off
    tree.remove(rightBranch);  // note: remove branch to test remove
    // add right branch back
    tree.add(rightBranch);
    // add left leaf on to the main left branch
    leftBranch.add(leftBranchleftLeaf);
    // add right leaf on to the main left branch
    leftBranch.add(leftBranchrightLeaf);
    // add a Baby leaf to the right leaf on to the main left branch
    leftBranchrightLeaf.add(leftBranchrightLeafHasBabyLeaf);
    // add left leaf on to the main right branch
    rightBranch.add(rightBranchleftLeaf);
    // add right leaf on to the main right branch    
    rightBranch.add(rightBranchrightLeaf);

    // Traverse the tree we have built
    traverse(1, tree);
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

JsGangOfFour.namespace("Classic").Composite = (function () {
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

    // Basic node class/entity as I like to think of it.
    var Node = function (name) {
        this.children = [];
        this.name = name;
    }
    // Add functionality to the prototype
    // so that the Node inherits (so to speak)
    // the same functionality to track it children
    // trim or remove the children, now if it has children
    // get a child, etc...
    Node.prototype = {
        add: function (child) {
            this.children.push(child);
        },
        remove: function (child) {
            var len = this.children.length;
            for (var i = 0; i < len; i++) {
                if (this.children[i] === child) {
                    this.children.splice(i, 1);
                    return;
                }
            }
        },
        getChild: function (i) {
            return this.children[i];
        },
        hasChildren: function () {
            return this.children.length > 0;
        }
    }

    // recursively traverse the nodes in the tree
    function traverse(indent, node) {
        // add to log heler var 
        log.add(Array(indent++).join("--") + node.name);

        for (var i = 0, len = node.children.length; i < len; i++) {
            // Traverse the tree
            traverse(indent, node.getChild(i));
        }
    }

    // ******** PUBLIC AREA ******** 
    //Exposing our functions (What I like to call - Pseudo Classes
    // because I'm OOP progreammer at heart)
    return {
        Node: Node,
        Traverse: traverse
    };

})();

//==============================================    
// run_OptimizedComposite()
//============================================== 
function run_OptimizedComposite() {

    // Load our Bridge module name in the bridge var
    var composite = JsGangOfFour.Classic.Composite;
    // Name some nodes to the levels we want to assign them too
    // as we build our tree.  Boy was I tempted to build a 
    // family tree here.  LOL  :-)
    // Instead I kept with Jack Poorte example at DOFactory.com
    // See our home page of this app.
    var tree = new composite.Node("root");
    var leftBranch = new composite.Node("leftBranch")
    var rightBranch = new composite.Node("rightBranch");
    var leftBranchleftLeaf = new composite.Node("leftBranchleftLeaf");
    var leftBranchrightLeaf = new composite.Node("leftBranchrightLeaf");
    var leftBranchrightLeafHasBabyLeaf = new composite.Node("leftBranchrightLeafHasBabyLeaf");
    var rightBranchleftLeaf = new composite.Node("rightBranchleftLeaf");
    var rightBranchrightLeaf = new composite.Node("rightBranchrightLeaf");


    // Let put the remotes through their paces.
    log.add("=========================");
    // add to log heler var 
    log.add("Optimized JavaScript Code");
    // add to log heler var 
    log.add("=========================");
    //=============================================
    // built a tree establish the root 
    // (node - Component in diagram)
    // Net add branchs (nodes) to the tree root
    // then add some leafs (leaves) that could become
    // branches.  :-)
    //=============================================  
    // add  the left branch
    tree.add(leftBranch);
    // add  the right branch
    tree.add(rightBranch);
    // trim the right branch off
    tree.remove(rightBranch);  // note: remove branch to test remove
    // add right branch back
    tree.add(rightBranch);
    // add left leaf on to the main left branch
    leftBranch.add(leftBranchleftLeaf);
    // add right leaf on to the main left branch
    leftBranch.add(leftBranchrightLeaf);
    // add a Baby leaf to the right leaf on to the main left branch
    leftBranchrightLeaf.add(leftBranchrightLeafHasBabyLeaf);
    // add left leaf on to the main right branch
    rightBranch.add(rightBranchleftLeaf);
    // add right leaf on to the main right branch    
    rightBranch.add(rightBranchrightLeaf);

    // Traverse the tree we have built
    composite.Traverse(1, tree);
    // add to log heler var 
    log.add("=========================");
    // Display alert box from our log helper var
    log.show();
}
