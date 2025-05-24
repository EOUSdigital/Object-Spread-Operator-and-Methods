//TODO 📚 Module 3 - Lesson 07: Object Spread Operator and Methods

//? 1️⃣ Theoretical Aspects (In-Depth Theory)

//*  A. 🔹 What is the Object Spread Operator?
//  The spread operator (...) is used to create shallow copies of objects or merge multiple objects together.

//  ✅ Syntax Example:

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };

//* B. 💡 Why Use It?
//  • To clone objects without mutating the original.
//  • To merge multiple objects.
//  • To override or extend existing properties.
//  • To avoid Object.assign(), which is more verbose.

//* C. 🕰️ Historical Perspective
//  • Introduced in ES2018 for objects (previously available for arrays in ES6).
//  • Replaced older, clunkier methods like Object.assign() in modern development.

//* D. ⚡ Best Practices and Pitfalls
//  ✅ Best Practices:
//  • Use it for shallow copies and merges.
//  • Combine it with destructuring for clean code.
//  ⚠️ Pitfalls:
//  • Only performs a shallow copy — nested objects remain by reference.
//  • Last object wins when keys overlap.

//* E. 🎲 Real-World Analogy
//  Think of the spread operator as a copy machine for objects:
//  • Each object is like a sheet.
//  • The spread gathers sheets into one folder.
//  • If two sheets have the same key, the last one overwrites the earlier one.

//* F. Object Methods
//  Object methods are functions stored as properties in objects. They represent behavior.

//  ✅ Example:

const user = {
    name: 'Alice',
    greet() {
        return `Hello, I am ${this.name}`;
    },
};

//  • greet() is a method.
//  • this refers to the object the method is attached to.

//* G. 🔁 Combining Spread and Methods

const base = { role: 'user' };
const extended = {
    ...base,
    name: 'Jane',
    greet() {
        return `Hi, I am ${this.name} and my role is ${this.role}`;
    },
};

console.log(extended);

//  ✅ This gives you a reusable base object with methods extended onto it.

//? 2️⃣ Inquiry and Application
//  🤔 Quick Guided Questions:
//  • What happens if two spread objects share the same key?
//  • How can you prevent nested object references from being shared?

//  ✍️ Small Exercise:

const base2 = { a: 1, b: 2 };
const extended2 = { ...base2, c: 3, b: 99 };

console.log(extended2);

//* Question: Can you explain why b became 99`? What determines the order?

//! Answer: The spread operator will replace the a property: value with the last property: value available. The order is determined by the spread operator, even in the extended2 we have recorded property: value available (b: 99), will only replace b: 2 and will not establish the order.

//? 3️⃣ Assessment (Mini Quiz)

//  ✅ Answer these:
//* Question 1. What does the spread operator do in object context?
//! Answer: The spread operator performs a shallow copy of an object or merges multiple objects into one.

//* Question 2. How do you write a method inside an object?
//! Answer: A method is written as a function assigned to a property inside an object.

const obj = {
    greet() {
        return "Hello";
    }
};

//* Question 3. What does 'this' refer to in a method?
//! Answer: 'this' refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

//* Question 4. How would you clone an object and update one property?
//! Answer: Use the spread operator to clone the object and override properties in the same step.

const original = { name: 'Alice', age: 30 };
const updated = { ...original, age: 35 };

//* Question 5. What happens to nested objects when using spread?
//! Answer: The spread operator only creates a shallow copy, so nested objects remain shared by reference. When merging objects with the same keys, the last object’s values overwrite earlier ones.

//? 4️⃣ Reflection
//* • Question: How can the spread operator improve code clarity and maintainability?
//! Answer: The spread operator improves code clarity by reducing boilerplate and making object manipulation more concise. It allows developers to easily clone, merge, and override object properties in a single line, which makes the code easier to read, maintain, and extend.

//* • Question: In what real-world project could combining base objects and methods save you time?
//! Answer: In an online store, you could define a base product object and then use the spread operator to quickly create variations like clothingItem, digitalItem, or subscriptionProduct, each with shared properties and specialized methods. This reduces repetition and keeps the codebase modular.


//TODO 🛠️ Product Catalog System (Real-World Object Use Case)

//* 🎯 Goal:
//  Build a simple Product Catalog that:
//  • Uses object literals and methods.
//  • Leverages the spread operator to clone/extend products.
//  • Allows easy expansion for future product types.

//* 🔧 Project Structure:
//* 🧱 1. Define a base product
//  Includes shared properties like:

const baseProduct = {
    category: 'general',
    inStock: true,
    price: 0,
    getLabel() {
        return `Product in category: ${this.category}, priced at $${this.price}`;
    },
};

//* 🧩 2. Create specific product types using the spread operator

const phone = {
    ...baseProduct,
    category: 'electronics',
    brand: 'Samsung',
    model: 'Galaxy S23',
    price: 899.
};

const book = {
    ...baseProduct,
    category: 'books',
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    price: 39.99
};

//* 🛒 3. Display product labels using methods

console.log(phone.getLabel()); // Product in category: electronics, priced at $899
console.log(book.getLabel());  // Product in category: books, priced at $39.99

//* ✅ Your Tasks:
//  1. ✅ Implement the baseProduct with a getLabel() method.
//  2. ✅ Create at least 3 products using spread (e.g., phone, book, t-shirt).
//  3. ✅ Call getLabel() on each product.
//  4. ✅ Add one custom method to one product only (e.g., book.read()).
//  5. ✅ Add logic to update a product's inStock to false.

//* 💡 Bonus Stretch Goal:
//  • Loop over the products in an array and log their labels.
//  • Add a discountedPrice(percent) method using this.price.

//! Solution

//* Step 1.

console.log(baseProduct.getLabel());

//* Step 2.

const phone2 = {
    ...baseProduct,
    category: 'electronics',
    brand: 'iPhone',
    model: '16 Pro',
    price: 1199.00
};

const book2 = {
    ...baseProduct,
    category: 'books',
    title: 'Learning JavaScript',
    author: 'Ethan Brown',
    price: 36.24
};

const tShirt = {
    ...baseProduct,
    category: 'clothing',
    brand: 'Adidas',
    model: 'Crew Neck',
    price: 24.00
};

//* Step 3.

console.log(phone2.getLabel());
console.log(book2.getLabel());
console.log(tShirt.getLabel());

//* Step 4.

phone2.describe = function() {
    console.log(`Product: ${this.brand} ${this.model} (${this.category}) - $${this.price}`);
};

book2.read = function() {
    console.log(`Reading "${this.title}" by ${this.author}...`);
};

tShirt.wear = function() {
    console.log(`Wearing the ${this.brand} ${this.model} t-shirt.`);
};

phone2.describe();
book2.read();
tShirt.wear();

//* Step 5.

baseProduct.inStock = false;

console.log(baseProduct);

//* Bonus

const products = [phone, book, phone2, book2, tShirt];

products.forEach(product => { console.log(product.getLabel); });


//TODO  🧱 Reusable Object Blueprint - Challenge 1

//* 🎯 Objective:
//  Create reusable object “blueprints” (via factory functions or spread-based base objects) to efficiently define different product types in a scalable catalog.

//* 🛠️ The Setup
//  Must be build:
//  1. A base product object with core fields.
//  2. A factory function that takes input and returns a new product.
//  3. Different blueprint extensions for specific product categories (e.g., books, electronics).
//  4. Each product type must have:
//  • Custom fields.
//  • Shared method(s) from the base.
//  • Unique behavior (one custom method per type).


//* 📋 Requirements
//* ✅ Step 1: Create baseProduct
//* ✅ Step 2: Build a createProduct factory function
//* ✅ Step 3: Define category blueprints
//* ✅ Step 4: Create specific products with the factory
//* ✅ Step 5: Test All Methods

//* 🧠 Bonus Challenge (Optional):
//  • Add a discountedPrice(percent) method to baseProduct.
//  • Create a clothingBlueprint with a wear() method.
//  • Store multiple created products in an array and loop through calling getLabel().

//! Solution

//* Step 1.

const baseProduct2 = {
    inStock: true,
    price: 0,
    getLabel() {
        return `${this.name} - $${this.price}`;
    },
};

//* Step 2.

function createProduct(typeBluePrint, overrides = {}) {
    return {
        ...baseProduct2,
        ...typeBluePrint,
        ...overrides,
    };
};

//* Step 3.

const bookBlueprint = {
    category: 'book',
    format: 'paperback',
    read() {
        return `Reading ${this.title}...`;
    },
};

const electronicBlueprint = {
    category: 'electronics',
    warranty: '1 year',
    powerOn() {
        return `${this.brand} ${this.model} is powering on.`;
    },
};

//* Step 4.

const jsBook = createProduct(bookBlueprint, {
    title: 'You Don\'t Know JS',
    price: 29.99,
});

const phone3 = createProduct(electronicBlueprint, {
    brand: 'Apple',
    model: 'iPhone 16',
    price: 1199.99
});

//* Step 5.

console.log(jsBook.getLabel());    // You Don’t Know JS - $29.99
console.log(jsBook.read());        // Reading You Don’t Know JS...

console.log(phone3.getLabel());     // iPhone 16 - $1199.99
console.log(phone3.powerOn());      // Apple iPhone 16 is powering on.

//* Bonus

// 1. Add discountedPrice method to baseProduct
baseProduct.discountedPrice = function(percent) {
    if (percent < 0 || percent > 100) {
      return this.price; // Invalid percentage, return original price
    }
    return this.price - (this.price * (percent / 100));
};

// 2. Create a clothing blueprint with a wear() method
const clothingBlueprint = {
    category: 'clothing',
    size: 'M',
    wear() {
        return `Wearing the ${this.name} in size ${this.size}.`;
    },
};

// Create some clothing products
const tshirt = createProduct(clothingBlueprint, {
    name: 'Cool T-Shirt',
    price: 19.99,
    size: 'L',
});

const jacket = createProduct(clothingBlueprint, {
    name: 'Leather Jacket',
    price: 89.99,
    size: 'M',
});

// Store multiple products in an array and loop through calling getLabel()
const products2 = [jsBook, phone, tshirt, jacket];

products2.forEach(product => {
    console.log(product.getLabel());
    // If the product has a wear() method
    if (typeof product.wear === 'function') {
        console.log(product.wear());
    }

    // If the product has discountedPrice method
    if (typeof product.discountedPrice === 'function') {
        console.log(`Discounted price (20% off): $${product.discountedPrice(20).toFixed(2)}`);
    }
});


//TODO  🧱 Reusable Object Blueprint System - Challenge 2

//* 🎯 Objectives:
//  1. Create a baseProduct with shared properties/methods.
//  2. Define category blueprints (e.g., bookBlueprint, electronicsBlueprint).
//  3. Implement a createProduct() factory function that merges base + blueprint + overrides.
//  4. Create multiple product instances using this system.
//  5. Add unique methods per category (e.g., .read(), .powerOn()).
//  6. Use the spread operator to keep everything clean and modular.

//! Solution

//* Step 1.

const starterProduct = {
    category: 'general',
    price: 0,
    inStock: true,
    getLabel() {
        return `Category: ${this.category} - $${this.price}`;
    },
};


//* Step 2.

const printBlueprint = {
    category: 'magazine',
    format: 'paper',
    read() {
        return `Reading ${this.title}...`
    },
};

const electronicsBlueprint = {
    category: 'computers',
    brand: 'name',
    model: 'label',
    warranty: '3 years',
    powerOn() {
        return `${this.brand} ${this.model} is powering on.`;
    },
};

const apparelBlueprint = {
    category: 'shoe',
    brand: 'name',
    model: 'label',
    size: 45,
    wear() {
        return `${this.brand} ${this.model} are great for wedding`
    },
};

//! 💡 These are well-structured but not used later. You defined other custom blueprints in Step 4 instead (which is fine!). Consider removing unused ones or integrating them with buildProduct().

//* Step 3.

function buildProduct(categoryBluePrint, overrides = {}) {
    return {
        ...starterProduct,
        ...categoryBluePrint,
        ...overrides,
    };
};

//! 💡 This is now a scalable system. If you want to centralize behavior (like logging, discounts, stock updates), this is the function you’d enhance.

//* Step 4.

const magazineBlueprint = {
    category: 'online',
    title: 'Forbes',
    read() {
        return `Reading online ${this.title}...`;
    },
};

const forbesMagazine = buildProduct(magazineBlueprint, { price: 8.99 });

const booksBlueprint = {
    category: 'print',
    title: 'West',
    author: 'Paul William',
    read() {
        return `These days I am reading ${this.title} by ${this.author}.`;
    },
};

const westBook = buildProduct(booksBlueprint, { price: 24.99 });
console.log(westBook.getLabel());
console.log(westBook.read());


const computerBlueprint = {
    category: 'personal computer',
    brand: 'Dell',
    model: 'CZC1827',
    powerOn() {
        return `I am using ${this.brand} ${this.model} to develop software. `;
    },
};

const dellComputer = buildProduct(computerBlueprint, { language: 'JavaScript' });

const phoneBlueprint = {
    category: 'mobile',
    brand: 'Nokia',
    model: '3310',
    price: 249.99,
    powerOn() {
        return `The manufacturer has developed a new ${this.brand} ${this.model} that is offered for sale.`
    }
};

const nokiaPhone = buildProduct(phoneBlueprint, { color: 'black' });

const tabletBlueprint = {
    category: 'tablet',
    brand: 'Allview',
    model: 'NAM2',
    price: 380,
    powerOn() {
        return `${this.brand} ${this.model} is the newest model on the market from ${this.brand}`;
    },
};

const allviewTablet = buildProduct(tabletBlueprint, { color: 'grey' });

const shirtBlueprint = {
    category: 'clothing',
    brand: 'eton',
    model: 'Solid Oxford Shirt',
    color: 'white',
    wear() {
        return `${this.brand} came on the market with ${this.model} ${this.color}.`
    },
};

const etonShirt = buildProduct(shirtBlueprint, { price: 270.00 });
