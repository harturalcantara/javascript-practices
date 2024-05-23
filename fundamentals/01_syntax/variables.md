### Variables in JavaScript

Variables are fundamental in programming languages, and JavaScript is no exception. They are used to store data that can be manipulated and retrieved throughout the execution of a program. In JavaScript, variables can be declared using the keywords `var`, `let`, and `const`. Each of these keywords has different properties and scoping rules.

#### Table of Contents
1. [Declaring Variables](#declaring-variables)
2. [Variable Naming Conventions](#variable-naming-conventions)
3. [Variable Scope](#variable-scope)
4. [Hoisting](#hoisting)
5. [Differences between `var`, `let`, and `const`](#differences-between-var-let-and-const)
6. [Examples](#examples)

### Declaring Variables

Variables in JavaScript are declared using one of three keywords: `var`, `let`, or `const`.

#### Using `var`

The `var` keyword declares a variable, optionally initializing it to a value.

```javascript
var name = "John Doe";
var age = 30;
var isStudent = false;
```

#### Using `let`

The `let` keyword also declares a variable, optionally initializing it to a value. `let` is block-scoped, meaning it is only available within the block it is defined.

```javascript
let name = "Jane Doe";
let age = 25;
let isStudent = true;
```

#### Using `const`

The `const` keyword declares a constant variable, which means its value cannot be reassigned. However, if the variable is an object or an array, the contents of the object or array can be changed.

```javascript
const name = "Jack Doe";
const age = 28;
const isStudent = true;

const person = {
    name: "Jack Doe",
    age: 28
};

// person can be modified
person.name = "John Smith";
```

### Variable Naming Conventions

- **Case Sensitivity:** Variable names are case-sensitive (`myVariable` and `myvariable` are different).
- **Rules:** 
  - Must start with a letter, underscore (_), or dollar sign ($).
  - Subsequent characters can also be digits (0-9).
  - Cannot use reserved keywords (e.g., `let`, `class`, `return`, etc.).

**Examples of valid variable names:**

```javascript
let firstName;
let _lastName;
let $age;
let user2;
```

**Examples of invalid variable names:**

```javascript
// let 2user; // SyntaxError
// let my-name; // SyntaxError
// let class; // SyntaxError
```

### Variable Scope

Scope determines the accessibility of variables. JavaScript has function scope and block scope.

#### Function Scope

Variables declared with `var` are function-scoped, meaning they are accessible throughout the entire function.

```javascript
function myFunction() {
    var x = 10;
    if (true) {
        var y = 20;
        console.log(x); // 10
        console.log(y); // 20
    }
    console.log(x); // 10
    console.log(y); // 20
}

myFunction();
```

#### Block Scope

Variables declared with `let` and `const` are block-scoped, meaning they are only accessible within the block they are defined.

```javascript
function myFunction() {
    let x = 10;
    if (true) {
        let y = 20;
        console.log(x); // 10
        console.log(y); // 20
    }
    console.log(x); // 10
    // console.log(y); // ReferenceError: y is not defined
}

myFunction();
```

### Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (function or global scope). However, only the declaration is hoisted, not the initialization.

#### `var` Hoisting

Variables declared with `var` are hoisted to the top of their function scope.

```javascript
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

#### `let` and `const` Hoisting

Variables declared with `let` and `const` are hoisted but not initialized. Accessing them before the declaration results in a `ReferenceError`.

```javascript
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // 10

// console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;
console.log(z); // 15
```

### Differences between `var`, `let`, and `const`

- **Scope:** 
  - `var` is function-scoped.
  - `let` and `const` are block-scoped.
  
- **Hoisting:**
  - `var` declarations are hoisted and initialized with `undefined`.
  - `let` and `const` are hoisted but not initialized.

- **Reassignment:**
  - `var` and `let` variables can be reassigned.
  - `const` variables cannot be reassigned.

- **Redeclaration:**
  - `var` can be redeclared within the same scope.
  - `let` and `const` cannot be redeclared within the same scope.

### Examples

#### Example 1: `var` Declaration

```javascript
function exampleVar() {
    console.log(a); // undefined
    var a = 10;
    console.log(a); // 10

    if (true) {
        var a = 20; // same `a` as above
        console.log(a); // 20
    }

    console.log(a); // 20
}

exampleVar();
```

#### Example 2: `let` Declaration

```javascript
function exampleLet() {
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 10;
    console.log(b); // 10

    if (true) {
        let b = 20; // different `b` than above
        console.log(b); // 20
    }

    console.log(b); // 10
}

exampleLet();
```

#### Example 3: `const` Declaration

```javascript
function exampleConst() {
    // console.log(c); // ReferenceError: Cannot access 'c' before initialization
    const c = 10;
    console.log(c); // 10

    if (true) {
        const c = 20; // different `c` than above
        console.log(c); // 20
    }

    console.log(c); // 10

    // c = 30; // TypeError: Assignment to constant variable.
}

exampleConst();
```

### Conclusion

Understanding variables and their behavior in JavaScript is crucial for writing effective and bug-free code. Remember to choose `let` and `const` over `var` for better scoping and avoid issues related to hoisting. Use `const` for values that should not change and `let` for values that will be reassigned.