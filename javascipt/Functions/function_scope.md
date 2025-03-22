### **Function Scope in JavaScript**
**Function scope** means that **variables declared inside a function are only accessible within that function**. They **cannot be accessed from outside** the function.

---

### **Example of Function Scope**
```javascript
function myFunction() {
    let message = "Hello"; // Function-scoped variable
    console.log(message);  // ✅ Accessible inside the function
}

myFunction();

console.log(message); // ❌ ReferenceError: message is not defined
```
- The variable `message` is **only accessible inside `myFunction()`**.
- **It cannot be accessed outside** the function.

---

### **Function Scope with `var`**
Before `let` and `const` were introduced, `var` was the only way to declare variables. It is **also function-scoped** but has some quirks.
```javascript
function example() {
    if (true) {
        var x = 10; // `var` is function-scoped, not block-scoped
    }
    console.log(x); // ✅ Accessible because it's function-scoped
}

example();
console.log(x); // ❌ ReferenceError (x is not available outside)
```
- `var` **ignores block scope** (inside `if`, `for`, etc.).
- It **only respects function scope**.

---

### **Difference Between `var`, `let`, and `const` in Function Scope**
```javascript
function test() {
    var a = "var scoped";  // Function-scoped
    let b = "let scoped";  // Block-scoped (inside function)
    const c = "const scoped"; // Block-scoped (inside function)

    console.log(a, b, c); // ✅ Accessible inside the function
}

test();
console.log(a); // ❌ ReferenceError
console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceError
```
**Summary:**
| Keyword | Function Scoped? | Block Scoped? |
|---------|----------------|--------------|
| `var`   | ✅ Yes         | ❌ No        |
| `let`   | ✅ Yes         | ✅ Yes       |
| `const` | ✅ Yes         | ✅ Yes       |

---

### **Nested Functions & Function Scope**
```javascript
function outer() {
    let outerVar = "I am outer";
    
    function inner() {
        let innerVar = "I am inner";
        console.log(outerVar); // ✅ Accessible (inner function can access outer function variables)
        console.log(innerVar); // ✅ Accessible inside inner function
    }

    inner();
    console.log(innerVar); // ❌ ReferenceError (innerVar is not accessible outside `inner()`)
}

outer();
```
🔹 **Inner functions can access variables of their parent function**, but the reverse is not true.

---

### **Closure & Function Scope**
Closures allow a function to **remember the variables from its function scope even after it has returned**.
```javascript
function outer() {
    let count = 0; // Function scope variable

    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer(); 
counter(); // Output: 1
counter(); // Output: 2
```
🔹 The function `inner()` **remembers `count` even after `outer()` has executed**, thanks to **closures**.

---

### **Key Takeaways**
- **Function Scope**: Variables declared inside a function (`let`, `const`, `var`) are **only accessible within that function**.
- **`var` is function-scoped**, while **`let` and `const` are block-scoped**.
- **Inner functions can access outer function variables**, but not vice versa.
- **Closures** allow a function to remember its scope even after execution.

Would you like a deep dive into closures or block scope? 🚀