## Readme File for API project English Janala

# JavaScript ES6 Related Q&A

## 1) Difference between var, let, and const
- `var` → This is an old way, var is function-scoped, this can be re-declared.
- `let` → let is block-scoped, you can change value but cannot re-declare it.
- `const` → const is also a block-scoped, you cannot change value(bcz it's constant).

## 2) Difference between map(), forEach(), and filter()
- `map()` → map returns a **new array** and you must give it a function to modify each 
                                          element.
- `forEach()` → forEach just **loops through**, and print values but it doesn’t return
                                                anything.
- `filter()` → filter returns a **new array** with elements and you must give it a condition 
                                              to decide which elements should be kept.

## 3) Arrow functions in ES6
This is the Shorter way to write functions-> (is Arrow function):
```js
const add = (a, b) => a + b; // one liner code will automatically or implicit return
const add2 = (a, b) => {  //two liner code will code or inside curly braces you have to return it explicitly
     return a + b;
  };
```

## 4) Destructuring assignment in ES6
Example of Destructuring:
```js
const myInfo = {name: "Injamul", age: 29};
const {name, age} = myInfo; 
```

## 5) Template literals in ES6
We Have to use backticks and `${}`:
```js
const name = "Injamul";
console.log(`Hello, ${name}!`);
```
