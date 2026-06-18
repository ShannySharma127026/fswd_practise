// Q1: Async Hello World
async function sayHello() {
    return "Hello World";
}



// Q2
async function getUser() {
    return { id: 1, name: "Alex", role: "Admin" };
}


// Q3
async function getProducts() {
    return [
        { id: 101, name: "Laptop", price: 999 },
        { id: 102, name: "Phone", price: 499 }
    ];
}

// Q4
async function getCurrentDate() {
    return new Date();
}



// Q5
async function getRandomNumber() {
    return Math.random();
}



// Q6
async function getStudentDetails() {
    return { rollNo: 23, name: "Sam", grade: "A" };
}



// Q7
async function getCompanyDetails() {
    return { companyName: "TechCorp", location: "San Francisco", employees: 500 };
}




// Q8
async function getCartItems() {
    return [
        { itemId: 1, item: "Shoes", quantity: 1 },
        { itemId: 2, item: "Socks", quantity: 3 }
    ];
}




// Q9
async function getTotalAmount() {
    return 150.75;
}



// Q10
async function testFunc() {
    return "Testing";
}

const result = testFunc();
console.log(result instanceof Promise);




// Q11
async function getUser() {
    return { id: 1, name: "John Doe" };
}

async function run() {
    const user = await getUser();
    console.log(user);
}
run();




// Q12
async function getProduct() {
    return { id: 45, name: "Headphones" };
}

async function run() {
    const product = await getProduct();
    console.log(product);
}
run();





// Q13
async function getOrders() {
    return [{ orderId: 1001, status: "Shipped" }];
}

async function run() {
    const orders = await getOrders();
    console.log(orders);
}
run();



// Q14
async function getPayment() {
    return { transactionId: "TXN123", status: "Success" };
}

async function run() {
    const payment = await getPayment();
    console.log(payment);
}
run();



// Q15
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Q16
async function runSequence() {
    console.log("Start");
    await wait(2000); 
    console.log("End");
}
runSequence();


// Q17:
async function printNumbers() {
    console.log(1);
    await wait(1000);
    console.log(2);
    await wait(1000);
    console.log(3);
}
printNumbers();





// Q18
async function greetUser(name) {
    await wait(1000);
    return `Hello, ${name}! Welcome back.`;
}



// Q19
async function verifyOTP(inputOtp, actualOtp) {
    await wait(1500);
    return inputOtp === actualOtp;
}



// Q20
async function loginSimulation(username, password) {
    await wait(2000);
    if (username === "admin" && password === "1234") {
        return { login: true, token: "JWT-TOKEN" };
    }
    return { login: false };
}





// Q21
async function errorFunction() {
    throw new Error("Something went wrong!");
}

async function handle() {
    try {
        await errorFunction();
    } catch (err) {
        console.error("Caught expected error:", err.message);
    }
}
handle();




// Q22
async function validateLogin(username, password) {
    if (username !== "admin" || password !== "secret") {
        throw new Error("Invalid username or password");
    }
    return "Login Successful";
}



// Q23
JavaScript
async function bankWithdrawal(amount, balance) {
    if (amount > balance) {
        throw new Error("Insufficient balance");
    }
    return balance - amount;
}



// Q24
async function processPayment(cardDetails, amount) {
    try {
        if (!cardDetails.cvv || cardDetails.cvv.length !== 3) {
            throw new Error("Payment Failed: Invalid CVV");
        }
        return { success: true, txnId: Math.random().toString(36).substring(7) };
    } catch (error) {
        return { success: false, reason: error.message };
    }
}





// Q25
async function validateRegistration(user) {
    try {
        if (!user.username || !user.email) {
            throw new Error("Missing required registration fields");
        }
        return "Valid Registration Info";
    } catch (error) {
        console.log("Validation Error:", error.message);
    }
}





// Q26
async function validateEmail(email) {
    try {
        if (!email.includes("@")) {
            throw new Error("Invalid email structure format");
        }
        return true;
    } catch (error) {
        return false;
    }
}


// Q27
async function validatePassword(password) {
    try {
        if (password.length < 8) {
            throw new Error("Password must be at least 8 characters long");
        }
        return true;
    } catch (error) {
        return false;
    }
}



// Q28
async function atmSimulation(pin, attemptedPin, withdrawalAmount, balance) {
    try {
        if (pin !== attemptedPin) throw new Error("Incorrect PIN");
        if (withdrawalAmount > balance) throw new Error("Insufficient Funds");
        return { success: true, remainingBalance: balance - withdrawalAmount };
    } catch (error) {
        return { success: false, message: error.message };
    }
}



// Q29
async function purchaseProduct(productId, stock, walletBalance, price) {
    try {
        if (stock <= 0) throw new Error("Product out of stock");
        if (walletBalance < price) throw new Error("Insufficient wallet balance");
        return { status: "Purchased", remainingWallet: walletBalance - price };
    } catch (error) {
        return { status: "Failed", error: error.message };
    }
}



// Q30
async function cancelOrder(orderId, isShipped) {
    try {
        if (isShipped) throw new Error("Cannot cancel an order that has already shipped");
        return { orderId, status: "Cancelled successfully" };
    } catch (error) {
        return { orderId, status: "Cancellation Failed", error: error.message };
    }
}





// Q31
async function runSequentially() {
    console.log("Logging in...");
    await wait(500);
    console.log("Getting User Profile...");
    await wait(500);
    console.log("Fetching Orders...");
    await wait(500);
    console.log("Processing Payment...");
    await wait(500);
    console.log("Pipeline Finished Successfully.");
}
runSequentially();



// Q32
async function bookMovie() {
    console.log("Selecting Seats...");
    await wait(1000);
    console.log("Calculating Price...");
    await wait(500);
    console.log("Processing Ticket Payment...");
    await wait(1000);
    console.log("Tickets Confirmed! Sending Confirmation QR Code...");
}
bookMovie();




// Q33
async function foodDeliveryFlow() {
    console.log("Browsing Restaurant Menu...");
    await wait(400);
    console.log("Placing Food Order...");
    await wait(800);
    console.log("Restaurant preparing food...");
    await wait(1500);
    console.log("Driver Out For Delivery!");
}
foodDeliveryFlow();



// Q34
async function bookTrainTicket() {
    console.log("Searching Available Trains...");
    await wait(1000);
    console.log("Entering Passenger Information...");
    await wait(1000);
    console.log("Reserving Berth/Seat...");
    await wait(500);
    console.log("Deducting Fare Amount...");
    await wait(1000);
    console.log("IRCTC Ticket Generated Successfully.");
}
bookTrainTicket();



// Q35
async function collegeAdmission() {
    console.log("Submitting Marks Document Application...");
    await wait(1000);
    console.log("Verifying Cutoff Scores Merit eligibility...");
    await wait(1000);
    console.log("Allocating Available Major Branch...");
    await wait(500);
    console.log("Paying Admission Fee...");
    await wait(1000);
    console.log("Admission Locked!");
}
collegeAdmission();



// Q36
async function fetchDashboardData() {
    const fetchUsers = wait(1000).then(() => ["UserA", "UserB"]);
    const fetchProducts = wait(800).then(() => ["Laptop", "Mouse"]);
    const fetchOrders = wait(1200).then(() => ["Order #1", "Order #2"]);

    const [users, products, orders] = await Promise.all([fetchUsers, fetchProducts, fetchOrders]);
    console.log({ users, products, orders });
}




// Q37
async function parallelAPIs() {
    const api1 = wait(500).then(() => "Data 1");
    const api2 = wait(1000).then(() => "Data 2");
    const api3 = wait(300).then(() => "Data 3");
    const api4 = wait(700).then(() => "Data 4");
    const api5 = wait(1200).then(() => "Data 5");

    const results = await Promise.all([api1, api2, api3, api4, api5]);
    console.log("All responses received concurrently:", results);
}




// Q38
async function loadDashboard() {
    const u = wait(500).then(() => ({ name: "Alex" }));
    const o = wait(400).then(() => [1, 2]);
    const p = wait(600).then(() => ["Phone"]);
    const n = wait(200).then(() => ["Alert 1"]);

    const [user, orders, products, notifications] = await Promise.all([u, o, p, n]);
    return { user, orders, products, notifications };
}




// Q39
async function loadImage(url) {
    await wait(Math.random() * 1000);
    return `Loaded binary data for image: ${url}`;
}

async function loadGallery() {
    const urls = ["img1.png", "img2.jpg", "img3.webp"];
    const imagePromises = urls.map(url => loadImage(url));
    const gallery = await Promise.all(imagePromises);
    console.log(gallery);
}




// Q40
async function downloadFile(fileName) {
    await wait(1500);
    return `${fileName} completed download`;
}

async function downloadBatch() {
    const files = ["doc.pdf", "sheet.xlsx", "setup.exe"];
    const results = await Promise.all(files.map(f => downloadFile(f)));
    console.log(results);
}




// Q41
async function runAllSettled() {
    const p1 = Promise.resolve("Success 1");
    const p2 = Promise.resolve("Success 2");
    const p3 = Promise.resolve("Success 3");
    const p4 = Promise.reject("Error 1 Failed");
    const p5 = Promise.reject("Error 2 Failed");

    const results = await Promise.allSettled([p1, p2, p3, p4, p5]);
    console.log(results);
}



// Q42
async function adminDashboard() {
    const fetchSales = wait(500).then(() => "$45,000");
    const fetchUsers = wait(300).then(() => 1200);
    const fetchLogs = wait(400).then(() => { throw new Error("Logs service offline"); });

    const results = await Promise.allSettled([fetchSales, fetchUsers, fetchLogs]);
    console.log("Dashboard Render Strategy:", results);
}



// Q43
async function uploadFileMock(file) {
    if (file === "virus.exe") throw new Error("Malware Rejected");
    return `${file} uploaded!`;
}

async function batchUploader() {
    const files = ["avatar.png", "virus.exe", "resume.pdf"];
    const tasks = files.map(f => uploadFileMock(f));
    const finalReport = await Promise.allSettled(tasks);
    console.log("Upload statuses:", finalReport);
}




// Q44
async function checkResult(student) {
    if (student.score < 40) throw new Error(`${student.name} failed exam score limit`);
    return `${student.name} processed as Pass`;
}

async function processClass() {
    const classList = [{ name: "Alice", score: 85 }, { name: "Bob", score: 32 }, { name: "Charlie", score: 78 }];
    const results = await Promise.allSettled(classList.map(s => checkResult(s)));
    console.log(results);
}





// Q45
async function serverRace() {
    const serverA = wait(800).then(() => "Response from Server A");
    const serverB = wait(200).then(() => "Response from Server B");
    const serverC = wait(500).then(() => "Response from Server C");

    const fastest = await Promise.race([serverA, serverB, serverC]);
    console.log(fastest); 
}




// Q46
async function firstSuccessAny() {
    const s1 = Promise.reject("Server 1 Fail");
    const s2 = Promise.reject("Server 2 Fail");
    const s3 = Promise.resolve("Server 3 Success Data");

    const firstValid = await Promise.any([s1, s2, s3]);
    console.log(firstValid); 
}



// Q47
async function fetchWithTimeout(apiPromise, timeoutMs) {
    const timeoutError = wait(timeoutMs).then(() => { throw new Error("API Execution Timeout Expired"); });
    return Promise.race([apiPromise, timeoutError]);
}



// Q48
async function* nameGenerator() {
    await wait(500); yield "Ram";
    await wait(500); yield "Shyam";
    await wait(500); yield "Mohan";
}

async function consumeGenerator() {
    for await (const name of nameGenerator()) {
        console.log(name);
    }
}
consumeGenerator();




// Q49
class AsyncNotesManager {
    constructor() {
        this.notes = [];
    }

    async addNote(content) {
        await wait(200);
        const note = { id: Date.now() + Math.random(), content };
        this.notes.push(note);
        return note;
    }

    async fetchNotes() {
        await wait(200);
        return [...this.notes];
    }

    async updateNote(id, newContent) {
        await wait(200);
        const note = this.notes.find(n => n.id === id);
        if (!note) throw new Error("Note entry not found");
        note.content = newContent;
        return note;
    }

    async deleteNote(id) {
        await wait(200);
        this.notes = this.notes.filter(n => n.id !== id);
        return { success: true, deletedId: id };
    }
}




// Q50
const ecommerceFlow = {
    async login(user, pass) {
        await wait(300); if(user !== "buyer") throw new Error("Login failed");
        return "TOKEN_SESSION_99";
    },
    async getUser(token) {
        await wait(200); return { userId: 412, name: "Gaurav", balance: 500 };
    },
    async getProducts() {
        await wait(200); return [{ id: 7, name: "Mechanical Keyboard", price: 100 }];
    },
    async getCart(userId) {
        await wait(200); return { items: [{ productId: 7, qty: 1, basePrice: 100 }] };
    },
    async applyCoupon(cart, code) {
        await wait(100);
        const discount = code === "SAVE10" ? 10 : 0;
        return { ...cart, discount };
    },
    async calculateTotal(cartWithDiscount) {
        let total = 0;
        cartWithDiscount.items.forEach(i => total += (i.qty * i.basePrice));
        total -= cartWithDiscount.discount;
        return total;
    },
    async checkoutPayment(userId, totalAmount, userBalance) {
        await wait(400);
        if (totalAmount > userBalance) throw new Error("Payment declined: Insufficient funds");
        return { txnId: "TXN_" + Math.floor(Math.random() * 100000), charged: totalAmount };
    },
    async generateInvoice(txn, userId) {
        return { invoiceId: "INV_" + Math.floor(Math.random() * 8888), user: userId, amount: txn.charged };
    },
    async sendEmail(invoice) {
        await wait(200); return `Invoice mail dispatch tracking ID reference sent for ${invoice.invoiceId}`;
    },
    async trackOrder(invoice) {
        return { trackingCode: "TRK_SPEED_POST_007", estimatedDays: 3 };
    },
    async deliverySimulation() {
        await wait(500); return "Delivered to Customer Doorstep.";
    }
};


async function runFinalBossEcommerce() {
    try {
        console.log("=== Initiating Complete Async E-Commerce pipeline ===");
        
        const token = await ecommerceFlow.login("buyer", "pass");
        console.log("✓ Authenticated Session:", token);

        const user = await ecommerceFlow.getUser(token);
        console.log("✓ Profile retrieved for user:", user.name);

        const catalog = await ecommerceFlow.getProducts();
        console.log("✓ Loaded Active Product Items count:", catalog.length);

        let activeCart = await ecommerceFlow.getCart(user.userId);
        console.log("✓ Retrieved current user cart context");

        activeCart = await ecommerceFlow.applyCoupon(activeCart, "SAVE10");
        console.log("✓ Verified coupon calculation adjustments");

        const finalAmount = await ecommerceFlow.calculateTotal(activeCart);
        console.log(`✓ Consolidated total evaluated balance amount to pay: $${finalAmount}`);

        const chargeResult = await ecommerceFlow.checkoutPayment(user.userId, finalAmount, user.balance);
        console.log("✓ Payment settled transaction key ID code:", chargeResult.txnId);

        const billReceipt = await ecommerceFlow.generateInvoice(chargeResult, user.userId);
        console.log("✓ Generated printable client structural invoice sheet:", billReceipt.invoiceId);

        const emailLog = await ecommerceFlow.sendEmail(billReceipt);
        console.log("✓ Communication confirmation status log:", emailLog);

        const transportInfo = await ecommerceFlow.trackOrder(billReceipt);
        console.log("✓ Logged delivery tracking numbers index identification code:", transportInfo.trackingCode);

        const deliveryStatus = await ecommerceFlow.deliverySimulation();
        console.log("✓ Final Logistics Phase:", deliveryStatus);

        console.log("=== Complete flow ran flawlessly to completion! ===");
    } catch (criticalPipelineError) {
        console.error(" E-commerce critical pipeline drop failure:", criticalPipelineError.message);
    }
}


runFinalBossEcommerce();