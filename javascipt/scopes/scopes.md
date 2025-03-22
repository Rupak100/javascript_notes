### **1. Global Scope**
A variable declared in the **global scope** can be accessed from anywhere in the program.

#### **Example:**
```js
var globalVar = "I am global"; 

function printGlobal() {
    console.log(globalVar); // ✅ Accessible
}

printGlobal();
console.log(globalVar); // ✅ Accessible outside function as well
```
✅ `globalVar` is declared outside any function, making it **globally accessible**.

---

### **2. Local (or Functional) Scope**
Variables declared inside a **function** are accessible **only within that function**.

#### **Example:**
```js
function localScope() {
    let localVar = "I am local"; 
    console.log(localVar); // ✅ Accessible inside the function
}

localScope();
console.log(localVar); // ❌ Uncaught ReferenceError: localVar is not defined
```
🚫 `localVar` is not accessible outside `localScope()` because it is function-scoped.

---

### **3. Block Scope**
Variables declared using `let` or `const` inside a **block `{}`** are only accessible within that block.

#### **Example:**
```js
{
    let blockVar = "I am block-scoped";
    console.log(blockVar); // ✅ Accessible inside the block
}

console.log(blockVar); // ❌ Uncaught ReferenceError: blockVar is not defined
```
🚫 `blockVar` is **not accessible** outside `{}` because it is **block-scoped**.

#### **Example with `if` block:**
```js
if (true) {
    let x = 10;
    console.log(x); // ✅ Accessible inside
}
console.log(x); // ❌ Uncaught ReferenceError: x is not defined
```
🚫 `x` is only available **inside the `if` block**.

#### **Example with `var` (Function-scoped, not Block-scoped)**
```js
if (true) {
    var y = 20;
}
console.log(y); // ✅ Accessible, because `var` is NOT block-scoped
```
✅ `var` is **not block-scoped**, but function-scoped.

---

### **4. Lexical Scope**
**Lexical scope (or Static scope)** means **a function can access variables from its outer scope** where it was **defined**.

#### **Example:**
```js
function outer() {
    let outerVar = "I am outer";

    function inner() {
        console.log(outerVar); // ✅ Accessible due to Lexical Scope
    }

    inner();
}

outer();
console.log(outerVar); // ❌ Uncaught ReferenceError: outerVar is not defined
```
✅ `inner()` can access `outerVar` because it is **lexically scoped** inside `outer()`.  
🚫 But `outerVar` is **not accessible outside** `outer()`.

#### **Another Example:**
```js
function parent() {
    let name = "John";

    function child() {
        console.log(name); // ✅ Accessible due to lexical scope
    }

    return child;
}

let myFunc = parent();
myFunc(); // ✅ Prints "John"
```
Here, `child()` is a **closure** that remembers its **lexical scope** even after `parent()` finishes execution.

---

### **5. Dynamic Scope (Not in JavaScript)**
JavaScript **does not have dynamic scope**, but some languages (like Bash, Perl) do.

In **dynamic scope**, a function **looks for variables in the calling context, not where it was defined**.

#### **Example in JavaScript (Simulated using `this`)**
```js
function printName() {
    console.log(this.name);
}

const obj1 = { name: "Alice", say: printName };
const obj2 = { name: "Bob", say: printName };

obj1.say(); // ✅ Prints "Alice"
obj2.say(); // ✅ Prints "Bob"
```
Here, `this.name` depends on **which object calls it**, making it behave **dynamically**.

JavaScript's `this` is **runtime-bound** (like dynamic scope), but normal variables **follow lexical scope**.

---

### **Summary Table**
| Scope Type       | Description | Example |
|------------------|------------|---------|
| **Global Scope** | Accessible everywhere | `var x = 10; console.log(x);` |
| **Local (Function) Scope** | Exists only inside functions | `function fn() { let y = 5; }` |
| **Block Scope** | Exists only inside `{}` (with `let`/`const`) | `{ let z = 20; }` |
| **Lexical Scope** | Inner functions access outer function’s variables | `function outer() { let a; function inner() { console.log(a); } }` |
| **Dynamic Scope (Not in JS)** | Variables are resolved based on caller’s scope (simulated using `this`) | `obj.say();` |

🚀 **Key Takeaways:**
- **JavaScript follows Lexical Scope (Static Scope).**
- **`var` is function-scoped**, while **`let` and `const` are block-scoped**.
- **Closures use lexical scope to remember variables even after a function executes.**

Let me know if you need any clarifications! 🚀