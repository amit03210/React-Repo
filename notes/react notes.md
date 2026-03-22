React is just others people’s JavaScript code.



# DOM

- The collection of object in the computer memory that represent the HTML elements that define  a web-page.

- It provides the ability to analyse and change the document and change the document being presented to the user.

- HTML elements -> converted to -> DOM -> that what render on the browser.

- Manupulating the DOM -> brower rerender to reflect the change.

Q. How we can manipulate the DOM.

A. Through browser provided API.

---

# API

- Application programming interface is the function, objects, URLs, etc. That define how a program can be communicated with.
  
  

# Detailed Notes: 008 DOM Manipulation



## 1. What is the DOM?

- DOM = Document Object Model.

- It is a **tree-like representation** of HTML content created by the browser.

- Example:

```.html

<ul>

    <li>One</li>

    <li>Two</li>

</ul>

```

becomes a tree with `ul` as the parent and `li` nodes as children.

- Important: The DOM is not static; it can be **modified dynamically** using JavaScript.
  
  

## 2. Why DOM Manipulation Matters

- Changing the DOM allows web pages to be **interactive** and **dynamic**.

- Without manipulation, pages would remain static after loading.

- Every change triggers the **rendering engine** to repaint the screen.
  
  

## 3. Browser APIs

- Browser provides **APIs (Application Programming Interfaces)** to interact with the DOM.

- These are not part of the core JavaScript language but are exposed by the browser.

- Examples:

  - `document.createElement("li")` → creates a new list item.

  - `element.appendChild(newNode)` → attaches the new node to the DOM.

- APIs act as a bridge between **JavaScript code** and the **rendering engine**.
  
  

## 4. Browser Internals

- **JavaScript Engine**: Executes JS code (e.g., V8 in Chrome, SpiderMonkey in Firefox).

- **Rendering Engine**: Handles layout, styling, and painting of the DOM (e.g., Blink, Gecko).

- **APIs**: Connect the two, allowing JS to request changes that the rendering engine applies.
  
  

## 5. Example Walkthrough

- Initial HTML:

```.html
  <ul>

    <li>One</li>

    <li>Two</li>

  </ul>
```

* JavaScript:
  
      const ul = document.querySelector("ul");
      const li = document.createElement("li");
      li.innerText = "Three";
      ul.appendChild(li);

* Result:
  
  * DOM now has 3 items.
  * Browser rerenders → user sees “One, Two, Three”.
  
  ---------
6. Timed DOM Updates

Using `setTimeout`:

```js
setTimeout(() => {
     const li = document.createElement("li");
     li.innerText = "Four";
     ul.appendChild(li);
   }, 2000);
```

* After 2 seconds, a new item appears.

* Demonstrates **delayed manipulation** and dynamic updates after page load.

---------

7. Performance Considerations

Direct DOM manipulation can be **expensive**:

* * Each change may trigger reflow/repaint.
  * Large-scale updates can slow down rendering.

* Modern frameworks (React, Vue, Angular):
  
  * Use **virtual DOMs** or optimized diffing algorithms.
  * Reduce unnecessary re-renders.
  * Provide developer-friendly abstractions.
  
  ----------------
8. Key Takeaways
* DOM is the **live representation** of a webpage.

* Browser APIs allow JS to **create, update, and remove elements**.

* Every change → browser rerenders → dynamic experience.

* Direct manipulation is powerful but costly → frameworks optimize this process.

---

Q) Rendering Engine

When you **write HTML code directly**, the browser parses it once at page load and builds the **initial DOM tree**. That’s a static render.

For **rerendering**, here’s how the flow works:

### 1. Static HTML Load

* Browser reads your HTML file.
* It constructs the DOM tree and paints it on the screen.
* At this stage, there’s no rerender — it’s just the first render.

### 2. JavaScript + Browser APIs

* If you want to change the DOM after load, you use **browser APIs** (like `appendChild`, `removeChild`, `setAttribute`, etc.).
* These APIs tell the **rendering engine**: “Hey, the DOM has changed.”
* Rendering engine recalculates layout, styles, and repaints the screen.
* That’s the rerender.

### 3. Example

    <ul>
      <li>One</li>
      <li>Two</li>
    </ul>
    
    <script>
      const ul = document.querySelector("ul");
      const li = document.createElement("li");
      li.innerText = "Three";
      ul.appendChild(li); // API call → DOM changes → rerender
    </script>

* Initially: 2 items.
* After JS runs: 3 items.
* Browser rerenders automatically because the DOM changed.

### 4. Key Point

* **HTML alone** doesn’t rerender — it’s static.
* **Browser APIs (via JavaScript)** trigger rerenders by modifying the DOM.
* The rerender is automatic; you don’t manually “call rerender.”
* The browser does **not wait seconds** or poll for changes.
* DOM changes trigger rerender synchronously (right after the change is applied).
  
  

Think of it like this:

* **HTML** = blueprint.
* **DOM** = live model built from the blueprint.
* **APIs** = tools to remodel the structure.
* **Rendering engine** = painter who updates the screen whenever the model changes.
  
  

## 6. ASCII diagram

Without DOM manipulation:

   ┌─────────────┐
   │   HTML Code │
   └──────┬──────┘
          │
          ▼
   ┌─────────────┐
   │   Parser    │
   │ (Browser    │
   │ reads HTML) │
   └──────┬──────┘
          │
          ▼
   ┌─────────────┐
   │     DOM     │
   │ (Tree Model)│
   └──────┬──────┘
          │
          ▼
   ┌───────────────────┐
   │ Rendering Engine  │
   │ (Layout + Paint)  │
   └──────┬────────────┘
          │
          ▼
   ┌─────────────┐
   │ Screen      │
   │ Output      │
   └─────────────┘

🔎 Explanation

* **HTML Code**: You write markup in your file.
* **Parser**: Browser reads and interprets the HTML.
* **DOM Tree**: Built once at load, representing the structure of the page.
* **Rendering Engine**: Calculates layout, applies CSS, paints pixels.
* **Screen Output**: User sees the static page.
  
  

---

When DOM is manipulated:

   ┌─────────────┐
   │   HTML Code │
   └──────┬──────┘
          │
          ▼
   ┌─────────────┐
   │     DOM     │
   │ (Tree Model)│
   └──────┬──────┘
          │
          ▼
   ┌─────────────┐
   │ Browser APIs│
   │ (e.g. create│
   │ element,    │
   │ appendChild)│
   └──────┬──────┘
          │
          ▼
   ┌───────────────────┐
   │ Rendering Engine  │
   │ (Layout + Paint)  │
   └──────┬────────────┘
          │
          ▼
   ┌─────────────┐
   │ Screen      │
   │ Output      │
   └─────────────┘

🔄 Flow Explained

1. **HTML Code** → Browser parses it into the **DOM tree**.
2. **DOM Tree** → Represents the live structure of the page.
3. **Browser APIs** → JavaScript uses these to manipulate the DOM (add, remove, update elements).
4. **Rendering Engine** → Detects DOM changes, recalculates layout/styles, and repaints.
5. **Screen Output** → User sees the updated page automatically, synced with the display refresh (~16ms per frame).
