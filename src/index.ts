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
let id: number = 5;
let company: string = 'FK Web Dev';
let isPublished: boolean = true;
let x: any = "Hello"; // can  be any type

// array with all types number
let ids: number[] = [1,2,3,4,5]

// array with different types, NOT predefined, NO specific order (any types)
let arr: any[] = ['Hello', 1, true]

// Tuple, any can be any type, tuple can be all types, but predefined and that order 
let person: [number, string, boolean] = [1, 'Fabian', true]  //have to be in the predefined spot
// Tuple Array
let employee: [number, string][] = [
  [1, 'Jack'],
  [2, 'Sandra'],
  [3, 'Mark'] 
]

// Union, i.e.: if you want a variable hold more than one type
let pid: string | number = 25;  // pid of type number
// pid can also be a string, because of the union we made
pid  = 'firstArticle';

// Enum, enumerated type, set of named constants, number or string
enum Direction1 {  // by default enums start with number 0
  Up,
  Down,
  Left,
  Right
}

// Want to start with other number
enum Direction2 {  // now start with number 1
  Up = 1,
  Down,
  Left,
  Right
}

// Can also make enums of type string
enum Direction3 {  
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log('Direction1.Up:', Direction1.Up)
console.log('Direction2.Up:', Direction2.Up)
console.log('Direction3.Up:', Direction3.Up)

// Objects, we can type an object, like we can with array's, only just a bit different
const user: {
  id: number,
  name: string
} = {                       // This is allowed, but looks a bit messy
  id: 1,                                       
  name: 'John'
}
// Better syntax for typing an Object, other than using an Interface!
type User = {
  id: number,
  name: string
}

const user2: User = {
  id: 2,
  name: "Jack"
}

// Type Assertion, specify an entity as a different type, there are two kind of syntax
let cid: any = 50;
// syntax 1:
let customerId = <number>cid;
// syntax 2:
let customerId2 = cid as string

let customerId3 = cid as string
customerId3 = 'fifty';

console.log('customerId:', customerId)
console.log('customerId2:', customerId2)
console.log('customerId3:', customerId3)

// Functions, arguments must be typed and the type of the return value
function addNum(x: number, y: number): number {
  return x + y;
}

// Void, Functions with no return value, there for no return type, it's void
function log(message: string): void {
  console.log(message)
}
log('Hello, this function has no return value, it\'s return value type is void!')