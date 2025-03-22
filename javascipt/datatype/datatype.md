### **JavaScript Data Types**  

JavaScript has **two main categories** of data types:  
1. **Primitive Data Types** (Immutable, stored by value)  
2. **Non-Primitive (Reference) Data Types** (Mutable, stored by reference)  

---

### **1️⃣ Primitive Data Types** (Stored directly in memory)  
These are **immutable** and compared **by value**.  

| Data Type  | Description | Example |
|------------|------------|---------|
| **Number** | Represents integers & floating points | `let x = 10;` |
| **String** | Represents text, enclosed in quotes | `let name = "Alice";` |
| **Boolean** | Represents true/false values | `let isActive = true;` |
| **Undefined** | A variable declared but not assigned a value | `let a;` (`a` is `undefined`) |
| **Null** | Represents an empty or unknown value | `let b = null;` |
| **Symbol (ES6)** | Unique and immutable identifier | `let sym = Symbol("id");` |
| **BigInt (ES11)** | Handles large integers beyond `Number.MAX_SAFE_INTEGER` | `let bigNum = 9007199254740991n;` |

---

### **2️⃣ Non-Primitive (Reference) Data Types** (Stored by reference)  
These are **mutable** and compared **by reference**.  

| Data Type  | Description | Example |
|------------|------------|---------|
| **Object** | Collection of key-value pairs | `let obj = { name: "Alice", age: 25 };` |
| **Array** | Ordered collection of elements | `let arr = [1, 2, 3, 4];` |
| **Function** | A block of reusable code | `function greet() { console.log("Hello"); }` |

---

### **🚀 Key Points**
- **Primitive types** are stored in **stack memory** (copied by value).  
- **Reference types** are stored in **heap memory** (copied by reference).  
- **`typeof` operator** helps determine data types:
  ```js
  console.log(typeof "hello");  // "string"
  console.log(typeof 42);       // "number"
  console.log(typeof {});       // "object"
  console.log(typeof null);     // "object" (historical bug in JS)
  ```

Would you like a deeper explanation on any specific type? 🚀