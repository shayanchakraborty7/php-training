console.log("Javascript");
let user = prompt("Enter something: ");
document.write(user);

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
const add = (a,b)=>document.write(a+b);
add(a,b);

const newobject = {
    a : "hello",
    b : 500,
    c: 99.5
}

console.log(newobject);
console.log(typeof newobject);

let copy_newobject = newobject;
console.log(copy_newobject,typeof copy_newobject);

let infinity = 1/0;
console.log(infinity);

let sym = Symbol("This is a symbol @@ #");
console.log(sym);
console.log(typeof sym);


const myphone = {
    Model:"Apple iPhone 15 pro max",
    Color: "Space Grey",
    Price: "1,70,000",
    Warranty: "As you like"
}

const arr = [true, 12, "hello"];

console.log(myphone);
console.log(arr);

const target = {
    Name : "Shayan",
    Age : 20,
    City : "Kolkata",
    Ip :  "103.193.90.211",
}

console.log(target);
target["row"] = 12;
console.log(target);

