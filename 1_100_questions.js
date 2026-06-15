Q1
try {
    throw new Error("oops");
}
catch(e) {
    console.log(e.message, e instanceof Error);
}
finally {
    console.log("done");
}



Q2
try {
    null.x;
}
catch(e) {
    console.log(e.constructor.name);
}




Q3
try {
    try {
        throw 42;
    }
    finally {
        console.log("inner");
    }
}
catch(e) {
    console.log("caught", e);
}
finally {
    console.log("outer");
}  

   


Q4
function f() {
    try {
        return 1;
    }
    finally {
        return 2;
    }
}

console.log(f());





Q5
async function go() {
    try {
        await Promise.reject("bad");
    }
    catch(e) {
        console.log(e);
    }
    finally {
        console.log("fin");
    }
}
go();





Q6
try {
    undeclaredVar;
}
catch(e) {
    console.log(e.constructor.name);
}




Q7
class AppError extends Error {
    constructor(msg, code) {
        super(msg);
        this.code = code;
    }
}

try {
    throw new AppError("fail",404);
}
catch(e) {
    console.log(
        e.message,
        e.code,
        e instanceof Error
    );
}






Q8
try {
    JSON.parse("{bad}");
}
catch(e) {
    console.log(
        e instanceof SyntaxError
    );
}




Q9
Promise.resolve()
.then(() => {
    throw new Error("p");
})
.catch(e => console.log("c",e.message));

try {
    throw new Error("s");
}
catch(e) {
    console.log("s",e.message);
}




Q10
const obj = {};
obj.foo.bar;




Q11

ValidationError, NetworkError, AuthError
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

class AuthError extends Error {
    constructor(message, userId) {
        super(message);
        this.userId = userId;
    }
}

function handle(err) {
    if (err instanceof ValidationError) {
        console.log("Validation Error:", err.field);
    }
    else if (err instanceof NetworkError) {
        console.log("Network Error:", err.statusCode);
    }
    else if (err instanceof AuthError) {
        console.log("Auth Error:", err.userId);
    }
}





Q12
 safeDiv(a,b)
class DivisionByZeroError extends Error {
    constructor() {
        super("Cannot divide by zero");
    }
}

function safeDiv(a, b) {
    try {
        if (b === 0) {
            throw new DivisionByZeroError();
        }

        console.log(a / b);
    }
    catch (e) {
        console.log(e.message);
    }
}

safeDiv(10, 2);
safeDiv(10, 0);






Q13
 retry(fn,times)
class MaxRetriesError extends Error {
    constructor(attempts) {
        super("Max retries reached");
        this.attempts = attempts;
    }
}

async function retry(fn, times) {

    for(let i=1;i<=times;i++) {

        try {
            return await fn();
        }
        catch(err) {
            console.log("Attempt", i, "failed");
        }
    }

    throw new MaxRetriesError(times);
}



Q14 
ES Modules
mathUtils.js
export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}

export function mul(a,b){
    return a*b;
}

export function div(a,b){

    if(b===0){
        throw new Error("Divide by zero");
    }

    return a/b;
}
main.js
import { add, sub, mul, div } from "./mathUtils.js";

console.log(add(10,5));
console.log(sub(10,5));
console.log(mul(10,5));
console.log(div(10,5));




Q15
 CommonJS Logger
logger.js
function log(level,msg){
    console.log(`[${level}] ${msg}`);
}

module.exports = log;
app.js
const log = require("./logger");

log("INFO","Server Started");




Q16
 Dynamic import()
class PluginNotFoundError extends Error {
    constructor(name){
        super(`Plugin ${name} not found`);
    }
}

async function loadPlugin(name){

    try{
        return await import(`./plugins/${name}.js`);
    }
    catch{
        throw new PluginNotFoundError(name);
    }
}





Q17
 config.js Default Export
config.js
export default {
    env:"development",
    port:3000,
    dbUrl:"localhost"
};
main.js
import config from "./config.js";

console.log(config.env);
console.log(config.port);
console.log(config.dbUrl);





Q18
 errorBoundary(fn)
async function errorBoundary(fn){

    try{

        const result = await fn();

        return {
            ok:true,
            data:result
        };
    }
    catch(e){

        return {
            ok:false,
            error:e.message
        };
    }
}




Q19 
Barrel Export
stringUtils.js
export function upper(str){
    return str.toUpperCase();
}
arrayUtils.js
export function first(arr){
    return arr[0];
}
objectUtils.js
export function keys(obj){
    return Object.keys(obj);
}
index.js
export * from "./stringUtils.js";
export * from "./arrayUtils.js";
export * from "./objectUtils.js";
main.js
import { upper, first, keys } from "./index.js";



Q20 
fetchWithTimeout()
class TimeoutError extends Error {
    constructor(){
        super("Request Timeout");
    }
}

async function fetchWithTimeout(url, ms){

    const timeout = new Promise((_, reject) => {

        setTimeout(() => {
            reject(new TimeoutError());
        }, ms);

    });

    return Promise.race([
        fetch(url),
        timeout
    ]);
}




Q21 
Custom EventEmitter
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, cb) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(cb);
    }

    off(event, cb) {
        this.events[event] =
            this.events[event].filter(fn => fn !== cb);
    }

    emit(event, ...args) {

        if (!this.events[event]) return;

        this.events[event].forEach(fn => {

            try {
                fn(...args);
            }
            catch(err) {
                console.log("Listener Error");
            }

        });
    }
}




Q22 
 parseJSON()
function parseJSON(str){

    try{
        return JSON.parse(str);
    }
    catch(err){
        console.log("Invalid JSON");
        return null;
    }
    finally{
        console.log("Parsing Finished");
    }

}


Q23 
Predict Output
const obj = {
    get val() {
        throw new Error("no");
    }
};

try {
    const { val } = obj;
}
catch(e) {
    console.log(e.message);
}



Q24 
Predict Output
function* gen() {
    try {
        yield 1;
        yield 2;
    }
    finally {
        yield 3;
    }
}

const g = gen();

console.log(
    g.next(),
    g.return("done"),
    g.next()
);



Q25
class E extends Error {}

const e = new E("test");

console.log(
    e instanceof E,
    e instanceof Error,
    e.name
);


Q26             
<div id="parent">
    <span id="child">click</span>
</div>
parent.addEventListener("click", () => {
    console.log("parent");
});

child.addEventListener("click", () => {
    console.log("child");
});



Q27
const el = document.createElement("div");

el.textContent = "<b>bold</b>";

console.log(el.innerHTML);



Q28
e.stopPropagation();
<a href="https://google.com"></a>
e.stopPropagation();
e.preventDefault();



Q29
localStorage.setItem(
    "x",
    {a:1}
);

console.log(
    localStorage.getItem("x")
);



Q30
const ul = document.createElement("ul");

ul.innerHTML =
"<li>A</li><li>B</li>";

const items =
ul.querySelectorAll("li");

items.forEach(i => i.remove());

console.log(
    ul.children.length
);


Q31
document.getElementById("myId");

document.querySelector("#myId");

Q32
const p = document.createElement("p");

document.body.appendChild(p);

p.addEventListener("click", () => {
    console.log("fired");
});

p.dispatchEvent(new Event("click"));

p.remove();

p.dispatchEvent(new Event("click"));




Q33
<input id="txt"> 
txt.addEventListener("input", () => {
    console.log("input");
});

txt.addEventListener("change", () => {
    console.log("change");
});




Q34
<div id="parent">
    <button id="child">Click</button>
</div>

parent.addEventListener("click", function(e){

    console.log(e.target);

    console.log(e.currentTarget);

});





Q35
sessionStorage.setItem("key","val");



Q36
<ul id="list">
    <li>Apple</li>
    <li>Mango</li>
</ul>



const list =
document.getElementById("list");

list.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        console.log(e.target.textContent);
    }

});




Q37
<p id="para">Hello</p>
const p =
document.querySelector("#para");

p.textContent = "Welcome";

p.style.backgroundColor = "yellow";


Q38

function virtualDOM(config){

    const el =
    document.createElement(config.tag);

    if(config.text){
        el.textContent = config.text;
    }

    if(config.children){

        config.children.forEach(child => {

            el.appendChild(
                virtualDOM(child)
            );

        });

    }

    return el;
}



Q39
<form id="form">
<input id="name">
<input id="email">
<button>Submit</button>
</form>

form.addEventListener("submit", function(e){

    e.preventDefault();

    if(name.value === ""){
        alert("Name Required");
        return;
    }

    if(!email.value.includes("@")){
        alert("Invalid Email");
        return;
    }

    alert("Success");

});


Q40
<ul id="list">
<li draggable="true">A</li>
<li draggable="true">B</li>
<li draggable="true">C</li>
</ul>


let dragged;

document.addEventListener(
"dragstart",
e => {
    dragged = e.target;
});

document.addEventListener(
"dragover",
e => {
    e.preventDefault();
});

document.addEventListener(
"drop",
e => {

    e.preventDefault();

    if(e.target.tagName === "LI"){

        e.target.parentNode.insertBefore(
            dragged,
            e.target
        );

    }

});



Q41
class StorageHelper {

    set(key, value) {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    }

    get(key) {
        return JSON.parse(
            localStorage.getItem(key)
        );
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }
}

const store = new StorageHelper();

store.set("name", "Ram");

console.log(store.get("name"));




Q42
<h2>Session Counter</h2>
<p id="sCount"></p>

<h2>Local Counter</h2>
<p id="lCount"></p>

let s =
Number(sessionStorage.getItem("s")) || 0;

let l =
Number(localStorage.getItem("l")) || 0;

s++;
l++;

sessionStorage.setItem("s", s);
localStorage.setItem("l", l);

document.getElementById("sCount").textContent = s;

document.getElementById("lCount").textContent = l;

Q43
const observer =
new MutationObserver(function(list){

    list.forEach(mutation => {

        mutation.addedNodes.forEach(node => {

            if(
                node.dataset &&
                node.dataset.track
            ){
                console.log(
                    "Tracked Node Added"
                );
            }

        });

    });

});

observer.observe(document.body,{
    childList:true,
    subtree:true
});




Q44
<img id="big" src="1.jpg">

<button id="prev">Prev</button>
<button id="next">Next</button>


const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

let index = 0;

function showImage(){
    big.src = images[index];
}

next.onclick = () => {
    index =
    (index + 1) % images.length;

    showImage();
};

prev.onclick = () => {
    index =
    (index - 1 + images.length)
    % images.length;

    showImage();
};



Q45
function PubSub(){

    let events = {};

    return {

        subscribe(event, fn){

            if(!events[event]){
                events[event] = [];
            }

            events[event].push(fn);
        },

        publish(event, data){

            if(events[event]){

                events[event].forEach(fn =>
                    fn(data)
                );

            }

        },

        unsubscribe(event, fn){

            events[event] =
            events[event].filter(
                x => x !== fn
            );

        }

    };

}




Q46
function getSiblings(el){

    return [...el.parentNode.children]
    .filter(x => x !== el);

}


Ancestors
function getAncestors(el){

    let arr = [];

    while(el.parentElement){

        arr.push(el.parentElement);

        el = el.parentElement;
    }

    return arr;
}



Descendants
function getAllDescendants(el){

    return el.querySelectorAll("*");

}



Q47
function debounce(fn, ms){

    let timer;

    return function(){

        clearTimeout(timer);

        timer = setTimeout(
            fn,
            ms
        );

    };

}


Throttle
function throttle(fn, ms){

    let allow = true;

    return function(){

        if(!allow) return;

        allow = false;

        fn();

        setTimeout(() => {
            allow = true;
        }, ms);

    };

}



Q48
document.addEventListener(
"keydown",
function(e){

    if(e.ctrlKey && e.key==="s"){

        e.preventDefault();

        console.log("Saved!");
    }

    if(e.ctrlKey && e.key==="z"){

        console.log("Undo!");
    }

    if(e.key==="Escape"){

        console.log("Cancelled");
    }

});  





Q49
<img
data-src="image.jpg"
class="lazy"
src="placeholder.jpg">
</img>


const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const img =
            entry.target;

            img.src =
            img.dataset.src;

            observer.unobserve(img);
        }

    });

});

document
.querySelectorAll(".lazy")
.forEach(img => {

    observer.observe(img);

});




Q50


const data = [
    {
        name:"Ram",
        age:20,
        city:"Delhi"
    },
    {
        name:"Shyam",
        age:22,
        city:"Jaipur"
    }
];




Table Creation
const table =
document.createElement("table");

data.forEach(person => {

    const row =
    document.createElement("tr");

    Object.values(person)
    .forEach(value => {

        const td =
        document.createElement("td");

        td.textContent = value;

        row.appendChild(td);

    });

    table.appendChild(row);

});

document.body.appendChild(table);




Q51
const m = await import("./mod.js");

console.log(
    m.default,
    m.named
);




Q52
try{
    eval("{{bad syntax{{");
}
catch(e){
    console.log(e.name);
}





Q53
class HttpError extends Error {

    constructor(code){

        super("HTTP " + code);

        this.code = code;

        this.name = "HttpError";
    }

}

const e =
new HttpError(500);

console.log(
    e.message,
    e.stack.split("\n")[0]
);



Q54
import x from "./a.js";
const x = require("./a.js");


Q55
const err =
new TypeError("bad type");

console.log(

    err instanceof TypeError,

    err instanceof Error,

    err instanceof RangeError

);




Q56
const div =
document.createElement("div");

div.innerHTML =
'hi <scr' +
'ipt>alert(1)</scr' +
'ipt>';

console.log(
    div.textContent
);


Q57
parent.addEventListener(
"click",
() => console.log("capture"),
true
);

parent.addEventListener(
"click",
() => console.log("bubble"),
false
);




Day4_Day5_100_Questions.pdf
PDF
i give all question answer very simple code 

Yes, I can do that. However, your PDF contains 100 questions, including many HARD coding problems and mini-projects. A complete solution with:

Detailed explanations
Simple code
Output explanations
Mini-project solutions

will be 40–80+ pages long.

I can generate the full PDF, but I need to do it in parts because of the size.

Plan

✅ Part 1: Q1–Q25 (Day 4 Predict Output + Error Handling)
✅ Part 2: Q26–Q50 (Day 5 DOM & Events)
✅ Part 3: Q51–Q75
✅ Part 4: Q76–Q100 + Final Boss Project
✅ Then combine everything into one PDF.

This will give you a complete exam-ready solution book with simple explanations and beginner-friendly code (matching your preference for easy-to-understand code examples).

Reply with:

"Start Part 1"

and I'll begin writing detailed answers for Q1–Q25. After all parts are finished, I'll generate the complete PDF.

ok you give answer in part forms

Great! We'll do it in parts with simple explanations and simple code. 😊

Part 1 (Q1–Q10) – Predict Output
Q1
try {
    throw new Error("oops");
}
catch(e) {
    console.log(e.message, e instanceof Error);
}
finally {
    console.log("done");
}
Output
oops true
done
Explanation
throw creates an error.
catch catches it.
e.message = "oops"
e instanceof Error = true
finally always runs.
Q2
try {
    null.x;
}
catch(e) {
    console.log(e.constructor.name);
}
Output
TypeError
Explanation

null has no properties.

null.x

causes a TypeError.

Q3
try {
    try {
        throw 42;
    }
    finally {
        console.log("inner");
    }
}
catch(e) {
    console.log("caught", e);
}
finally {
    console.log("outer");
}
Output
inner
caught 42
outer
Explanation
42 is thrown.
Inner finally runs first.
Error goes to outer catch.
Outer finally runs last.
Q4
function f() {
    try {
        return 1;
    }
    finally {
        return 2;
    }
}

console.log(f());
Output
2
Explanation

finally return overrides try return.

Q5
async function go() {
    try {
        await Promise.reject("bad");
    }
    catch(e) {
        console.log(e);
    }
    finally {
        console.log("fin");
    }
}
go();
Output
bad
fin
Explanation

Rejected promise goes to catch.
Then finally executes.

Q6
try {
    undeclaredVar;
}
catch(e) {
    console.log(e.constructor.name);
}
Output
ReferenceError
Explanation

Variable does not exist.

Q7
class AppError extends Error {
    constructor(msg, code) {
        super(msg);
        this.code = code;
    }
}

try {
    throw new AppError("fail",404);
}
catch(e) {
    console.log(
        e.message,
        e.code,
        e instanceof Error
    );
}
Output
fail 404 true
Explanation

Custom error inherits from Error.

Q8
try {
    JSON.parse("{bad}");
}
catch(e) {
    console.log(
        e instanceof SyntaxError
    );
}
Output
true
Explanation

Invalid JSON causes SyntaxError.

Q9
Promise.resolve()
.then(() => {
    throw new Error("p");
})
.catch(e => console.log("c",e.message));

try {
    throw new Error("s");
}
catch(e) {
    console.log("s",e.message);
}
Output
s s
c p
Explanation
Synchronous code runs first.
Promise callbacks run later.
Q10
const obj = {};
obj.foo.bar;
Error
TypeError
Explanation
obj.foo

is undefined.

undefined.bar

causes TypeError.

Quick Revision Table
Question	Answer
Q1	oops true, done
Q2	TypeError
Q3	inner, caught 42, outer
Q4	2
Q5	bad, fin
Q6	ReferenceError
Q7	fail 404 true
Q8	true
Q9	s s, c p
Q10	TypeError

Send "Part 2" and I'll give Q11–Q20 (Simple Code Solutions). 🚀

please give me answer in pdf forms

📄 Your PDF is ready:

Download: Part1_Q1_Q10_Answers.pdf

This contains the answers for Q1–Q10.

When you're ready, send "Part 2 PDF" and I'll create a PDF for Q11–Q20 with simple code and explanations. 

Send Part 2 and give me Q11–Q20 (Simple Code Solutions)
Part 2 (Q11–Q20) – Simple Code Solutions
Q11 ValidationError, NetworkError, AuthError
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

class AuthError extends Error {
    constructor(message, userId) {
        super(message);
        this.userId = userId;
    }
}

function handle(err) {
    if (err instanceof ValidationError) {
        console.log("Validation Error:", err.field);
    }
    else if (err instanceof NetworkError) {
        console.log("Network Error:", err.statusCode);
    }
    else if (err instanceof AuthError) {
        console.log("Auth Error:", err.userId);
    }
}
Q12 safeDiv(a,b)
class DivisionByZeroError extends Error {
    constructor() {
        super("Cannot divide by zero");
    }
}

function safeDiv(a, b) {
    try {
        if (b === 0) {
            throw new DivisionByZeroError();
        }

        console.log(a / b);
    }
    catch (e) {
        console.log(e.message);
    }
}

safeDiv(10, 2);
safeDiv(10, 0);
Output
5
Cannot divide by zero
Q13 retry(fn,times)
class MaxRetriesError extends Error {
    constructor(attempts) {
        super("Max retries reached");
        this.attempts = attempts;
    }
}

async function retry(fn, times) {

    for(let i=1;i<=times;i++) {

        try {
            return await fn();
        }
        catch(err) {
            console.log("Attempt", i, "failed");
        }
    }

    throw new MaxRetriesError(times);
}
Q14 ES Modules
mathUtils.js
export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}

export function mul(a,b){
    return a*b;
}

export function div(a,b){

    if(b===0){
        throw new Error("Divide by zero");
    }

    return a/b;
}
main.js
import { add, sub, mul, div } from "./mathUtils.js";

console.log(add(10,5));
console.log(sub(10,5));
console.log(mul(10,5));
console.log(div(10,5));
Q15 CommonJS Logger
logger.js
function log(level,msg){
    console.log(`[${level}] ${msg}`);
}

module.exports = log;
app.js
const log = require("./logger");

log("INFO","Server Started");
Output
[INFO] Server Started
Q16 Dynamic import()
class PluginNotFoundError extends Error {
    constructor(name){
        super(`Plugin ${name} not found`);
    }
}

async function loadPlugin(name){

    try{
        return await import(`./plugins/${name}.js`);
    }
    catch{
        throw new PluginNotFoundError(name);
    }
}
Q17 config.js Default Export
config.js
export default {
    env:"development",
    port:3000,
    dbUrl:"localhost"
};
main.js
import config from "./config.js";

console.log(config.env);
console.log(config.port);
console.log(config.dbUrl);
Q18 errorBoundary(fn)
async function errorBoundary(fn){

    try{

        const result = await fn();

        return {
            ok:true,
            data:result
        };
    }
    catch(e){

        return {
            ok:false,
            error:e.message
        };
    }
}
Example
errorBoundary(() => 10);

errorBoundary(() => {
    throw new Error("Failed");
});
Q19 Barrel Export
stringUtils.js
export function upper(str){
    return str.toUpperCase();
}
arrayUtils.js
export function first(arr){
    return arr[0];
}
objectUtils.js
export function keys(obj){
    return Object.keys(obj);
}
index.js
export * from "./stringUtils.js";
export * from "./arrayUtils.js";
export * from "./objectUtils.js";
main.js
import { upper, first, keys } from "./index.js";
Q20 fetchWithTimeout()
class TimeoutError extends Error {
    constructor(){
        super("Request Timeout");
    }
}

async function fetchWithTimeout(url, ms){

    const timeout = new Promise((_, reject) => {

        setTimeout(() => {
            reject(new TimeoutError());
        }, ms);

    });

    return Promise.race([
        fetch(url),
        timeout
    ]);
}
Example
fetchWithTimeout(
    "https://api.example.com",
    5000
)
.then(res => console.log("Success"))
.catch(err => console.log(err.message));
Quick Revision
Question	Topic
Q11	Custom Errors
Q12	DivisionByZeroError
Q13	Retry Function
Q14	ES Modules
Q15	CommonJS
Q16	Dynamic Import
Q17	Default Export
Q18	Error Boundary
Q19	Barrel Export
Q20	fetchWithTimeout

Send "Part 3" for Q21–Q30. 🚀

part 3
Part 3 (Q21–Q30) – Simple Answers & Code
Q21 Custom EventEmitter
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, cb) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(cb);
    }

    off(event, cb) {
        this.events[event] =
            this.events[event].filter(fn => fn !== cb);
    }

    emit(event, ...args) {

        if (!this.events[event]) return;

        this.events[event].forEach(fn => {

            try {
                fn(...args);
            }
            catch(err) {
                console.log("Listener Error");
            }

        });
    }
}
Example
const emitter = new EventEmitter();

emitter.on("greet", name => {
    console.log("Hello", name);
});

emitter.emit("greet", "Ram");
Output
Hello Ram
Q22 parseJSON()
function parseJSON(str){

    try{
        return JSON.parse(str);
    }
    catch(err){
        console.log("Invalid JSON");
        return null;
    }
    finally{
        console.log("Parsing Finished");
    }

}
Example
console.log(parseJSON('{"name":"Ram"}'));
console.log(parseJSON("{bad}"));
Q23 Predict Output
const obj = {
    get val() {
        throw new Error("no");
    }
};

try {
    const { val } = obj;
}
catch(e) {
    console.log(e.message);
}
Output
no
Explanation

Getter runs while destructuring.

Getter throws Error.

Catch prints:

no
Q24 Predict Output
function* gen() {
    try {
        yield 1;
        yield 2;
    }
    finally {
        yield 3;
    }
}

const g = gen();

console.log(
    g.next(),
    g.return("done"),
    g.next()
);
Output
{ value:1, done:false }

{ value:3, done:false }

{ value:'done', done:true }
Explanation

return() triggers finally.

finally yields 3.

Q25 Predict Output
class E extends Error {}

const e = new E("test");

console.log(
    e instanceof E,
    e instanceof Error,
    e.name
);
Output
true true E
Explanation

E inherits from Error.

Q26 Bubbling Order

HTML

<div id="parent">
    <span id="child">click</span>
</div>

JavaScript

parent.addEventListener("click", () => {
    console.log("parent");
});

child.addEventListener("click", () => {
    console.log("child");
});
Click Child
Output
child
parent
Explanation

Event starts at child.

Then bubbles to parent.

Q27 Predict Output
const el = document.createElement("div");

el.textContent = "<b>bold</b>";

console.log(el.innerHTML);
Output
&lt;b&gt;bold&lt;/b&gt;
Explanation

textContent treats text as plain text.

No HTML is created.

Q28 stopPropagation vs preventDefault
stopPropagation()

Stops event bubbling.

e.stopPropagation();
preventDefault()

Stops browser default action.

e.preventDefault();

Example:

<a href="https://google.com">

Click won't open link.

Both Together
e.stopPropagation();
e.preventDefault();

Result:

No bubbling
No default action
Q29 Predict Output
localStorage.setItem(
    "x",
    {a:1}
);

console.log(
    localStorage.getItem("x")
);
Output
[object Object]
Explanation

Objects become strings automatically.

Correct way:

localStorage.setItem(
    "x",
    JSON.stringify({a:1})
);
Q30 Predict Output
const ul = document.createElement("ul");

ul.innerHTML =
"<li>A</li><li>B</li>";

const items =
ul.querySelectorAll("li");

items.forEach(i => i.remove());

console.log(
    ul.children.length
);
Output
0
Explanation

Both <li> elements are removed.

No child remains.

Quick Revision Table
Question	Answer
Q21	Custom EventEmitter
Q22	Safe JSON Parser
Q23	no
Q24	1 → 3 → done
Q25	true true E
Q26	child → parent
Q27	<b> shown as text
Q28	stop bubbling / stop default
Q29	[object Object]
Q30	0

✅ Part 3 Complete

Send "Part 4" for Q31–Q40. 🚀

part 4
Part 4 (Q31–Q40) – Simple Answers & Code
Q31 getElementById vs querySelector
document.getElementById("myId");

document.querySelector("#myId");
Difference
getElementById	querySelector
Finds by ID only	Uses any CSS selector
Faster	Slightly slower
Returns one element	Returns first matching element
Example
document.querySelector(".box");
document.querySelector("div p");
Q32 Predict Output
const p = document.createElement("p");

document.body.appendChild(p);

p.addEventListener("click", () => {
    console.log("fired");
});

p.dispatchEvent(new Event("click"));

p.remove();

p.dispatchEvent(new Event("click"));
Output
fired
fired
Explanation

Removing element from DOM does NOT remove event listeners.

Q33 input vs change Event
HTML
<input id="txt">
JavaScript
txt.addEventListener("input", () => {
    console.log("input");
});

txt.addEventListener("change", () => {
    console.log("change");
});
Case 1: User Types
input
input
input

Fires every keystroke.

Case 2: User Presses Tab
change

Runs when input loses focus.

Q34 e.target vs e.currentTarget
HTML
<div id="parent">
    <button id="child">Click</button>
</div>
JS
parent.addEventListener("click", function(e){

    console.log(e.target);

    console.log(e.currentTarget);

});
Click Button
e.target = button
e.currentTarget = div
Explanation
Property	Meaning
target	Actual clicked element
currentTarget	Element with listener
Q35 sessionStorage
sessionStorage.setItem("key","val");
Same Tab + Reload
val

Still available.

New Tab
null

Not shared.

Q36 Event Delegation
HTML
<ul id="list">
    <li>Apple</li>
    <li>Mango</li>
</ul>
JS
const list =
document.getElementById("list");

list.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        console.log(e.target.textContent);
    }

});
Output
Apple

or

Mango

Works for future <li> also.

Q37 Change Paragraph Text
HTML
<p id="para">Hello</p>
JS
const p =
document.querySelector("#para");

p.textContent = "Welcome";

p.style.backgroundColor = "yellow";
Q38 virtualDOM()
function virtualDOM(config){

    const el =
    document.createElement(config.tag);

    if(config.text){
        el.textContent = config.text;
    }

    if(config.children){

        config.children.forEach(child => {

            el.appendChild(
                virtualDOM(child)
            );

        });

    }

    return el;
}
Example
const node = virtualDOM({
    tag:"div",
    children:[
        {
            tag:"span",
            text:"hi"
        }
    ]
});

document.body.appendChild(node);
Q39 Form Validation
HTML
<form id="form">
<input id="name">
<input id="email">
<button>Submit</button>
</form>
JS
form.addEventListener("submit", function(e){

    e.preventDefault();

    if(name.value === ""){
        alert("Name Required");
        return;
    }

    if(!email.value.includes("@")){
        alert("Invalid Email");
        return;
    }

    alert("Success");

});
Q40 Drag & Drop Reorder
HTML
<ul id="list">
<li draggable="true">A</li>
<li draggable="true">B</li>
<li draggable="true">C</li>
</ul>
JS (Simple Version)
let dragged;

document.addEventListener(
"dragstart",
e => {
    dragged = e.target;
});

document.addEventListener(
"dragover",
e => {
    e.preventDefault();
});

document.addEventListener(
"drop",
e => {

    e.preventDefault();

    if(e.target.tagName === "LI"){

        e.target.parentNode.insertBefore(
            dragged,
            e.target
        );

    }

});
Save Order
localStorage.setItem(
    "order",
    list.innerHTML
);
Restore
list.innerHTML =
localStorage.getItem("order");
Quick Revision Table
Question	Topic
Q31	getElementById vs querySelector
Q32	fired, fired
Q33	input vs change
Q34	target vs currentTarget
Q35	sessionStorage
Q36	Event Delegation
Q37	DOM Text Change
Q38	Virtual DOM
Q39	Form Validation
Q40	Drag & Drop

✅ Part 4 Complete

Send "Part 5" for Q41–Q50. 🚀

part 5
Part 5 (Q41–Q50) – Simple Answers & Code
Q41 localStorage Wrapper Class
class StorageHelper {

    set(key, value) {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    }

    get(key) {
        return JSON.parse(
            localStorage.getItem(key)
        );
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }
}

const store = new StorageHelper();

store.set("name", "Ram");

console.log(store.get("name"));
Output
Ram
Q42 Two Counters
HTML
<h2>Session Counter</h2>
<p id="sCount"></p>

<h2>Local Counter</h2>
<p id="lCount"></p>
JS
let s =
Number(sessionStorage.getItem("s")) || 0;

let l =
Number(localStorage.getItem("l")) || 0;

s++;
l++;

sessionStorage.setItem("s", s);
localStorage.setItem("l", l);

document.getElementById("sCount").textContent = s;

document.getElementById("lCount").textContent = l;
Result
Session Counter resets in new tab
Local Counter stays permanently
Q43 MutationObserver
const observer =
new MutationObserver(function(list){

    list.forEach(mutation => {

        mutation.addedNodes.forEach(node => {

            if(
                node.dataset &&
                node.dataset.track
            ){
                console.log(
                    "Tracked Node Added"
                );
            }

        });

    });

});

observer.observe(document.body,{
    childList:true,
    subtree:true
});
Stop Observer
observer.disconnect();
Q44 Image Gallery
HTML
<img id="big" src="1.jpg">

<button id="prev">Prev</button>
<button id="next">Next</button>
JS
const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

let index = 0;

function showImage(){
    big.src = images[index];
}

next.onclick = () => {
    index =
    (index + 1) % images.length;

    showImage();
};

prev.onclick = () => {
    index =
    (index - 1 + images.length)
    % images.length;

    showImage();
};
Q45 PubSub Module
function PubSub(){

    let events = {};

    return {

        subscribe(event, fn){

            if(!events[event]){
                events[event] = [];
            }

            events[event].push(fn);
        },

        publish(event, data){

            if(events[event]){

                events[event].forEach(fn =>
                    fn(data)
                );

            }

        },

        unsubscribe(event, fn){

            events[event] =
            events[event].filter(
                x => x !== fn
            );

        }

    };

}
Q46 DOM Traversal Utility
Siblings
function getSiblings(el){

    return [...el.parentNode.children]
    .filter(x => x !== el);

}
Ancestors
function getAncestors(el){

    let arr = [];

    while(el.parentElement){

        arr.push(el.parentElement);

        el = el.parentElement;
    }

    return arr;
}
Descendants
function getAllDescendants(el){

    return el.querySelectorAll("*");

}
Q47 Debounce & Throttle
Debounce
function debounce(fn, ms){

    let timer;

    return function(){

        clearTimeout(timer);

        timer = setTimeout(
            fn,
            ms
        );

    };

}
Example
window.addEventListener(
    "resize",
    debounce(() => {
        console.log("Resize");
    },300)
);
Throttle
function throttle(fn, ms){

    let allow = true;

    return function(){

        if(!allow) return;

        allow = false;

        fn();

        setTimeout(() => {
            allow = true;
        }, ms);

    };

}
Example
window.addEventListener(
    "mousemove",
    throttle(() => {
        console.log("Move");
    },500)
);
Q48 Keyboard Shortcut System
document.addEventListener(
"keydown",
function(e){

    if(e.ctrlKey && e.key==="s"){

        e.preventDefault();

        console.log("Saved!");
    }

    if(e.ctrlKey && e.key==="z"){

        console.log("Undo!");
    }

    if(e.key==="Escape"){

        console.log("Cancelled");
    }

});
Q49 Lazy Image Loader
HTML
<img
data-src="image.jpg"
class="lazy"
src="placeholder.jpg">
JS
const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const img =
            entry.target;

            img.src =
            img.dataset.src;

            observer.unobserve(img);
        }

    });

});

document
.querySelectorAll(".lazy")
.forEach(img => {

    observer.observe(img);

});
Q50 Dynamic Table
Data
const data = [
    {
        name:"Ram",
        age:20,
        city:"Delhi"
    },
    {
        name:"Shyam",
        age:22,
        city:"Jaipur"
    }
];
Table Creation
const table =
document.createElement("table");

data.forEach(person => {

    const row =
    document.createElement("tr");

    Object.values(person)
    .forEach(value => {

        const td =
        document.createElement("td");

        td.textContent = value;

        row.appendChild(td);

    });

    table.appendChild(row);

});

document.body.appendChild(table);
Quick Revision Table
Question	Topic
Q41	localStorage Wrapper
Q42	Session & Local Counter
Q43	MutationObserver
Q44	Image Gallery
Q45	PubSub Pattern
Q46	DOM Traversal
Q47	Debounce & Throttle
Q48	Keyboard Shortcuts
Q49	Lazy Loading Images
Q50	Dynamic Table

✅ Part 5 Complete (Q41–Q50)

Next, send "Part 6" for Q51–Q60. 🚀

part 6
Part 6 (Q51–Q60) – Simple Answers & Code
Q51 Top-Level Await
Code
const m = await import("./mod.js");

console.log(
    m.default,
    m.named
);
Works When

✅ File is ES Module

<script type="module" src="main.js"></script>

or

{
  "type":"module"
}
Error When

❌ Normal JavaScript file

Error
SyntaxError
Q52 Predict Output
try{
    eval("{{bad syntax{{");
}
catch(e){
    console.log(e.name);
}
Output
SyntaxError
Explanation

Invalid JavaScript syntax inside eval().

Q53 Predict Output
class HttpError extends Error {

    constructor(code){

        super("HTTP " + code);

        this.code = code;

        this.name = "HttpError";
    }

}

const e =
new HttpError(500);

console.log(
    e.message,
    e.stack.split("\n")[0]
);
Output
HTTP 500
HttpError: HTTP 500
Q54 ESM vs CommonJS
ESM
import x from "./a.js";
CommonJS
const x = require("./a.js");
Difference
ESM	CommonJS
import	require
Modern JS	Node.js old style
Live Binding	Copy Value
Static Loading	Dynamic Loading
Q55 Predict Output
const err =
new TypeError("bad type");

console.log(

    err instanceof TypeError,

    err instanceof Error,

    err instanceof RangeError

);
Output
true
true
false
Q56 Predict Output
const div =
document.createElement("div");

div.innerHTML =
'hi <scr' +
'ipt>alert(1)</scr' +
'ipt>';

console.log(
    div.textContent
);
Output
hi alert(1)
Explanation

textContent returns only text.

HTML tags are removed.

Q57 Capturing vs Bubbling
Code
parent.addEventListener(
"click",
() => console.log("capture"),
true
);

parent.addEventListener(
"click",
() => console.log("bubble"),
false
);


Q58
node.cloneNode(true);
node.cloneNode(false);



Q59
for(let i=0;i<100;i++){

    document.body.appendChild(
        document.createElement("div")
    );

}



Q60
el.classList.add(
    "text-red"
);



Q61
class PipelineError extends Error {
    constructor(step) {
        super(`Error at step ${step}`);
    }
}

function pipe(...fns) {

    return async function(value) {

        let result = value;

        for(let i=0; i<fns.length; i++) {

            try {
                result = await fns[i](result);
            }
            catch {
                throw new PipelineError(i);
            }

        }

        return result;
    };
}



Q62
async function tryCatch(fn, fallback) {

    try {
        return await fn();
    }
    catch {

        if(typeof fallback === "function"){
            return fallback();
        }

        return fallback;
    }
}



Q63
const config = {
    port: 3000,
    env: "dev"
};

export default config;

main.js
import a from "./config.js";
import b from "./config.js";

console.log(a === b);


Q64
math.js
export const PI = 3.14;

export default function add(a,b){
    return a+b;
}

main.js
import add, { PI }
from "./math.js";

console.log(add(2,3));
console.log(PI);


Q65
class KeyNotFoundError extends Error {}

class SafeMap {

    constructor() {
        this.map = new Map();
    }

    set(key,val) {
        this.map.set(key,val);
    }

    get(key, defaultVal) {

        if(this.map.has(key)){
            return this.map.get(key);
        }

        return defaultVal;
    }

    getOrThrow(key) {

        if(!this.map.has(key)){
            throw new KeyNotFoundError();
        }

        return this.map.get(key);
    }

    has(key){
        return this.map.has(key);
    }

    delete(key){
        this.map.delete(key);
    }
}




Q66
<div class="section">
    <h3>Title 1</h3>
    <p>Content 1</p>
</div>

<div class="section">
    <h3>Title 2</h3>
    <p>Content 2</p>
</div>



const titles =
document.querySelectorAll("h3");

titles.forEach(title => {

    title.onclick = () => {

        document
        .querySelectorAll(".section p")
        .forEach(p => {
            p.style.display = "none";
        });

        title.nextElementSibling
        .style.display = "block";
    };

});



Q67
class Modal {

    constructor(title, content){

        this.modal =
        document.createElement("div");

        this.modal.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
        <button>X</button>
        `;

        document.body.appendChild(
            this.modal
        );

        this.modal
        .querySelector("button")
        .onclick = () => {

            this.modal.remove();

        };
    }
} 


new Modal(
    "Hello",
    "Welcome User"
);


Q68
window.addEventListener(
"scroll",
() => {

    if(
        window.innerHeight +
        window.scrollY >=
        document.body.offsetHeight - 150
    ){

        console.log(
            "Load More Data"
        );

    }

});




Q69
class Router {

    constructor(){
        this.routes = {};
    }

    on(path, handler){
        this.routes[path] = handler;
    }

    navigate(path){

        history.pushState(
            {},
            "",
            path
        );

        this.routes[path]?.();
    }
}




Q70
function diff(oldNode,newNode){

    if(
        oldNode.textContent !==
        newNode.textContent
    ){

        oldNode.textContent =
        newNode.textContent;
    }

}


Q71
class Result {

    constructor(ok, value) {
        this.ok = ok;
        this.value = value;
    }

    static ok(value) {
        return new Result(true, value);
    }

    static err(error) {
        return new Result(false, error);
    }

    map(fn) {

        if (!this.ok) return this;

        return Result.ok(fn(this.value));
    }

    flatMap(fn) {

        if (!this.ok) return this;

        return fn(this.value);
    }

    getOrElse(defaultVal) {

        return this.ok
            ? this.value
            : defaultVal;
    }

    isOk() {
        return this.ok;
    }
}




Q72
a.js
import { b } from "./b.js";

console.log(b);

export const a = "A";

b.js
import { a } from "./a.js";

console.log(a);

export const b = "B";




Q73
const p =
new Promise((res, rej) => {

    try {
        throw new Error("sync");
    }
    catch(e) {
        rej(e);
    }

});

p.catch(e =>
console.log(
    "caught:",
    e.message
));


Q74
const a =
document.createElement("a");

a.href =
"javascript:void(0)";

a.click();

console.log(
    "after click"
);



Q75
<div id="toastBox"></div>
function showToast(msg){

    const div =
    document.createElement("div");

    div.textContent = msg;

    document
    .getElementById("toastBox")
    .appendChild(div);

    setTimeout(() => {

        div.remove();

    },3000);
}



Q76
const imports =
(code.match(/import/g) || [])
.length;



const exports =
(code.match(/export/g) || [])
.length;



const tryBlocks =
(code.match(/try/g) || [])
.length;



Q77
window.onerror = function(
msg,
url,
line,
col,
err
){

    console.log({
        type:"error",
        message:msg,
        time:new Date()
    });

};

Promise Errors
window.addEventListener(
"unhandledrejection",
e => {

    console.log(
        e.reason
    );

});



Q78
function addTask(text){

    const li =
    document.createElement("li");

    li.textContent = text;

    list.appendChild(li);


    Delete
li.remove();
Save
localStorage.setItem(
    "tasks",
    list.innerHTML
);
Restore
list.innerHTML =
localStorage.getItem("tasks");




Q79
document.addEventListener(
"mouseover",
e => {

    console.log(
        e.target.tagName
    );

});


Q80
class PluginManager {

    constructor() {
        this.plugins = {};
    }

    register(name, fn) {

        this.plugins[name] = fn;

    }

    run(name, ...args) {

        if(!this.plugins[name]) {

            throw Error(
            "Plugin Not Found"
            );

        }

        return this.plugins[name](
            ...args
        );
    }

    unregister(name) {

        delete this.plugins[name];

    }
}




Q81
class EventTargetPolyfill {

    constructor() {
        this.events = {};
    }

    addEventListener(type, callback) {

        if (!this.events[type]) {
            this.events[type] = [];
        }

        this.events[type].push(callback);
    }

    removeEventListener(type, callback) {

        this.events[type] =
        this.events[type].filter(
            fn => fn !== callback
        );
    }

    dispatchEvent(event) {

        if (!this.events[event.type]) return;

        this.events[event.type].forEach(fn => {
            fn(event);
        });
    }
}




Q82
<input id="search">

<ul id="list">
<li>Apple</li>
<li>Mango</li>
<li>Banana</li>
</ul>

search.addEventListener(
"input",
function(){

    const text =
    this.value.toLowerCase();

    document
    .querySelectorAll("li")
    .forEach(li => {

        if(
            li.textContent
            .toLowerCase()
            .includes(text)
        ){
            li.style.display = "";
        }
        else{
            li.style.display = "none";
        }

    });

});



Q83
function withErrorLogging(fn){

    return function(...args){

        try{

            return fn(...args);

        }
        catch(error){

            console.log({
                fnName: fn.name,
                args,
                error:error.message,
                timestamp:new Date()
            });

        }

    };

}


Q84
const div =
document.createElement("div");

div.addEventListener(
"click",
() => console.log(1)
);

const clone =
div.cloneNode(true);

document.body.append(clone);

clone.click();



Q85
function throws() {

    throw new RangeError(
        "out"
    );

}

try {

    throws();

}
catch(e){

    if(
        e instanceof TypeError
    ){
        throw e;
    }

    console.log(
        "range caught"
    );
}



Q86
Data
const data = [
 {name:"Ram", age:20},
 {name:"Shyam", age:25}
];
Sort
data.sort(
(a,b)=>
a.age-b.age
);
Render
data.forEach(item=>{

    console.log(
        item.name,
        item.age
    );

});




Q87
button.addEventListener(
"click",
async () => {

    await navigator
    .clipboard
    .writeText(
        "Hello World"
    );

    button.textContent =
    "Copied ✓";

    setTimeout(() => {

        button.textContent =
        "Copy";

    },2000);

});


Q88
class AsyncQueue {

    constructor() {

        this.queue = [];

        this.running = false;

    }

    async add(task){

        this.queue.push(task);

        if(!this.running){

            this.run();

        }

    }

    async run(){

        this.running = true;

        while(
            this.queue.length
        ){

            const task =
            this.queue.shift();

            try{

                await task();

            }
            catch(err){

                console.log(
                    err.message
                );

            }

        }

        this.running = false;
    }
}


Q89
const e =
new Error();

e.name = "Custom";

e.message = "msg";

console.log(`${e}`);




Q90
textarea.addEventListener(
"input",
function(){

    clearTimeout(
        window.timer
    );

    window.timer =
    setTimeout(()=>{

        localStorage.setItem(
            "draft",
            this.value
        );

    },1000);

});





Q91
c.js
console.log("C Loaded");
b.js
import "./c.js";

console.log("B Loaded");
a.js
import "./b.js";

console.log("A Loaded");



Q92
const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

let index = 0;

function showImage(){

    img.src = images[index];

    localStorage.setItem(
        "slide",
        index
    );
}

next.onclick = () => {

    index =
    (index + 1)
    % images.length;

    showImage();
};

prev.onclick = () => {

    index =
    (index - 1 + images.length)
    % images.length;

    showImage();
};




setInterval(() => {

    next.click();

},3000);





Q93
const container =
document.getElementById(
"container"
);

function render(start){

    container.innerHTML = "";

    for(
        let i=start;
        i<start+20;
        i++
    ){

        const div =
        document.createElement(
        "div"
        );

        div.textContent =
        "Item " + i;

        container.appendChild(
        div
        );
    }
}




Q94
function loadData(){

    try{

        throw Error(
        "Failed"
        );

    }
    catch{

        errorBox.innerHTML =
        `
        Error
        <button id="retry">
        Retry
        </button>
        `;

    }

}



Retry
document.addEventListener(
"click",
e => {

    if(
        e.target.id==="retry"
    ){

        loadData();

    }

});




Q95
const snapshots = [];

setInterval(()=>{

    snapshots.push(
        document.body.outerHTML
    );

    if(
        snapshots.length > 10
    ){

        snapshots.shift();

    }

},5000);



Undo
function undo(){

    if(
        snapshots.length
    ){

        document.body.outerHTML =
        snapshots.pop();

    }

}




Q96
class TypeMismatchError
extends Error {}


function typecheck(
schema,
data
){

    for(
        let key in schema
    ){

        if(
            typeof data[key]
            !== schema[key]
        ){

            throw new
            TypeMismatchError(
            key
            );

        }

    }

}





Q97
const observer =
new ResizeObserver(
entries => {

    entries.forEach(
    entry => {

        console.log(

        entry.contentRect.width,

        entry.contentRect.height

        );

    });

});



Start
observer.observe(box);
Stop
observer.disconnect();





Q98
document.body.innerHTML = "";

document.body.innerHTML =
'<div id=x></div>';

const el =
document.getElementById(
"x"
);

document.body.innerHTML =
'<div id=x></div>';

el.textContent = "hi";

console.log(

document.getElementById(
"x"
).textContent

);





Q99
class Validator {

    constructor(){

        this.rules = [];

    }

    minLength(n){

        this.rules.push(
        str =>
        str.length >= n
        );

        return this;
    }

    validate(str){

        return this.rules
        .every(
        fn => fn(str)
        );

    }

}






Q100
Notes Array
let notes = [];
Add Note
function addNote(text){

    notes.push({
        id:Date.now(),
        text:text
    });

    save();
}
Delete Note
function deleteNote(id){

    notes =
    notes.filter(
    n => n.id !== id
    );

    save();
}
Save
function save(){

    localStorage.setItem(
        "notes",
        JSON.stringify(
            notes
        )
    );

}
Load
notes =
JSON.parse(

localStorage.getItem(
"notes"
)

) || [];