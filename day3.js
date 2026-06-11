// Q1 
// Ek student object banao jisme: 
// ● name 
// ● age 
// ● city 
// Store ho.
// ans=>
    const student = {
    name: "Shanny",
    age: 20,
    city: "Delhi"
};

console.log(student);




// Q2 
// Upar wale object ka name print karo.
// ans=>

    console.log(student.name)




// Q3



const student = {
    name: "Ram",
    age: 20,
    city: "Delhi",

    greet: function() {
        console.log("Hello I am Ram");
    }
};

student.greet();


// Q4



const student = {
    name: "Rohan",
    age: 15,

    isAdult: function() {
        if (this.age >= 18) {
            console.log("Adult");
        } else {
            console.log("Not Adult");
        }
    }
};

student.isAdult();




// Q5


const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

console.log(Object.keys(student));



// Q6


const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

console.log(Object.values(student));



// Q7


const student = {
    name: "Ram",
    age: 20,
    city: "Delhi",
    email: "ram@gmail.com"
};

console.log(student.name);         
console.log(student.age);           
console.log(student.city);        

console.log(Object.keys(student));  
console.log(Object.values(student)); 

console.log("email" in student);   




// Q8

const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

// New property add karna
student.course = "MERN";

console.log(student);






// Q9


const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

delete student.age;

console.log(student);



// Q10


const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

const cloneStudent = { ...student };

console.log(cloneStudent);





// Section B: this Keyword (11–15)



// Q11


const student = {
    name: "Ram",

    showName() {
        console.log(this.name);
    }
};

student.showName();





// Q12


const student = {
    name: "Ram",

    showUpper() {
        console.log(this.name.toUpperCase());
    }
};

student.showUpper();




// Q13



const account = {
    balance: 1000,

    deposit(amount) {
        this.balance += amount;
    },

    withdraw(amount) {
        this.balance -= amount;
    }
};

account.deposit(500);
account.withdraw(200);

console.log(account.balance);




// Q14


const user = {
    name: "Ram",
    show() {
        console.log(this.name);
    }
};

user.show();





// Q15



const user = {
    name: "Ram",
    show: () => {
        console.log(this.name);
    }
};

user.show();




// Section C: Constructor Functions (16–20)


// Q16


function Student(name, age) {
    this.name = name;
    this.age = age;
}



// Q17


function Student(name, age) {
    this.name = name;
    this.age = age;
}

const s1 = new Student("Ram", 20);
const s2 = new Student("Shyam", 21);
const s3 = new Student("Mohan", 22);

console.log(s1);
console.log(s2);
console.log(s3);





// Q18


function Student(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {
        console.log("Hello I am " + this.name);
    };
}

const s1 = new Student("Ram", 20);

s1.greet();





// Q19


function User(name){
    this.name = name;
}

const u1 = new User("Ram");

console.log(u1.name);




// Q20



function Car(brand, price) {
    this.brand = brand;
    this.price = price;
}

const car1 = new Car("BMW", 5000000);

console.log(car1);




// Section D: Prototype (21–28)




// Q21



function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.greet = function() {
    console.log("Hello I am " + this.name);
};

const s1 = new Student("Ram", 20);

s1.greet();






// Q22


function Student(name, age) {
    this.name = name;
    this.age = age;
}

const obj = new Student("Ram", 20);

console.log(obj.__proto__ === Student.prototype);





// Q23


function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.isAdult = function() {
    console.log(this.age >= 18);
};

const s1 = new Student("Ram", 20);

s1.isAdult();






// Q24


function User(){}

User.prototype.sayHi = function() {
    console.log("Hi");
}

const u1 = new User();

u1.sayHi();





// Q25


function User(){}

User.prototype.course = "MERN";

const u1 = new User();

console.log(u1.course);





// Q26



u1.hasOwnProperty("course")




// Q27


"course" in u1





// Q28

console.log(arr.__proto__ === Array.prototype);




// Section E: Object.create() (29–32)



// Q29


const animal = {
    eat() {
        console.log("Eating");
    }
};

animal.eat();





// Q30


const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);

dog.eat();





// Q31


const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);

dog.bark = function() {
    console.log("Barking");
};

dog.eat();
dog.bark();





// Q32


const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);

dog.eat();




// Section F: Classes (33–36)





// Q33


class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}






// Q34



class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello I am " + this.name);
    }
}

const s1 = new Student("Ram", 20);
s1.greet();




// Q35


class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isAdult() {
        console.log(this.age >= 18);
    }
}

const s1 = new Student("Ram", 20);
s1.isAdult();




// Q36



class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello I am " + this.name);
    }
}

const s1 = new Student("Ram", 20);
const s2 = new Student("Shyam", 21);
const s3 = new Student("Mohan", 22);

console.log(s1);
console.log(s2);
console.log(s3);





// Section G: Inheritance (37–40)



// Q37
class Animal {
    eat() {
        console.log("Eating");
    }
}




// Q38


class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {

}




// Q39




class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}






// Q40


class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}

const d = new Dog();

d.eat();
d.bark();




















