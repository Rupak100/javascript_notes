Sure! Here’s a simple **Event Delegation Model** example in JavaScript.

---

### 🔹 **What is Event Delegation?**
Instead of attaching event listeners to each child element individually, we attach a **single event listener to a common ancestor (parent element)**. When an event occurs, it bubbles up to the parent, and we use **event.target** to determine which child was clicked.

---

### ✅ **Example: Event Delegation for Multiple Buttons**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Delegation Example</title>
</head>
<body>

    <div id="buttonContainer">
        <button class="btn">Button 1</button>
        <button class="btn">Button 2</button>
        <button class="btn">Button 3</button>
        <button class="btn">Button 4</button>
    </div>

    <script>
        // Using event delegation: Adding a single event listener to the parent
        document.getElementById("buttonContainer").addEventListener("click", function(event) {
            // Check if the clicked element is a button with class 'btn'
            if (event.target.classList.contains("btn")) {
                console.log(event.target.textContent + " Clicked!");
            }
        });
    </script>

</body>
</html>
```

---

### 🔹 **How Event Delegation Works in This Example**
- Instead of attaching individual event listeners to **each button**, we attach **one event listener** to `#buttonContainer` (the parent).
- When a button is clicked, the event bubbles up to `#buttonContainer`.
- **`event.target`** helps us identify which button was clicked and log its text.

### ✅ **Advantages of Event Delegation**
1. **Better Performance** – Only one event listener instead of multiple.
2. **Handles Dynamic Elements** – Works even for buttons added later in the DOM.
3. **Less Memory Usage** – Fewer event listeners mean less memory consumption.

Would you like me to show **dynamic button creation** to prove event delegation works even for new elements? 🚀