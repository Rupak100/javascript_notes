Sure! Here’s a simple example demonstrating **event bubbling** in JavaScript.

---

### 🔹 **Event Bubbling Example**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Bubbling Example</title>
</head>
<body>

    <div id="grandparent" style="padding: 30px; background: lightgray;">
        Grandparent
        <div id="parent" style="padding: 20px; background: lightblue;">
            Parent
            <button id="child" style="padding: 10px;">Click Me</button>
        </div>
    </div>

    <script>
        // Event listeners for bubbling
        document.getElementById("grandparent").addEventListener("click", function() {
            console.log("Grandparent Clicked!");
        });

        document.getElementById("parent").addEventListener("click", function() {
            console.log("Parent Clicked!");
        });

        document.getElementById("child").addEventListener("click", function() {
            console.log("Child Clicked!");
        });
    </script>

</body>
</html>
```

---

### 🔹 **How Event Bubbling Works in This Example**
- If you click the **button (`#child`)**, the event first triggers on the button, then bubbles up:
  ```
  Child Clicked!
  Parent Clicked!
  Grandparent Clicked!
  ```
- If you click the **parent (`#parent`)** directly (not the button), it logs:
  ```
  Parent Clicked!
  Grandparent Clicked!
  ```
- If you click the **grandparent (`#grandparent`)**, only it logs:
  ```
  Grandparent Clicked!
  ```

This clearly demonstrates **event bubbling**, where the event moves **from child to parent to grandparent**.

Would you like an example of **event capturing (trickling down)** too? 🚀