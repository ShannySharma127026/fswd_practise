// Q1
function greetUser(name, callback) {
    console.log("Hello " + name);
    callback(name);
}
function welcome(name) {
    console.log("Welcome " + name);
}

greetUser("Ram", welcome);


// Q2
function calculate(a, b, callback) {
    return callback(a, b);
}
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));


// Q3
function calculator(a, b, operation) {
    console.log(operation(a, b));
}
calculator(20, 10, add);
calculator(20, 10, multiply);
calculator(20, 10, divide);


// Q4
function processStudent(student, callback) {
    callback(student);
}
processStudent(
    { name: "Ram", age: 20 },
    function(student) {
        console.log(student);
    }
);


// Q5
function downloadFile(callback) {
    console.log("Downloading...");
    setTimeout(() => {
        console.log("Download Complete");
        callback();
    }, 2000);
}
downloadFile(() => {
    console.log("File Ready");
});


// Q6
function registerUser(callback) {
    console.log("User Registered");
    callback();
}
registerUser(() => {
    console.log("Welcome Email Sent");
});


// Q7
function placeOrder(callback) {
    console.log("Order Placed");
    callback();
}
placeOrder(() => {
    console.log("Invoice Generated");
});


// Q8
function fetchUser(callback) {
    setTimeout(() => {
        callback({
            id: 1,
            name: "Ram"
        });
    }, 3000);
}
fetchUser(user => console.log(user));


// Q9
function verifyOTP(otp, callback) {
    if (otp === "1234") {
        callback("OTP Verified");
    } else {
        callback("Invalid OTP");
    }
}
verifyOTP("1234", console.log);


// Q10
function login(username, password, callback) {
    if (username === "admin" && password === "123") {
        callback("Login Success");
    } else {
        callback("Login Failed");
    }
}
login("admin", "123", console.log);


// Q11
console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
console.log("C");
// Output:
// A
// C
// B


// Q12
setTimeout(() => {
    console.log(1);
}, 1000);
console.log(2);
// Output:
// 2
// 1


// Q13
console.log("Start");
setTimeout(() => {
    console.log("Timeout");
}, 0);
console.log("End");
// Output:
// Start
// End
// Timeout


// Q14
for (let i = 5; i > 0; i--) {
    setTimeout(() => {
        console.log(i);
    }, (5 - i) * 1000);
}
setTimeout(() => {
    console.log("Boom");
}, 5000);


// Q15
let bomb = 10;
let bombTimer = setInterval(() => {
    console.log(bomb);
    bomb--;
    if (bomb < 0) {
        clearInterval(bombTimer);
        console.log("BOOM ");
    }
}, 1000);


// Q16
function delayedGreeting(name) {
    setTimeout(() => {
        console.log("Hello " + name);
    }, 2000);
}
delayedGreeting("Ram");


// Q17
setTimeout(() => {
    console.log("New Notification Received");
}, 3000);
// Q18
setTimeout(() => {
    console.log("Button Disabled");
}, 2000);


// Q19
console.log("Redirecting in 3 sec...");
setTimeout(() => {
    console.log("Redirected");
}, 3000);


// Q20
function wait(seconds, callback) {
    setTimeout(callback, seconds * 1000);
}
wait(2, () => {
    console.log("Done");
});


// Q21
function loginUser(cb) {
    setTimeout(() => {
        console.log("Login");
        cb();
    }, 1000);
}
function getUser(cb) {
    setTimeout(() => {
        console.log("Get User");
        cb();
    }, 1000);
}
function getOrders(cb) {
    setTimeout(() => {
        console.log("Get Orders");
        cb();
    }, 1000);

loginUser(() => {
    getUser(() => {
        getOrders(() => {
            console.log("Show Orders");
        });
    });
});


// Q22
setTimeout(() => {
    console.log("Level 1");
    setTimeout(() => {
        console.log("Level 2");
        setTimeout(() => {
            console.log("Level 3");
            setTimeout(() => {
                console.log("Level 4");
                setTimeout(() => {
                    console.log("Level 5");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// Q23
setTimeout(() => {
    console.log("Order");
    setTimeout(() => {
        console.log("Cook");
        setTimeout(() => {
            console.log("Pack");
            setTimeout(() => {
                console.log("Deliver");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// Q24
setTimeout(() => {
    console.log("Registration");
    setTimeout(() => {
        console.log("Doctor");
        setTimeout(() => {
            console.log("Test");
            setTimeout(() => {
                console.log("Medicine");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// Q25
setTimeout(() => {
    console.log("Form");
    setTimeout(() => {
        console.log("Verification");
        setTimeout(() => {
            console.log("Payment");
            setTimeout(() => {
                console.log("Admission");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// Q26
setTimeout(() => {
    console.log("Signup");
    setTimeout(() => {
        console.log("Verify Email");
        setTimeout(() => {
            console.log("Login");
            setTimeout(() => {
                console.log("Dashboard");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// Q27
function randomDelay(callback) {
    let delay = Math.floor(Math.random() * 3000);
    setTimeout(callback, delay);
}
randomDelay(() => {
    console.log("Task 1");
    randomDelay(() => {
        console.log("Task 2");
        randomDelay(() => {
            console.log("Task 3");
        });
    });
});


// Q28
setTimeout(() => {
    console.log("Fetching Weather");
    setTimeout(() => {
        console.log("Weather: 32°C");
    }, 2000);
}, 1000);


// Q29
setTimeout(() => {
    console.log("Cart");
    setTimeout(() => {
        console.log("Payment");
        setTimeout(() => {
            console.log("Order Confirmed");
            setTimeout(() => {
                console.log("Delivered");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// Q30
setTimeout(() => {
    console.log("Select Movie");
    setTimeout(() => {
        console.log("Choose Seat");
        setTimeout(() => {
            console.log("Payment");
            setTimeout(() => {
                console.log("Ticket Booked");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// Q31
setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);


// Q32
let seconds = 0;
let stopwatch;

function start() {
    stopwatch = setInterval(() => {
        seconds++;
        console.log(seconds);
    }, 1000);
}

function pause() {
    clearInterval(stopwatch);
}

function reset() {
    clearInterval(stopwatch);
    seconds = 0;
}


// Q33
let lights = ["Red", "Yellow", "Green"];
let index = 0;

setInterval(() => {
    console.log(lights[index]);
    index = (index + 1) % lights.length;
}, 2000);


// Q34
let images = ["img1", "img2", "img3"];
let imgIndex = 0;

setInterval(() => {
    console.log(images[imgIndex]);
    imgIndex = (imgIndex + 1) % images.length;
}, 3000);


// Q35
let text = "Hello World";
let i = 0;

let typing = setInterval(() => {
    process.stdout?.write?.(text[i] || "");

    i++;

    if (i === text.length) {
        clearInterval(typing);
    }
}, 200);


// Q36
console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

setTimeout(() => {
    console.log("C");
}, 0);

console.log("D");

// Output:
// A
// D
// C
// B


// Q37
function one() {
    console.log("One");
}

setTimeout(one, 0);

console.log("Two");

// Output:
// Two
// One


// Q38
console.log("Start");

for (let i = 0; i < 1000000000; i++) {}

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

// Output:
// Start
// End
// Timeout


// Q39
// Event Loop Visualizer (DOM)

document.body.innerHTML = `
<h2>Event Loop Visualizer</h2>
<div id="stack">Call Stack</div>
<div id="webapi">Web API</div>
<div id="queue">Callback Queue</div>
`;

console.log("Visualizer Created");


// Q40
// Mini Async Task Manager

let tasks = [];

function addTask(task, callback) {
    console.log("Adding Task:", task);

    setTimeout(() => {
        tasks.push(task);
        callback();
    }, 1000);
}

function showTasks() {
    console.log("Tasks:", tasks);
}

addTask("Learn Callbacks", () => {
    addTask("Learn Promises", () => {
        addTask("Learn Async/Await", () => {
            showTasks();
        });
    });
});}