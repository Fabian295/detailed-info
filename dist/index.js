"use strict";
// console.log('Yes, start Detailed Project!')
/******* Detailed info TS Project
 *      Setup tsconfig file : tsc --init
 *
   Watch changes :
 *       tsc --watch
 *
 * In the config file set the "outDir" to "./src"
 * and make a src named folder for your .ts files and
 * other development environment assets.
 *
 * The dist folder will be created automaticcally after first
 * compilation
 *
 *
 * ********/
// Basic Types
let id = 5;
let company = 'FK Web Dev';
let isPublished = true;
let x = "Hello"; // can  be any type
// array with all types number
let ids = [1, 2, 3, 4, 5];
// array with different types, NOT predefined, NO specific order (any types)
let arr = ['Hello', 1, true];
// Tuple, any can be any type, tuple can be all types, but predefined and that order 
let person = [1, 'Fabian', true]; //have to be in the predefined spot
// Tuple Array
let employer = [
    [1, 'Jack'],
    [2, 'Sandra'],
    [3, 'Mark']
];
// Union, i.e.: if you want a variable hold more than one type
let pid = 25; // pid of type number
// pid can also be a string, because of the union we made
pid = 'firstArticle';
// Enum, enumerated type, set of named constants, number or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// Want to start with other number
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
// Can also make enums of type string
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
console.log('Direction1.Up:', Direction1.Up);
console.log('Direction2.Up:', Direction2.Up);
console.log('Direction3.Up:', Direction3.Up);
// Objects, we can type an object, like we can with array's, only just a bit different
const user = {
    id: 1,
    name: 'John'
};
const user2 = {
    id: 2,
    name: "Jack"
};
// Type Assertion, specify an entity as a different type, there are two kind of syntax
let cid = 50;
// syntax 1:
let customerId = cid;
// syntax 2:
let customerId2 = cid;
let customerId3 = cid;
customerId3 = 'fifty';
console.log('customerId:', customerId);
console.log('customerId2:', customerId2);
console.log('customerId3:', customerId3);
// Functions, arguments must be typed and the type of the return value
function addNum(x, y) {
    return x + y;
}
// Void, Functions with no return value, there for no return type, it's void
function log(message) {
    console.log(message);
}
log('Hello, this function has no return value, it\'s return value type is void!');
// Using the Interface with an Object
const lTrueman = {
    id: 1,
    firstName: 'Larry',
    age: 42
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log('Add Function:', add(7, 10));
console.log('Sub Function:', sub(37, 22));
// Classes, can be made with an Interface, optionally
class Employee {
    constructor(id, firstName, age) {
        this.id = id;
        this.firstName = firstName;
        this.age = age;
    }
    register() {
        return `${this.firstName}, age: ${this.age}, is now registered!`;
    }
    introduce(city) {
        city = 'Amsterdam';
        return `<br/> Hello, I am ${this.firstName}, I am ${this.age} years old and I live in ${city}!`;
    }
}
let citizen = new Employee(10, 'Tristan', 27);
// return `${this.location} is "(${this.coordX}, ${this.coordY})"`;
class Point {
    constructor(x, y, location) {
        this.coordX = x;
        this.coordY = y;
        this.location = location;
    }
    getLocation() {
        return `The coords of ${this.location} is "(${this.coordX}, ${this.coordY})".`;
    }
}
const place = new Point(110, 68, 'Amsterdam');
console.log(place.getLocation());
class Geografic extends Point {
    constructor(x, y, location, pos) {
        super(x, y, location);
        this.position = pos;
    }
    getLocation() {
        return `The coordinates for ${this.location} are (${this.coordX}, ${this.coordY})`;
    }
}
let coords = new Geografic(140, 230, "New York", "([x, y])");
console.log(coords.getLocation());
