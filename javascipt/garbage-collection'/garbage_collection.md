## **JavaScript Garbage Collection & Mark-and-Sweep Algorithm**

### **🗑️ What is Garbage Collection in JavaScript?**
JavaScript is a **dynamically typed and garbage-collected language**, meaning that memory management is **handled automatically**. The **Garbage Collector (GC)** identifies and removes **unreachable** objects from memory to free up space.

In **low-level languages** (e.g., C, C++), developers manually allocate and deallocate memory using `malloc()` and `free()`. But in **JavaScript**, memory is automatically managed.

---

## **📌 How JavaScript Manages Memory?**
Memory in JavaScript is divided into **two main areas**:

1. **Heap Memory** → Where objects and functions are stored.
2. **Stack Memory** → Where primitive values and function calls are stored.

When objects are no longer needed, the garbage collector **removes them from the heap** to free memory.

---

## **🚀 Mark-and-Sweep Algorithm (How GC Works)**
The **Mark-and-Sweep algorithm** is the most common technique used for garbage collection in JavaScript.

### **🔹 Step 1: Mark Phase 🏷️**
- The Garbage Collector **identifies all active (reachable) objects** in memory.
- It starts from **root references** (like `window`, `globalThis`, and `document` in browsers).
- It follows all references to other objects and **marks them as "in use"**.

### **🔹 Step 2: Sweep Phase 🧹**
- The Garbage Collector **removes all unmarked (unreachable) objects** from memory.
- This frees up memory for future use.

---

## **📌 Example of Garbage Collection**
```js
function demo() {
    let obj = { name: "Alice" }; // Object created in heap memory
    console.log(obj.name);
} // obj goes out of scope after function execution
demo(); // "Alice" is printed
// Garbage Collector removes `obj` from memory
```
Since `obj` is no longer referenced **after `demo()` finishes execution**, it is **marked for garbage collection**.

---

## **🚀 When Does Garbage Collection Happen?**
JavaScript engines (like **V8 in Chrome and Node.js**) **automatically** run garbage collection **periodically**. It is **not predictable** and happens:
1. When memory usage is high.
2. During idle time when the program is not actively running.
3. When the JavaScript engine determines it's necessary.

💡 **JavaScript does not provide explicit methods like `gc()` to trigger garbage collection manually**.

---

## **🚨 Common Memory Leak Problems & Prevention**
Even though JavaScript has garbage collection, **memory leaks** can still happen when objects remain in memory unintentionally.

### **1️⃣ Accidental Global Variables**
If you declare a variable **without `let`, `const`, or `var`**, it **attaches to the global object** and won’t be garbage collected.
```js
function leak() {
    myVar = "This is a leak"; // No `let`, `const`, or `var`
}
leak();
console.log(globalThis.myVar); // Stays in memory
```
**✅ Fix:** Always use `let`, `const`, or `var`.

---

### **2️⃣ Closures Holding References**
A closure **retains references** to variables outside its scope, preventing garbage collection.
```js
function outer() {
    let bigArray = new Array(1000000).fill("Memory Leak");

    return function inner() {
        console.log(bigArray[0]); // Reference to `bigArray` prevents GC
    };
}

const closureFunc = outer(); // `bigArray` is never freed
```
**✅ Fix:** Set references to `null` when they are no longer needed.
```js
function outer() {
    let bigArray = new Array(1000000).fill("Memory Leak");

    return function inner() {
        console.log(bigArray[0]);
        bigArray = null; // Allow garbage collection
    };
}
```

---

### **3️⃣ Unused DOM References**
If event listeners are attached to DOM elements **that are later removed**, they **prevent garbage collection**.
```js
const button = document.createElement("button");
button.innerText = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", () => {
    console.log("Clicked!");
});

// Later, removing the button but event listener still holds reference!
document.body.removeChild(button); // Memory leak ⚠️
```
**✅ Fix:** Manually remove event listeners before removing elements.
```js
button.removeEventListener("click", handler);
```

---

### **🚀 Key Takeaways**
- **Garbage collection** is automatic in JavaScript (managed by the JS engine).
- **Mark-and-Sweep algorithm** is the most common method.
- **Memory leaks** can still occur if objects remain referenced unintentionally.
- Always **clear references** when objects are no longer needed.

Would you like an example of **manual memory management tricks** in JavaScript? 🚀