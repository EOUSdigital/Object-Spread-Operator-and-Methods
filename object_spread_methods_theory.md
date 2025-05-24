
# 🟦 Theoretical Aspects (In-Depth Theory) - Object Spread Operator and Methods

## A. What is the Object Spread Operator?

The **spread operator (`...`)** is used to create shallow copies of objects or merge multiple objects together.

### Example:
```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2 }
```

---

## B. Why Use It?

- Clone objects without mutating the original.
- Merge multiple objects into one.
- Override or extend existing properties cleanly.
- Replace more verbose methods like `Object.assign()`.

---

## C. Historical Perspective

- Introduced in ES2018 for objects.
- Improved readability and flexibility compared to `Object.assign()`.

---

## D. Best Practices and Pitfalls

### ✅ Best Practices:
- Use for shallow cloning and merging.
- Combine with destructuring for clean code patterns.

### ⚠️ Pitfalls:
- Spread only creates **shallow copies** — nested objects are still references.
- Last spread wins in key conflicts.

---

## E. Real-World Analogy

The spread operator is like a **copy machine**:
- Each object is a document.
- The operator gathers them into one binder.
- If two documents have the same heading (key), the later one overwrites it.

---

## F. Object Methods

Object methods are **functions assigned to object properties**, defining behavior.

### Example:
```javascript
const user = {
  name: 'Alice',
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};
```

- `greet()` is a method.
- `this` refers to the current object (`user`).

---

## G. Combining Spread and Methods

### Example:
```javascript
const base = { role: 'user' };
const extended = {
  ...base,
  name: 'Jane',
  greet() {
    return `Hi, I’m ${this.name} and my role is ${this.role}`;
  }
};
```

- Combines base object properties with new ones and adds behavior using a method.
