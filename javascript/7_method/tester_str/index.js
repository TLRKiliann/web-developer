//To test string

//------------------------------------------------------------------
// -----
//STRING
// -----

let string = "Je suis une string";
console.log("---");
console.log("string = ", string);
console.log("---");

console.log("---string.indexOf('suis')---");
console.log(string.indexOf("suis"));
console.log("---string.indexOf('string')---");
console.log(string.indexOf("string"));
console.log("---");

//slice()
console.log("---slice()---");
let newStr = string.slice(2, 5);
console.log("string.slice(2, 5) = ", newStr);
//su
console.log("---initial array---");
console.log(string);
console.log("---");

console.log("---split()---");
console.log("string.split('une') = ", string.split("une"));
//['Je suis ', ' string']
console.log("---");

console.log("---replace()---");
console.log("string.replace('une string', 'un slip') =", string.replace("une string", "un slip"));
//Je suis un slip
console.log("---");

//------------------------------------------------------------------
// -----
// ARRAY
// -----

//replace()
let customString = ["Je", "suis", "une", "string"];
let custom = customString[2].replace("une", "un");

console.log("---");
console.log("customString[2].replace('une', 'un') = ", customString[2].replace("une", "un"));
//un
console.log("---");

let secCustom = customString.push(custom);
console.log("customString.push(custom) = ", customString);
//["Je", "suis", "une", "string", "un"]

//splice()
spliceArray = ["La", "method", "splice", "remplace", "enlève", "ajoute"]

console.log("---");
console.log("spliceArray", spliceArray)
newsplice = spliceArray.splice(2, 1, "je", "temmerde");
console.log("newsplice", newsplice);
//Position 2 - enlève 1 element et remplace par les 2 args
console.log("spliceArray", spliceArray)
console.log("---");

//reduce()
let arrayNumber = [2, 5, 29, 11];
console.log("---reduce()---");
console.log(arrayNumber.reduce((x,y) => x + y));
//addition tous les elements
console.log("---");

//sort()
console.log("---sort()---");
console.log(arrayNumber.sort((a, b) => b - a));
console.log(arrayNumber.sort((a, b) => a - b));
console.log("---");

//filter()
filterArray = arrayNumber.filter((filnumbex) => filnumbex > 10)
console.log("---filter()---");
console.log("filter : ", filterArray);
console.log("---");

//filter() + sort() : IMPORTANT
disorderArray = arrayNumber.filter((mynumbex) => mynumbex > 10).sort((a, b) => b - a);
console.log("---filter() + sort()---");
console.log("disorder array : " + disorderArray);
console.log("---");

orderArray = arrayNumber.filter((number) => number > 10).sort((a, b) => a - b);
console.log("---filter() + sort()---");
console.log("order array : " + orderArray);
console.log("---");

//map()
mapArray = arrayNumber.map((nbnumber) => nbnumber > 10);
console.log("---map()---");
console.log("map() with array : " + mapArray);
console.log("---");

//filter() + map()
filtermapArray = arrayNumber.filter((mapnumber) => mapnumber > 10).map((a, b) => (a - b));
console.log("---filter() + map()---");
console.log("filter() + map() : " + filtermapArray);
console.log("---");

//------------------------------------------------------------------
//Function with constructor (this...)

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
};

console.log("...");

let blueBird = new Bird();

console.log("---Doesn't WORK---");
console.log(blueBird.name);
console.log(blueBird.color);
console.log(blueBird.numLegs);
console.log("---");

blueBird.name = 'Sarah';

console.log("---Done---");
console.log(blueBird.name);
console.log("---");

//------------------------------------------------------------------
//ownProps - property - hasOwnProperty :

function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

//---

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log("---");
console.log("ownProps = " + ownProps);
console.log("---");

//######################################################################
//Shema of function passed to object (variable)

/*
let variable = function(arg1, arg2, args) {
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.args = args;
};

let newVar = new variable("display_arg1", 18, true);

console.log("---");
console.log("newVar & 3 args : ", newVar.arg1, newVar.arg2, newVar.args)
console.log("---");
*/

//######################################################################
//------------------------------------------------------------------
//ES6
//Use class Syntax to Define a Constructor Function

let SpaceShuttle = function(targetPlanet) {
  this.targetPlanet = targetPlanet;
};

let aero = new SpaceShuttle('Jupiter');

console.log("---");
console.log("aero.targetPlanet = " + aero.targetPlanet);

//Good trick !
console.log("Object.keys(aero)", Object.keys(aero));
//return targetPlanet

console.log("typeof(aero.targetPlanet) = " + typeof(aero.targetPlanet));
//return string
console.log("---");

//------------------------------------------------------------------
//######################################################################
//Exercice

let membersRef = function(interest, age, xp) {
    this.interest = interest;
    this.age = age;
    this.xp = xp;
};

let refConfig = new membersRef("code_JS", 43, 2);

console.log("---");
console.log("refConfig : " + refConfig.interest, refConfig.age, refConfig.xp);
console.log("---");

//######################################################################
//Schema of class + constructor :

/*
class ... {
    constructor(...) {
        this.obj = obj;
    }
};

const newClass = new ...("...");
*/

//######################################################################
//The class syntax simply replaces the constructor function creation:

class SpaceShot {
  constructor(targetPlan) {
    this.targetPlan = targetPlan;
  }
};

const zeus = new SpaceShot('Jupiter');

console.log("---");
console.log("zeus = " + zeus.targetPlan);
console.log("---");

//######################################################################
//Exercice with innerHTML examples

class bigCraft {
    constructor(item, age, num) {
        this.item = item;
        this.age = age;
        this.num = num;
    }
}

const myRef = new bigCraft("ok", 15, 3);

console.log("---");
console.log("myRef = " + myRef.item, myRef.age, myRef.num);
console.log("---");

//innerHTML est la seule façon d'écrire ces balises
//`` indispensable à la notation innerHTML
//+= n'efface pas les balises précédentes
document.body.innerHTML += `<h2>${myRef.item}</h2>`;
document.body.innerHTML += `<h2>${myRef.age}</h2>`;
document.body.innerHTML += `<h2>${myRef.num}</h2>`;

//######################################################################
