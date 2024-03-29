## dom-change-event
[![NPM version](https://img.shields.io/npm/v/dom-change-event.svg?style=flat-square)](https://www.npmjs.com/package/dom-change-event)
[![Downloads](https://img.shields.io/npm/dm/dom-change-event.svg?style=flat-square)](https://www.npmjs.com/package/dom-change-event)
<br />
Detect all changes in the DOM (added elements, removed elements, attributes updates)

### Installation
```bash
npm i dom-change-event
```

### Usage
```javascript
import DomChangeEvent from 'dom-change-event';
DomChangeEvent(); // init the listener

// you can add these listeners for all HTML elements
document.body.addEventListener("addedNodes", (e) => {
    console.log("addedNodes in body element", e.detail);
});

document.body.addEventListener("removedNodes", (e) => {
    console.log("removedNodes in body element", e.detail);
});

const div = document.createElement("div");
document.body.append(div);
div.addEventListener("attributeChange", (e) => {
    console.log("attributeChange", e.detail);
    console.log("attributeName", e.detail.attributeName);

    console.log("attributeOldValue", e.detail.oldValue);
    const htmlElement = e.detail.target;
    console.log("attributeNewValue", htmlElement.getAttribute(e.detail.attributeName));
});
div.setAttribute("myAttribute", "myValue");

setTimeout(() => {
    div.remove();
}, 2000);
```

### Events list
|Event|Description|Value|
| ------------ | ------------ | ------------ |
|addedNodes|Get array of elements added in an HTMLElement|Array[**HTMLElement**]|
|removedNodes|Get array of elements removed from an HTMLElement|Array[**HTMLElement**]|
|attributeChange|Get attribute change information from an HTMLElement|**attributeName**: The name of the attribute<br />**oldValue**: The old value attribute<br />**target**: the HTMLElement|