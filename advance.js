// Section A: Scope & Lexical Scope (1–10)

// question = 1
// ans=20


// question = 2 
// ans=ReferenceError

// question  = 3
// Create a nested function structure of 4 levels and print variables from all parent scopes.
function level1() {
    let a = 1;

    function level2() {
        let b = 2;

        function level3() {
            let c = 3;

            function level4() {
                let d = 4;

                console.log(a);
                console.log(b);
                console.log(c);
                console.log(d);
            }

            level4();
        }

        level3();
    }

    level2();
}

level1();


// question => 4
// Write a function that returns another function and demonstrates lexical scope.
// ans=>
    function outer() {
    let message = "Hello from outer function";

    function inner() {
        console.log(message);
    }

    return inner;
}

const result = outer();
result();



// question=>5
// ans=>undefined



// question=>6
// Create a function where a child function can access grandparent variables.
function grandparent() {
    let a = 10;

    function parent() {
        let b = 20;

        function child() {
            console.log(a); 
            console.log(b); 
        }

        child();
    }

    parent();
}

grandparent();

// question => 7
// ans=>Mohan



// question => 8
// Create a 3-level nested function and access all variables inside the innermost function.

function level1() {
    let a = 10;

    function level2() {
        let b = 20;

        function level3() {
            let c = 30;

            console.log(a);
            console.log(b);
            console.log(c);
        }

        level3();
    }

    level2();
}

level1();


// question => 9
// ans=>No

// question => 10
// Create a private variable using lexical scope.
// ans=>

    function createCounter() {
    let count = 0; 

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter(); 
counter(); 
counter(); 



// Section B: Closures (11–20) 


// question =>11
// Create a counter closure. 
// ans=>
    function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();

increment(); 
increment(); 
increment(); 




// Q12 
// Create a reverse counter. 
// ans=>

    function reverseCounter(start) {
    let count = start;

    return function () {
        console.log(count);
        count--;
    };
}

const decrement = reverseCounter(5);

decrement(); 
decrement();
decrement(); 



// Q13
// Create a closure-based bank account. 
// Methods: 
// deposit() 
// withdraw() 
// checkBalance() 
// ans=>

    function createBankAccount(initialBalance) {
    let balance = initialBalance; 

    return {
        deposit(amount) {
            balance += amount;
            console.log("Deposited:", amount);
        },

        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log("Withdrawn:", amount);
            } else {
                console.log("Insufficient Balance");
            }
        },

        checkBalance() {
            console.log("Balance:", balance);
        }
    };
}

const account = createBankAccount(1000);

account.checkBalance(); 
account.deposit(500);   
account.checkBalance(); 
account.withdraw(300);  
account.checkBalance(); 




// Q14
// Create a closure that remembers the username forever.
// ans=>
    function user() {
    let username = "Ram";

    return function () {
        console.log(username);
    };
}

let showUser = user();

showUser();
showUser();
showUser();


// Q15 
// Create a closure-based login attempt tracker. 
// After 3 failed attempts: 
// Account Locked 
// ans=>

    function loginTracker() {
    let attempts = 0;

    return function () {
        attempts++;

        if (attempts >= 3) {
            console.log("Account Locked");
        } else {
            console.log("Login Failed");
        }
    };
}

let login = loginTracker();

login(); // Login Failed
login(); // Login Failed
login(); // Account Locked




// Q16 
// Build a closure that stores a secret password. 
// Only getter should be available. 
// ans=>
   function createPassword() {
    let password = "12345"; 

    return function () {
        return password; 
    };
}

const getPassword = createPassword();

console.log(getPassword());


// Q17 
// Build a shopping cart using closure. 
// Methods: 
// addItem() 
// removeItem() 
// showItems() 
// ans=>
    function shoppingCart() {
    let items = [];

    return {
        addItem(item) {
            items.push(item);
            console.log(item + " added");
        },

        removeItem(item) {
            let index = items.indexOf(item);

            if (index !== -1) {
                items.splice(index, 1);
                console.log(item + " removed");
            }
        },

        showItems() {
            console.log("Cart Items:", items);
        }
    };
}

const cart = shoppingCart();

cart.addItem("Laptop");
cart.addItem("Mouse");
cart.showItems();

cart.removeItem("Mouse");
cart.showItems();



// Q18 
// Create a closure-based voting machine. 
// Each user can vote only once. 
// ans=>

    function votingMachine() {
    let votedUsers = [];

    return function (user) {
        if (votedUsers.includes(user)) {
            console.log(user + " has already voted!");
        } else {
            votedUsers.push(user);
            console.log(user + " voted successfully.");
        }
    };
}

const vote = votingMachine();

vote("Ram");
vote("Mohan");
vote("Ram");


// Q19 
// Build a closure that counts how many times a function is executed.
// ans=>
    function counter() {
    let count = 0;

    return function () {
        count++;
        console.log("Function executed", count, "times");
    };
}

const run = counter();

run();
run();
run();


// Q20 
// Build a closure-based expense tracker. 
// Methods: 
// addExpense() 
// getTotal() 
// ans=>
    function expenseTracker() {
    let total = 0; 

    return {
        addExpense(amount) {
            total += amount;
            console.log("Added:", amount);
        },

        getTotal() {
            console.log("Total Expense:", total);
        }
    };
}

const expenses = expenseTracker();

expenses.addExpense(500);
expenses.addExpense(300);
expenses.addExpense(200);

expenses.getTotal();



// Section C: IIFE (21–25)


// Q21 
// Create an IIFE that prints: 
// Welcome to JavaScript 
// ans=>
    (function () {
    console.log("Welcome to JavaScript");
})();




// Q22 
// Pass arguments to an IIFE and calculate area of rectangle.
// ans=>
 (function (length, width)){
    let area = length * width;
    console.log("")
 }




//  Q23 
// Create an arrow function IIFE. 
  (() => {
    console.log("Hello JavaScript");
})();




// Q24 
// Use IIFE to create private variables.
  const user = (function () {
    let name = "Ram"; // private variable

    return function () {
        console.log(name);
    };
})();

user();


// Q25 
// Create a module pattern using IIFE. 
// Methods: 
// increment() 
// decrement() 
// reset()

const counter = (function () {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },

        decrement: function () {
            count--;
            console.log(count);
        },

        reset: function () {
            count = 0;
            console.log(count);
        }
    };
})();

counter.increment();
counter.increment();
counter.decrement();
counter.reset();



// Section D: Higher Order Functions (26–30)


// Q26 
// Create a function: 
// calculate(a,b,operation) 
// Perform: 
// add 
// subtract 
// multiply 
// divide 

function calculate(a, b, operation) {
    if (operation === "add") {
        return a + b;
    } 
    else if (operation === "subtract") {
        return a - b;
    } 
    else if (operation === "multiply") {
        return a * b;
    } 
    else if (operation === "divide") {
        return a / b;
    }
}
console.log(calculate(10, 5, "add"));      
console.log(calculate(10, 5, "subtract")); 
console.log(calculate(10, 5, "multiply")); 
console.log(calculate(10, 5, "divide"));  


// Q27 
// Create your own custom HOF named: 
// repeat() 
// Example 
// repeat(5, sayHello) 
function repeat(times, fn) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

function sayHello() {
    console.log("Hello");
}

repeat(5, sayHello);



// Q28 
// Create a logger HOF. 
// Output: 
// [INFO] User Logged In
 function logger(fn) {
    return function () {
        console.log("[INFO]");
        fn();
    };
}

function login() {
    console.log("User Logged In");
}

const logInUser = logger(login);

logInUser();



// Q29 
// Create a function execution timer using HOF. 
// Output: 
// Execution Time: XX ms 
function timer(fn) {
    let start = Date.now();

    fn();

    let end = Date.now();

    console.log("Execution Time:", end - start, "ms");
}

function hello() {
    console.log("Hello");
}

timer(hello);




// Q30 
// Create a function wrapper that counts how many times another function was called.
function countCalls(fn) {
    let count = 0;

    return function () {
        count++;
        console.log("Called:", count, "times");
        fn();
    };
}

function hello() {
    console.log("Hello");
}

const wrappedHello = countCalls(hello);

wrappedHello();
wrappedHello();
wrappedHello();


// Section E: map() (31–33)


// Q31 
// Given 
// const users = [ 
// {name:"Ram",age:25}, 
// {name:"Mohan",age:30}, 
// {name:"Amit",age:22} 
// ]; 
// Return: 
// [ 
// "Ram", 
// "Mohan", 
// "Amit" 
// ] 
// using map.
  const users = [
    { name: "Ram", age: 25 },
    { name: "Mohan", age: 30 },
    { name: "Amit", age: 22 }
];

const names = users.map(user => user.name);

console.log(names);



// Q32 
// Convert 
// [1,2,3,4,5] 
// into 
// [1,4,9,16,25] 
// using map.
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(num => num * num);

console.log(squares);




// Q33 
// Create an array of product names from: 
// [ 
// {name:"Laptop"}, 
// {name:"Mouse"}, 
// {name:"Keyboard"} 
// ]
const products = [
    { name: "Laptop" },
    { name: "Mouse" },
    { name: "Keyboard" }
];

const productNames = products.map(product => product.name);

console.log(productNames);



// Section F: filter() (34–36)


// Q34 
// Filter all even numbers. 
// Input: 
// [1,2,3,4,5,6] 
// Output: 
// [2,4,6] 
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);


// Q35 
// Filter users whose age is greater than 25
const users = [
    { name: "Ram", age: 25 },
    { name: "Mohan", age: 30 },
    { name: "Amit", age: 22 }
];

const result = users.filter(user => user.age > 25);

console.log(result);




// Q36 
// Filter expensive products. 
// Condition: 
// price > 1000

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];

const result = products.filter(product => product.price > 1000);

console.log(result);




// Section G: reduce() (37–40)

// Q37 
// Find total sum. 
// Input: 
// [10,20,30,40] 
// Output: 
// 100
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);





// Q38 
// Find maximum value using reduce. 
// Input: 
// [5,12,3,45,2] 
// Output: 
// 45
const numbers = [5, 12, 3, 45, 2];

const max = numbers.reduce((max, num) => {
    return num > max ? num : max;
}, numbers[0]);

console.log(max);



// Q39 
// Count total characters. 
// Input: 
// ["JavaScript","React","Node"] 
// Output: 
// 20
const words = ["JavaScript", "React", "Node"];

const totalChars = words.reduce((sum, word) => {
    return sum + word.length;
}, 0);

console.log(totalChars);




// Q40 
// ⭐
//  Ultra Hard 
// Given: 
// const orders = [ 
//    { 
//        id:1, 
//        amount:5000, 
//        status:"completed" 
//    }, 
//    { 
//        id:2, 
//        amount:2000, 
//        status:"pending" 
//    }, 
//    { 
//        id:3, 
//        amount:7000, 
//        status:"completed" 
//    }, 
//    { 
//        id:4, 
//        amount:1000, 
//        status:"completed" 
//    } 
// ]; 
// Using only: 
// filter() 
// map() 
// reduce() 
// Find: 
// 1. Completed Orders 
// 2. Total Revenue 
// 3. Average Revenue 
// 4. Highest Order Amount 
// 5. Array of Order IDs 
const orders = [
    { id: 1, amount: 5000, status: "completed" },
    { id: 2, amount: 2000, status: "pending" },
    { id: 3, amount: 7000, status: "completed" },
    { id: 4, amount: 1000, status: "completed" }
];

// 1. Completed Orders
const completedOrders = orders.filter(o => o.status === "completed");

// 2. Total Revenue
const totalRevenue = completedOrders.reduce((sum, o) => sum + o.amount, 0);

// 3. Average Revenue
const avgRevenue = totalRevenue / completedOrders.length;

// 4. Highest Order Amount
const highestAmount = orders.reduce((max, o) => o.amount > max ? o.amount : max, 0);

// 5. Order IDs
const orderIds = orders.map(o => o.id);

console.log("Completed Orders:", completedOrders);
console.log("Total Revenue:", totalRevenue);
console.log("Average Revenue:", avgRevenue);
console.log("Highest Amount:", highestAmount);
console.log("Order IDs:", orderIds);
















