### **📌 Complete List of DOM Methods in JavaScript**  

DOM (Document Object Model) methods allow you to manipulate HTML elements dynamically. Below is a **structured list of important DOM methods** categorized for easy understanding and implementation.

---

## **1️⃣ Selecting Elements**
| **Method** | **Description** | **Example** |
|------------|----------------|-------------|
| `document.getElementById(id)` | Selects an element by ID | `document.getElementById("myDiv")` |
| `document.getElementsByClassName(className)` | Selects elements by class (returns HTMLCollection) | `document.getElementsByClassName("myClass")` |
| `document.getElementsByTagName(tagName)` | Selects elements by tag (returns HTMLCollection) | `document.getElementsByTagName("p")` |
| `document.querySelector(selector)` | Selects the **first matching** element | `document.querySelector(".box")` |
| `document.querySelectorAll(selector)` | Selects **all matching** elements (returns NodeList) | `document.querySelectorAll("div")` |

---

## **2️⃣ Creating & Manipulating Elements**
| **Method** | **Description** | **Example** |
|------------|----------------|-------------|
| `document.createElement(tagName)` | Creates a new element | `let div = document.createElement("div")` |
| `element.appendChild(childElement)` | Appends a child inside an element | `parent.appendChild(childDiv)` |
| `element.insertBefore(newElement, referenceElement)` | Inserts before a specific child | `parent.insertBefore(newDiv, existingDiv)` |
| `element.removeChild(childElement)` | Removes a child element | `parent.removeChild(childDiv)` |
| `element.replaceChild(newChild, oldChild)` | Replaces an existing child | `parent.replaceChild(newDiv, oldDiv)` |

---

## **3️⃣ Modifying Attributes & Classes**
| **Method** | **Description** | **Example** |
|------------|----------------|-------------|
| `element.setAttribute(name, value)` | Sets an attribute | `div.setAttribute("id", "box")` |
| `element.getAttribute(name)` | Gets the value of an attribute | `div.getAttribute("id")` |
| `element.removeAttribute(name)` | Removes an attribute | `div.removeAttribute("id")` |
| `element.classList.add(className)` | Adds a class | `div.classList.add("active")` |
| `element.classList.remove(className)` | Removes a class | `div.classList.remove("active")` |
| `element.classList.toggle(className)` | Toggles a class on/off | `div.classList.toggle("hidden")` |

---

## **4️⃣ Modifying HTML & Text Content**
| **Method** | **Description** | **Example** |
|------------|----------------|-------------|
| `element.innerHTML` | Gets or sets the **HTML content** inside an element | `div.innerHTML = "<p>Hello</p>"` |
| `element.textContent` | Gets or sets only the **text content** | `div.textContent = "Hello"` |
| `element.innerText` | Similar to `textContent` but respects styling (e.g., `display: none`) | `div.innerText = "Hi"` |

---

## **5️⃣ Event Handling**
| **Method** | **Description** | **Example** |
|------------|----------------|-------------|
| `element.addEventListener(event, function)` | Attaches an event | `button.addEventListener("click", () => alert("Clicked!"))` |
| `element.removeEventListener(event, function)` | Removes an event | `button.removeEventListener("click", myFunction)` |
| `element.onclick = function` | Assigns a click event | `button.onclick = () => alert("Clicked!")` |

---

## **6️⃣ Traversing the DOM (Finding Elements)**
| **Property/Method** | **Description** | **Example** |
|---------------------|----------------|-------------|
| `element.parentElement` | Gets the parent of an element | `child.parentElement` |
| `element.children` | Gets all child elements (HTMLCollection) | `parent.children` |
| `element.firstElementChild` | Gets the first child element | `parent.firstElementChild` |
| `element.lastElementChild` | Gets the last child element | `parent.lastElementChild` |
| `element.nextElementSibling` | Gets the next sibling element | `div.nextElementSibling` |
| `element.previousElementSibling` | Gets the previous sibling element | `div.previousElementSibling` |

---

## **7️⃣ Styling Elements**
| **Method** | **Description** | **Example** |
|------------|----------------|-------------|
| `element.style.property = value` | Sets a CSS style property | `div.style.color = "red"` |
| `element.style.cssText` | Sets multiple styles at once | `div.style.cssText = "color: red; background: blue;"` |
| `window.getComputedStyle(element)` | Gets computed styles | `let color = window.getComputedStyle(div).color` |

---

## **8️⃣ Form Methods**
| **Method** | **Description** | **Example** |
|------------|----------------|-------------|
| `document.forms["formName"]` | Selects a form by name | `document.forms["loginForm"]` |
| `input.value` | Gets or sets input value | `document.getElementById("username").value` |
| `input.focus()` | Focuses on an input field | `input.focus()` |
| `input.blur()` | Removes focus from an input field | `input.blur()` |

---

## **9️⃣ Window & Document Methods**
| **Method** | **Description** | **Example** |
|------------|----------------|-------------|
| `window.open(url, target)` | Opens a new window/tab | `window.open("https://google.com", "_blank")` |
| `window.close()` | Closes the current window | `window.close()` |
| `window.alert(message)` | Shows an alert box | `alert("Hello!")` |
| `window.confirm(message)` | Shows a confirmation box | `let result = confirm("Are you sure?")` |
| `window.prompt(message, defaultValue)` | Gets user input | `let name = prompt("Enter your name")` |

---

## **🔟 Scroll & Resize Methods**
| **Method** | **Description** | **Example** |
|------------|----------------|-------------|
| `window.scrollTo(x, y)` | Scrolls to a position | `window.scrollTo(0, 500)` |
| `window.scrollBy(x, y)` | Scrolls relative to the current position | `window.scrollBy(0, 100)` |
| `element.scrollIntoView()` | Scrolls an element into view | `div.scrollIntoView({ behavior: "smooth" })` |
| `window.innerWidth` | Gets the viewport width | `console.log(window.innerWidth)` |
| `window.innerHeight` | Gets the viewport height | `console.log(window.innerHeight)` |

---

### **🎯 Summary**
📌 **DOM methods allow you to manipulate elements, attributes, styles, and events dynamically.**  
📌 **Important categories include:**
- Selecting elements (`querySelector`, `getElementById`)
- Modifying elements (`appendChild`, `removeChild`)
- Changing styles (`style.color`, `classList.add`)
- Handling events (`addEventListener`)
- Traversing the DOM (`parentElement`, `children`)
- Managing forms (`input.value`, `focus()`)
- Controlling the window (`alert()`, `scrollTo()`)

🚀 **Now you have a full set of DOM methods to use in your projects!**