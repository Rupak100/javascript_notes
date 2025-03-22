# Technical Review Report

## Review of: Git, HTML, CSS, JavaScript, Design Principles, Design Patterns

### Level: A1/A2

**Results:**  
- A1: 75%  
- A2: 20%

---

## Strengths:
- **Git:** Strong understanding of Git, Git commands, and GitLab.
- **HTML:**
  - Basic HTML structure and skeleton.
  - Understanding of `DOCTYPE`.
  - Knowledge of meta tags, SEO, and accessibility.
  - Understanding of semantic tags.
- **CSS:**
  - Understanding of CSS specificity.
  - Ability to center an inner div relative to an outer div.
  - Basic CSS coding.
  - Mouse-over effect (`Hello` → `Hello World`).
- **JavaScript:**
  - Basic understanding of JavaScript.
  - Event loop comprehension.
  - Hoisting (understood in theory but incorrect code implementation).
  - Closures.
  - Arrow vs normal functions.
  - Different ways to create an object.
  - Solved an optimized coding problem: **Sum of all numbers in a string**.

---

## Weaknesses & Areas of Improvement:
- **Git:**
  - Needs clarity on `git switch` vs `git checkout`.
  - Merging vs rebasing explanation needs improvement.
- **CSS:**
  - Difference between `inline` and `inline-block`.
  - Understanding if `width` and `height` can be applied to a `span` tag.
- **Design Principles:**
  - SOLID, KISS, DRY, and YAGNI concepts need improvement.
- **Design Patterns:**
  - Can explain Singleton pattern theoretically but cannot implement it.
- **JavaScript:**
  - Needs clarity on `shallow copy` vs `deep copy`.
  - Understanding of `setInterval` and `clearInterval` needs improvement.
  - Sorting objects - solution works for strings but fails for numbers.
  - Needs better understanding of **Promise resolution precedence**.
  - Needs to work on **this keyword** in arrow vs normal functions.

---

## Coding Questions & Solutions:

### **Correct Implementation:**

#### **Event Loop Execution Order:**
```javascript
console.log('1'); // 1
setTimeout(() => console.log('2')); // 3
console.log('3'); // 2
```

#### **Sum of Numbers in a String:**
```javascript
function getSum(str) {
  let value = str.split('_').reduce((acc, val) => {
    return acc + (!isNaN(val) ? Number(val) : 0);
  }, 0);
  console.log(value);
}

getSum('AB_12_CD_23_EF_20'); // 55
getSum('12_CD_23_EF_20'); // 55
```

#### **Currying Multiplication:**
```javascript
const product = (a) => (b) => b ? product(a * b) : a;
console.log(product(10)(2)()); // 20
console.log(product(10)(2)(2)()); // 40
```

---

### **Incorrect Implementations & Corrections:**

#### **Hoisting Issue:**
**Incorrect:**
```javascript
test(); // error
var test = 100;
function test() {
    console.log('test is function');
}
console.log(test); // 100
```
**Correction:**
```javascript
function test() {
    console.log('test is function');
}
var test = 100;
test(); // Now it works
console.log(test); // 100
```

#### **Shallow Copy Misconception:**
**Incorrect:**
```javascript
let obj = { a: 100, b: { c: 200 } };
let obj1 = obj;
obj1.a = 400; // This is a shallow copy, but changing obj1.a does not affect obj.b
```
**Correction:**
```javascript
let obj2 = JSON.parse(JSON.stringify(obj)); // Deep copy
```

#### **Sorting Objects - Incorrect Implementation:**
**Incorrect:**
```javascript
function sortObj(objList, key) {
  objList.sort((a, b) => (typeof a[key] == 'string' ? a[key] : a[key].toString()).localeCompare(
    typeof b[key] == 'string' ? b[key] : b[key].toString()
  ));
  console.log(objList);
}
```
**Correction:**
```javascript
function sortObj(objList, key) {
  objList.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  console.log(objList);
}
```

#### **Promise Resolution Precedence:**
**Code Snippet:**
```javascript
new Promise(function (resolve, reject) {
  console.log('promise');
  reject('resolve 3');
  resolve('resolve 1');
  console.log('log-1');
  resolve('resolve 2');
  console.log('log-2');
  console.log('promise-2');
});
```
**Explanation:**
- `reject('resolve 3')` executes first, setting the promise state to **rejected**.
- All subsequent `resolve()` calls are ignored.
- Console log output:
  ```
  promise
  log-1
  log-2
  promise-2
  ```

#### **Singleton Pattern - Incorrect Implementation:**
**Incorrect:**
```javascript
let log = new Object();
class Logger() {
    // logic
}
let log = new Logger();
```
**Correction:**
```javascript
class Logger {
  constructor() {
    if (!Logger.instance) {
      Logger.instance = this;
    }
    return Logger.instance;
  }
}
const logger1 = new Logger();
const logger2 = new Logger();
console.log(logger1 === logger2); // true
```

---

## Recommended Areas of Focus:
1. **Understanding `this` keyword** in different function contexts.
2. **Async and defer attributes** in the `<script>` tag.
3. **Working of Promises** and handling multiple resolve/reject cases.
4. **Deep understanding of design principles** (SOLID, DRY, KISS, YAGNI).
5. **Implementing design patterns** practically.
6. **Hands-on problem-solving** to enhance real-world coding skills.

---

## Recommended Reading:
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web.Dev JavaScript Learning Path](https://web.dev/learn/javascript/)

---

## Summary:
The candidate demonstrates a strong theoretical understanding of most topics. However, practical coding skills need improvement. He should focus on hands-on experience with core concepts and be able to explain his code clearly. Without this, it may seem like he is simply memorizing answers rather than truly understanding them.

