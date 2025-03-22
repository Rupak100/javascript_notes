# JavaScript Interview Questions on Closures

Closures are one of the most important topics in JavaScript interviews. Let's dive into some common interview questions covering closures, lexical scope, output-based questions, polyfills, and more.

## What is a Closure?
A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing. Closures are formed when an inner function accesses variables from its enclosing function.

## What is Lexical Scope?
Lexical scope means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. However, the opposite is not true: variables defined inside a function are not accessible outside of it.

### Example:
```js
function foo() {
  var name = 'Roadside Coder'; // Local variable
  function displayName() { // Closure
    alert(name);
  }
  displayName();
}
foo();
```

## Why do we use Closures?
Closures enable functions to have "private" variables. They help:

- Maintain state across function executions
- Create private variables
- Implement data hiding and encapsulation
- Optimize performance by caching values

## Closure Scope Chain
Closures have three scopes:
1. Local Scope (Own scope)
2. Outer Function Scope
3. Global Scope

---
## Common Interview Questions on Closures

### 1. What are the advantages of Closures?
- Enables data encapsulation
- Allows function factories
- Helps maintain state in async operations
- Useful in functional programming

### 2. What is the difference between closure and scope?
- **Scope** defines what variables are accessible where.
- **Closures** allow an inner function to retain access to variables from its outer function.

### 3. Output-Based Question:
```js
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // Output ?
  }
  console.log(count); // Output?
})();
```
#### Solution:
Output: `1` and `0`

### 4. Function Implementation Question:
Create a function named `createBase` to achieve the following functionality:
```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```
#### Solution:
```js
function createBase(baseNumber) {
  return function (N) {
    return baseNumber + N;
  };
}
```

### 5. Optimizing Performance with Closures:
```js
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
closure(6); // Faster lookup
```

### 6. Output-Based Question:
```js
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);
  }, 1000);
}
```
#### Solution:
Output: `3 3 3` (because of function closure capturing `var i`).

### 7. Using Closures to Create a Private Counter:
```js
function counter() {
  var _counter = 0;
  return {
    add: function (increment) { _counter += increment; },
    retrieve: function () { return `The counter is currently at: ${_counter}`; }
  };
}
var c = counter();
c.add(5);
c.add(9);
c.retrieve(); // The counter is currently at: 14
```

### 8. What is the Module Pattern?
```js
var Module = (function () {
  function privateMethod() {
    // private
  }
  return {
    publicMethod: function () {
      // can access privateMethod()
    }
  };
})();
```

### 9. Modify the function so the output is printed once:
```js
let view;
function likeTheVideo() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already Subscribed");
    } else {
      view = "Roadside Coder";
      called++;
      console.log("Subscribe to", view);
    }
  };
}
let isSubscribe = likeTheVideo();
isSubscribe(); // Subscribe to Roadside Coder
isSubscribe(); // Already Subscribed
```

### 10. Polyfill for `_.once` method:
```js
function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello = once(() => console.log("hello"));
hello();
hello(); // Won't execute again
```

### 11. Polyfill for `_.memoize` method:
```js
function memoize(func) {
  let res = {};
  return function (...args) {
    const argsIndex = JSON.stringify(args);
    if (!res[argsIndex]) res[argsIndex] = func(...args);
    return res[argsIndex];
  };
}

const clumsySquare = memoize((num) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num * 2;
});

console.time("First call");
console.log(clumsySquare(9467));
console.timeEnd("First call");

console.time("Second call");
console.log(clumsySquare(9467));
console.timeEnd("Second call");
```

---
Got any suggestions for improvements? Let's connect on Twitter! 🚀

closure is used for encapsulation 
