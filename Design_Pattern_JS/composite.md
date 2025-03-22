# Composite Design Pattern in JavaScript

## Overview
The **Composite Design Pattern** is a structural pattern used to compose objects into tree structures to represent part-whole hierarchies. It allows clients to treat individual objects and compositions of objects **uniformly**.

This pattern is particularly useful for **hierarchical structures** like **UI components, file systems, organization charts, and DOM trees**.

---

## Why Use the Composite Pattern?
✔ Helps build **tree-like structures** where individual and composite objects are handled the same way.  
✔ Provides **scalability and flexibility** in managing complex hierarchies.  
✔ Reduces **code duplication** by treating leaf and composite nodes with a common interface.  
✔ Enhances **maintainability** by following **Single Responsibility Principle (SRP)**.  

---

## Example Use Cases
- **Graphical User Interfaces (GUIs)** – UI elements like buttons, panels, and containers.
- **File Systems** – Files and folders (directories) with nested structures.
- **Organization Hierarchies** – Employees, managers, and departments.
- **DOM Manipulation** – The Document Object Model (DOM) follows a composite structure.

---

## Implementation in JavaScript
### **1. Defining the Component Interface**
```javascript
class Component {
    add(component) {
        throw new Error("Method not implemented");
    }
    remove(component) {
        throw new Error("Method not implemented");
    }
    display(indent = 0) {
        throw new Error("Method not implemented");
    }
}
```
- This acts as a **base class** that defines a common interface.
- Methods like `add()`, `remove()`, and `display()` ensure a consistent structure.

### **2. Implementing Leaf Nodes (Individual Objects)**
```javascript
class Leaf extends Component {
    constructor(name) {
        super();
        this.name = name;
    }
    display(indent = 0) {
        console.log(`${' '.repeat(indent)}- ${this.name}`);
    }
}
```
- A **Leaf** is an individual object that does not contain children.
- Implements the `display()` method to print itself.

### **3. Implementing Composite Nodes (Containers)**
```javascript
class Composite extends Component {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }
    add(component) {
        this.children.push(component);
    }
    remove(component) {
        this.children = this.children.filter(child => child !== component);
    }
    display(indent = 0) {
        console.log(`${' '.repeat(indent)}+ ${this.name}`);
        this.children.forEach(child => child.display(indent + 2));
    }
}
```
- A **Composite** can contain multiple **children**, which can be **Leaf** or other **Composite** objects.
- Implements `add()`, `remove()`, and `display()` methods.

### **4. Usage Example: Building a File System Hierarchy**
```javascript
const root = new Composite("Root Directory");
const folder1 = new Composite("Folder 1");
const folder2 = new Composite("Folder 2");

const file1 = new Leaf("File 1.txt");
const file2 = new Leaf("File 2.txt");
const file3 = new Leaf("File 3.txt");

// Construct hierarchy
root.add(folder1);
root.add(folder2);
folder1.add(file1);
folder1.add(file2);
folder2.add(file3);

// Display the structure
root.display();
```
**Output:**
```
+ Root Directory
  + Folder 1
    - File 1.txt
    - File 2.txt
  + Folder 2
    - File 3.txt
```

---

## Advantages of Composite Pattern
| Feature | Benefit |
|---------|---------|
| **Hierarchy Representation** | Easily models tree structures |
| **Uniformity** | Treats individual and composite objects uniformly |
| **Scalability** | Supports complex nested structures |
| **Flexibility** | Can dynamically modify object structures |
| **Code Reusability** | Reduces redundant code in tree-based structures |

---

## When to Use Composite Pattern?
✔ When dealing with **tree structures** like UI components, file systems, or organizational hierarchies.  
✔ When individual objects and their containers should be **treated uniformly**.  
✔ When you need to **add or remove objects dynamically** within a structure.  
✔ When implementing **recursive processing** (e.g., traversing a DOM tree or a filesystem).  

---

## Conclusion
The **Composite Design Pattern** is a powerful approach for managing **nested hierarchical structures**. It promotes **reusability, flexibility, and maintainability** while ensuring a consistent way to handle both **individual elements (Leaf)** and **collections of elements (Composite)**.

By implementing this pattern in JavaScript, we can efficiently manage **UI components, file trees, and hierarchical data** while keeping the code modular and scalable.

