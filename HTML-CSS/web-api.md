# **Web APIs in Depth**

## **What are Web APIs?**
Web APIs (Application Programming Interfaces) provide an interface for web applications to interact with various system functionalities, browsers, and external services. They enable developers to perform tasks like network requests, interacting with storage, manipulating the DOM, and accessing device capabilities.

---

## **Types of Web APIs**
Web APIs are broadly categorized into the following types:

### **1. Browser APIs (Client-Side Web APIs)**
These APIs are built into web browsers and provide functionality to web applications.

#### **a. DOM (Document Object Model) API**
- Allows JavaScript to manipulate HTML and CSS dynamically.
- Example:
  ```javascript
  document.getElementById("demo").innerHTML = "Hello, World!";
  ```

#### **b. Fetch API (Network Requests)**
- Provides a modern way to make HTTP requests asynchronously.
- Example:
  ```javascript
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data));
  ```

#### **c. Web Storage API**
- Used for storing key-value pairs locally in a web browser.
- Example (LocalStorage):
  ```javascript
  localStorage.setItem("username", "JohnDoe");
  console.log(localStorage.getItem("username"));
  ```

#### **d. Geolocation API**
- Retrieves the user's location (requires user permission).
- Example:
  ```javascript
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude, position.coords.longitude);
  });
  ```

#### **e. WebSockets API**
- Enables real-time, bi-directional communication between the client and server.
- Example:
  ```javascript
  const socket = new WebSocket("wss://example.com/socket");
  socket.onmessage = event => console.log(event.data);
  ```

#### **f. Notification API**
- Displays notifications to users.
- Example:
  ```javascript
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("Hello! This is a notification.");
    }
  });
  ```

#### **g. WebRTC API**
- Enables real-time communication like video and voice calling.
- Example:
  ```javascript
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => document.querySelector("video").srcObject = stream);
  ```

---

### **2. Server-Side Web APIs**
These APIs interact with backend services or third-party APIs via HTTP requests.

#### **a. RESTful APIs**
- Use HTTP methods (GET, POST, PUT, DELETE) for communication.
- Example (using Fetch API to consume a REST API):
  ```javascript
  fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => console.log(data));
  ```

#### **b. GraphQL APIs**
- A more flexible alternative to REST, allowing clients to request only the data they need.
- Example Query:
  ```graphql
  {
    user(id: "1") {
      name
      email
    }
  }
  ```

#### **c. Webhooks**
- Event-driven API mechanism where a server sends data to another server when an event occurs.
- Example:
  ```json
  {
    "event": "order_created",
    "order_id": "12345",
    "customer": "John Doe"
  }
  ```

---

## **How to Secure Web APIs?**
### **1. Authentication & Authorization**
- Use **OAuth 2.0**, **JWT (JSON Web Tokens)**, or **API Keys**.
- Example JWT Authentication:
  ```javascript
  fetch("https://api.example.com/protected", {
    headers: {
      "Authorization": "Bearer YOUR_JWT_TOKEN"
    }
  });
  ```

### **2. Rate Limiting**
- Prevent API abuse by limiting the number of requests per user/IP.

### **3. Input Validation & Sanitization**
- Prevent **SQL Injection** and **XSS (Cross-Site Scripting)** attacks.
- Example:
  ```javascript
  const userInput = document.getElementById("input").value;
  const sanitizedInput = userInput.replace(/[<>]/g, "");
  ```

### **4. HTTPS Encryption**
- Always use **HTTPS** to encrypt communication between the client and server.

---

## **Best Practices for Web APIs**
✅ **Use RESTful principles or GraphQL based on needs.**  
✅ **Return proper HTTP status codes (e.g., 200 for success, 404 for not found).**  
✅ **Document APIs using OpenAPI (Swagger) for better developer experience.**  
✅ **Use caching mechanisms (e.g., Redis, HTTP caching) to improve performance.**  
✅ **Implement logging and monitoring to track API usage and failures.**  

---

## **Conclusion**
Web APIs enable powerful interactions between web applications and external services, devices, and browsers. Mastering browser and server-side APIs can enhance performance, security, and user experience. 🚀

Would you like more details or practical examples on any specific API? 🤔

