### Data Types in JavaScript

JavaScript, like many programming languages, supports various data types that allow developers to store and manipulate different kinds of data. These data types can be broadly classified into two categories: **primitive** and **non-primitive (reference)** types.

#### Table of Contents
1. [Primitive Data Types](#primitive-data-types)
   - [Number](#number)
   - [String](#string)
   - [Boolean](#boolean)
   - [Undefined](#undefined)
   - [Null](#null)
   - [Symbol](#symbol)
   - [BigInt](#bigint)
2. [Non-Primitive Data Types](#non-primitive-data-types)
   - [Object](#object)
3. [Type Checking](#type-checking)
4. [Type Conversion](#type-conversion)
   - [Implicit Conversion](#implicit-conversion)
   - [Explicit Conversion](#explicit-conversion)
5. [Examples](#examples)

### Primitive Data Types

Primitive data types are the most basic data types in JavaScript. They include:

1. **Number**
2. **String**
3. **Boolean**
4. **Undefined**
5. **Null**
6. **Symbol**
7. **BigInt**

#### Number

The `Number` type in JavaScript is used to represent both integer and floating-point numbers.

```javascript
let integer = 42;
let float = 3.14;
let negative = -7;
let infinity = Infinity;
let nan = NaN; // Not a Number
```

- **Special Numeric Values:** `Infinity`, `-Infinity`, and `NaN` (result of invalid or undefined mathematical operations).

#### String

The `String` type is used to represent textual data. Strings are created using single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).

```javascript
let singleQuote = 'Hello, world!';
let doubleQuote = "Hello, world!";
let backticks = `Hello, ${name}!`; // Template literal
```

- **Template Literals:** Allow embedded expressions and multi-line strings.

```javascript
let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, John!
```

#### Boolean

The `Boolean` type represents a logical entity and can have two values: `true` and `false`.

```javascript
let isStudent = true;
let isEmployed = false;
```

#### Undefined

A variable that has been declared but not assigned a value has the value `undefined`.

```javascript
let a;
console.log(a); // undefined
```

#### Null

The `null` value represents the intentional absence of any object value. It is one of JavaScript's primitive values.

```javascript
let b = null;
console.log(b); // null
```

#### Symbol

The `Symbol` type is used to create unique identifiers for objects. Each symbol value is unique.

```javascript
let sym1 = Symbol();
let sym2 = Symbol('description');
console.log(sym1 === sym2); // false
```

#### BigInt

The `BigInt` type is used for integers that are too large to be represented by the `Number` type.

```javascript
let bigIntNumber = 1234567890123456789012345678901234567890n;
console.log(bigIntNumber); // 1234567890123456789012345678901234567890n
```

### Non-Primitive Data Types

Non-primitive data types are objects and are more complex than primitive data types. In JavaScript, objects can be thought of as collections of key-value pairs.

#### Object

Objects are used to store collections of data and more complex entities.

```javascript
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
```

- **Arrays:** Special types of objects used to store ordered collections.

```javascript
let numbers = [1, 2, 3, 4, 5];
```

- **Functions:** First-class objects that can be stored in variables, passed as arguments, and returned from other functions.

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

- **Dates, Regular Expressions, and More:** JavaScript provides built-in objects for dates, regular expressions, etc.

### Type Checking

To determine the type of a variable, JavaScript provides the `typeof` operator.

```javascript
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a historical bug in JavaScript)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 123456789012345678901234567890n); // "bigint"
console.log(typeof { name: "Alice" }); // "object"
console.log(typeof [1, 2, 3]); // "object"
console.log(typeof function() {}); // "function"
```

### Type Conversion

JavaScript is a loosely typed language, meaning it performs type conversion automatically when needed. There are two types of type conversion:

#### Implicit Conversion

JavaScript automatically converts one data type to another when required.

```javascript
let result;

result = '5' + 5; // "55" (string concatenation)
result = '5' - 3; // 2 (string converted to number)
result = '5' * 2; // 10 (string converted to number)
result = '5' / 2; // 2.5 (string converted to number)
```

#### Explicit Conversion

Developers can explicitly convert data from one type to another using built-in functions.

```javascript
// String to Number
let num = Number("123"); // 123

// Number to String
let str = String(123); // "123"

// Boolean to Number
let boolNum = Number(true); // 1

// Number to Boolean
let bool = Boolean(0); // false
```

### Examples

#### Example 1: Working with Numbers

```javascript
let x = 10;
let y = 20.5;

console.log(x + y); // 30.5
console.log(x * y); // 205
console.log(x / y); // 0.4878048780487805
console.log(x - y); // -10.5

console.log(Infinity); // Infinity
console.log(-Infinity); // -Infinity
console.log(NaN); // NaN

let z = "123";
console.log(Number(z)); // 123
console.log(parseInt(z)); // 123
console.log(parseFloat(z)); // 123
```

#### Example 2: Working with Strings

```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // John Doe

let greeting = `Hello, ${firstName}!`;
console.log(greeting); // Hello, John!

console.log(firstName.length); // 4
console.log(firstName.toUpperCase()); // JOHN
console.log(firstName.toLowerCase()); // john
console.log(firstName.includes("oh")); // true
console.log(firstName.startsWith("Jo")); // true
console.log(firstName.endsWith("hn")); // true
```

#### Example 3: Working with Booleans

```javascript
let isOpen = true;
let isClosed = false;

console.log(isOpen && isClosed); // false
console.log(isOpen || isClosed); // true
console.log(!isOpen); // false
```

#### Example 4: Working with Objects

```javascript
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
    greet: function() {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    }
};

console.log(person.firstName); // Jane
console.log(person["lastName"]); // Doe
console.log(person.greet()); // Hello, Jane Doe!

person.age = 31;
console.log(person.age); // 31

person["country"] = "USA";
console.log(person.country); // USA
```

### Conclusion

Understanding data types is crucial for effective programming in JavaScript. Knowing how to declare, manipulate, and convert different data types will help you write more efficient and bug-free code. Remember to use `typeof` to check variable types and understand the differences between primitive and non-primitive data types for better memory management and performance.