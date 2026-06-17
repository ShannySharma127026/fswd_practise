// 1.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});

2.

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server Down");
    }, 3000);
});

myPromise2.catch((error) => {
    console.log(error);
});

// 3.

const p = new Promise((resolve, reject) => {
    let randomNumber = Math.random();

    if (randomNumber > 0.5) {
        resolve("Promise Resolved");
    } else {
        reject("Promise Rejected");
    }
});

p.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});

// 4.

let age = 29
const pm = new Promise((resolve,reject)=>{

    if(age>=18){
        resolve("Resolved")
    }else{
        reject("Rejected")
    }

})

pm.then((m)=>{
    console.log(m);
}).catch((e)=>{
    console.log(e);
})

// 5.

const passwordPromise = new Promise((resolve, reject) => {
    let password = "mypassword123";

    if (password.length >= 8) {
        resolve("Password is valid");
    } else {
        reject("Password must be at least 8 characters long");
    }
});

passwordPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

// 6.

const emailPromise = new Promise((resolve, reject) => {
    let email = "test@example.com";

    if (email.includes("@") && email.includes(".")) {
        resolve("Email is valid");
    } else {
        reject("Invalid email");
    }
});

emailPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });


// 7.
const bankWithdrawal = new Promise((resolve, reject) => {
    let balance = 5000;
    let amount = 2000;

    if (amount <= balance) {
        resolve(Withdrawal successful. Remaining balance: ${balance - amount});
    } else {
        reject("Insufficient balance");
    }
});

bankWithdrawal
    .then((result) => console.log("Q7:", result))
    .catch((error) => console.log("Q7:", error));


// 8.
const atmTransaction = new Promise((resolve, reject) => {
    let pinEntered = true;

    if (pinEntered) {
        resolve("ATM Transaction Successful");
    } else {
        reject("Invalid PIN");
    }
});

atmTransaction
    .then((result) => console.log("Q8:", result))
    .catch((error) => console.log("Q8:", error));


// 9.
const userPromise = new Promise((resolve, reject) => {
    const user = {
        id: 1,
        name: "Nitin",
        age: 20
    };

    resolve(user);
});

userPromise
    .then((user) => console.log("Q9:", user))
    .catch((error) => console.log("Q9:", error));


// 10.
const errorPromise = new Promise((resolve, reject) => {
    reject({
        code: 404,
        message: "User Not Found"
    });
});

errorPromise
    .then((result) => console.log("Q10:", result))
    .catch((error) => console.log("Q10:", error));

// 11.

Promise.resolve(10)
.then((n)=>{
    console.log(n);
    return n*2
})
.then((n)=>{
    console.log(n);
    return n*2
})
.then((n)=>{
    console.log(n);
    return n*2
})
.then((n)=>{
    console.log(n);
})

// 12.

new Promise((resolve, reject) => {
    resolve("Ram");
})
.then((name) => {
    console.log(name);
    return name.toUpperCase();
})
.then((name) => {
    console.log(name);
    return name + " MOHAN";
})
.then((name) => {
    console.log(name);
    return name + " DIXIT";
})
.then((name) => {
    console.log(name);
})
.catch((error) => {
    console.log(error);
});


// 13.
Promise.resolve(1000)
    .then((price) => {
        console.log("Q13 Original Price:", price);
        return price + (price * 18) / 100; // Add GST 18%
    })
    .then((price) => {
        console.log("After GST:", price);
        return price - (price * 10) / 100; // 10% Discount
    })
    .then((price) => {
        console.log("Final Price:", price);
    });


// 14.
Promise.resolve("Login Successful")
    .then((msg) => {
        console.log("\nQ14:", msg);
        return { id: 1, name: "Nitin" };
    })
    .then((user) => {
        console.log("User:", user);
        return ["Order1", "Order2"];
    })
    .then((orders) => {
        console.log("Orders:", orders);
        return "Payment Successful";
    })
    .then((payment) => {
        console.log("Payment:", payment);
    });


// 15.
Promise.resolve("Movie Selected")
    .then((msg) => {
        console.log("\nQ15:", msg);
        return "Seat Selected";
    })
    .then((seat) => {
        console.log(seat);
        return "Payment Done";
    })
    .then((payment) => {
        console.log(payment);
        return "Ticket Booked";
    })
    .then((ticket) => {
        console.log(ticket);
    });


// 16.
Promise.resolve("Food Selected")
    .then((msg) => {
        console.log("\nQ16:", msg);
        return "Order Placed";
    })
    .then((order) => {
        console.log(order);
        return "Food Prepared";
    })
    .then((food) => {
        console.log(food);
        return "Delivered";
    })
    .then((delivery) => {
        console.log(delivery);
    });


// 17.
Promise.resolve("Application Submitted")
    .then((msg) => {
        console.log("\nQ17:", msg);
        return "Documents Verified";
    })
    .then((doc) => {
        console.log(doc);
        return "Fees Paid";
    })
    .then((fees) => {
        console.log(fees);
        return "Admission Confirmed";
    })
    .then((admission) => {
        console.log(admission);
    });


// 18.
Promise.resolve("Train Selected")
    .then((msg) => {
        console.log("\nQ18:", msg);
        return "Seat Reserved";
    })
    .then((seat) => {
        console.log(seat);
        return "Payment Successful";
    })
    .then((payment) => {
        console.log(payment);
        return "Ticket Generated";
    })
    .then((ticket) => {
        console.log(ticket);
    });

// 19.

new Promise((resolve) => {
    setTimeout(() => {
        resolve("Step 1 Completed");
    }, 1000);
})
.then((msg) => {
    console.log("Q19:", msg);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 2 Completed");
        }, 1000);
    });
})
.then((msg) => {
    console.log(msg);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 3 Completed");
        }, 1000);
    });
})
.then((msg) => {
    console.log(msg);
});


// 20.

Promise.resolve(1)
    .then((num) => {
        console.log("\nQ20:", num);
        return num + 1;
    })
    .then((num) => {
        console.log(num);
        return num + 1;
    })
    .then((num) => {
        console.log(num);
        return num + 1;
    })
    .then((num) => {
        console.log(num);
        return num + 1;
    })
    .then((num) => {
        console.log(num);
        return num + 1;
    })
    .then((num) => {
        console.log(num);
        return num + 1;
    })
    .then((num) => {
        console.log(num);
        return num + 1;
    })
    .then((num) => {
        console.log(num);
        return num + 1;
    })
    .then((num) => {
        console.log(num);
        return num + 1;
    })
    .then((num) => {
        console.log(num);
        return num + 1;
    })
    .then((num) => {
        console.log(num);
    });

// 21.

Promise.resolve("Start")
    .then((msg) => {
        console.log("Q21:", msg);
        throw new Error("Something went wrong in first then");
    })
    .then((msg) => {
        console.log(msg);
    })
    .catch((error) => {
        console.log("Caught Error:", error.message);
    });


// 22.

Promise.resolve(1)
    .then((num) => {
        console.log("\nQ22:", num);
        return num + 1;
    })
    .then((num) => {
        console.log(num);
        return num + 1;
    })
    .then((num) => {
        console.log(num);
        throw new Error("Error in third then");
    })
    .then((num) => {
        console.log("This will not run");
        return num + 1;
    })
    .then((num) => {
        console.log("This will also not run");
    })
    .catch((error) => {
        console.log("Caught Error:", error.message);
    });

// 23.

Promise.resolve("Step1")
    .then((msg) => {
        console.log(msg);
        return "Step2";
    })
    .then((msg) => {
        console.log(msg);
        throw new Error("Error Occurred");
    })
    .then((msg) => {
        console.log(msg); 
    })
    .catch((error) => {
        console.log("Catch:", error.message);
    });

// 24.

Promise.resolve("Start")
    .then((msg) => {
        console.log("Q24:", msg);
        throw new Error("Something went wrong");
    })
    .catch((error) => {
        console.log("Caught Error:", error.message);

        // Recover by returning a value
        return "Recovered Successfully";
    })
    .then((msg) => {
        console.log("Continue Chain:", msg);
    });


// 25.

Promise.resolve("Begin")
    .then((msg) => {
        console.log("\nQ25:", msg);
        throw new Error("First Error");
    })
    .catch((error) => {
        console.log("First Catch:", error.message);
    })
    .catch((error) => {
        console.log("Second Catch:", error.message);
    });

// 26.

function greeting(name) {
    return new Promise((resolve) => {
        resolve("Hello " + name);
    });
}

greeting("Nitin")
    .then((msg) => console.log("Q26:", msg));


// 27.

function calculator(a, b) {
    return new Promise((resolve) => {
        resolve(a + b);
    });
}

calculator(10, 20)
    .then((result) => console.log("Q27:", result));


// 28.

function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "admin" && password === "1234") {
            resolve("Login Successful");
        } else {
            reject("Invalid Credentials");
        }
    });
}

login("admin", "1234")
    .then((msg) => console.log("Q28:", msg))
    .catch((err) => console.log("Q28:", err));


// 29.
function downloadFile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("File Downloaded");
        }, 2000);
    });
}

downloadFile()
    .then((msg) => console.log("Q29:", msg));


// 30.

function getWeather() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                city: "Delhi",
                temperature: "35°C",
                condition: "Sunny"
            });
        }, 1000);
    });
}

getWeather()
    .then((weather) => console.log("Q30:", weather))
    .catch((err) => console.log(err));


// 31.

const user = Promise.resolve("User Data");
const orders = Promise.resolve("Orders Data");
const products = Promise.resolve("Products Data");

Promise.all([user, orders, products])
    .then((result) => {
        console.log("Q31:", result);
    });


// 32.

const p1 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 1"), 1000)
);

const p2 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 2"), 2000)
);

const p3 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 3"), 3000)
);

const p4 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 4"), 4000)
);

const p5 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 5"), 5000)
);

Promise.all([p1, p2, p3, p4, p5])
    .then((result) => {
        console.log("Q32:", result);
    });


// 33.

const a = Promise.resolve("A");
const b = Promise.resolve("B");
const c = Promise.reject("Error in C");

Promise.all([a, b, c])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Q33:", error);
    });


// 34.

const profile = Promise.resolve("Profile Loaded");
const notifications = Promise.resolve("Notifications Loaded");
const messages = Promise.resolve("Messages Loaded");

Promise.all([profile, notifications, messages])
    .then((result) => {
        console.log("Q34:", result);
    });


// 35.

const file1 = new Promise((resolve) =>
    setTimeout(() => resolve("File 1 Downloaded"), 1000)
);

const file2 = new Promise((resolve) =>
    setTimeout(() => resolve("File 2 Downloaded"), 2000)
);

const file3 = new Promise((resolve) =>
    setTimeout(() => resolve("File 3 Downloaded"), 3000)
);

Promise.all([file1, file2, file3])
    .then((result) => {
        console.log("Q35:", result);
    });

// 36.

const taskA = Promise.resolve("Task A Completed");
const taskB = Promise.resolve("Task B Completed");
const taskC = Promise.resolve("Task C Completed");
const taskD = Promise.reject("Task D Failed");
const taskE = Promise.reject("Task E Failed");

Promise.allSettled([taskA, taskB, taskC, taskD, taskE])
    .then((result) => {
        console.log("Q36:", result);
    });


// 37.

const employeeData = Promise.resolve("Employee Data Loaded");
const salesData = Promise.reject("Sales API Failed");
const inventoryData = Promise.resolve("Inventory Loaded");
const customerData = Promise.reject("Customer API Failed");

Promise.allSettled([
    employeeData,
    salesData,
    inventoryData,
    customerData
])
.then((result) => {
    console.log("Q37:", result);
});


// 38.

const imageUpload = Promise.resolve("Image Uploaded");
const videoUpload = Promise.reject("Video Upload Failed");
const documentUpload = Promise.resolve("Document Uploaded");
const audioUpload = Promise.reject("Audio Upload Failed");

Promise.allSettled([
    imageUpload,
    videoUpload,
    documentUpload,
    audioUpload
])
.then((result) => {
    console.log("Q38:", result);
});

// 39(A).
const serverOne = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Server1 Response");
    }, 5000);
});

const serverTwo = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Server2 Response");
    }, 2000);
});

const serverThree = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Server3 Response");
    }, 1000);
});

Promise.race([serverOne, serverTwo, serverThree])
    .then((result) => {
        console.log("Q39-A:", result);
    });


// 39(B).
const nodeOne = new Promise((resolve, reject) => {
    reject("Server1 Failed");
});

const nodeTwo = new Promise((resolve, reject) => {
    reject("Server2 Failed");
});

const nodeThree = new Promise((resolve) => {
    resolve("Server3 Success");
});

Promise.any([nodeOne, nodeTwo, nodeThree])
    .then((result) => {
        console.log("Q39-B:", result);
    })
    .catch((error) => {
        console.log(error);
    });

// 40.

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login Successful");
            resolve();
        }, 1000);
    });
}

function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User Fetched");
            resolve();
        }, 1000);
    });
}

function fetchRestaurants() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                console.log("Restaurants Fetched");
                resolve();
            } else {
                reject("Restaurant Service Failed");
            }
        }, 1000);
    });
}

function fetchMenu() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Menu Fetched");
            resolve();
        }, 1000);
    });
}

function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order Placed");
            resolve();
        }, 1000);
    });
}

function processPayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                console.log("Payment Successful");
                resolve();
            } else {
                reject("Payment Failed");
            }
        }, 1000);
    });
}

function generateInvoice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Invoice Generated");
            resolve();
        }, 1000);
    });
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Email Sent");
            resolve();
        }, 1000);
    });
}

function trackOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                console.log("Order Tracking Started");
                resolve();
            } else {
                reject("Tracking Service Error");
            }
        }, 1000);
    });
}

function deliverOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order Delivered");
            resolve();
        }, 1000);
    });
}


// Promise Chaining

login()
    .then(() => fetchUser())
    .then(() => fetchRestaurants())
    .then(() => fetchMenu())
    .then(() => placeOrder())
    .then(() => processPayment())
    .then(() => generateInvoice())
    .then(() => sendEmail())
    .then(() => trackOrder())
    .then(() => deliverOrder())
    .then(() => {
        console.log("Food Delivery Process Completed");
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Thank You For Using Food Delivery App");
    });