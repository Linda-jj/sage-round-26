document.getElementById("demo").innerText="Hello from JavaScript";
document.getElementById("demo").innerHTML="<h2>Hello World</h2>";
// document.getElementById("demo").style.color="red";
function sumTwoNum(x,y){
    console.log(x+y);
}
function AveTwoNum(x,y){
    console.log((x+y)/2)
}

// let x=20;
// let y=30;

// console.log(x+y);
sumTwoNum(20,30);
AveTwoNum(20,30);
// document.getElementById("demo").innerText=x+y;

var person ={
    firstName:"Lideya",
    lastName:"Fekadu",
    age:33,
    gender:"F",
    address :{
        country:"Ethipia",
        city:"A.A",
        subCiyt:"Bole",
        woreda:"13"
    }
}

console.log(person.firstName);
console.log(person.address);
console.log(person.address.woreda);
console.log(person.age);

function cahngeColor(){
    document.getElementById('demo').style.color="hotpink";
}

var names= " Ababa's ";
console.log(names);
console.log(names.trim());
console.log(names.toLocaleUpperCase());
console.log(names.slice(2,7));
console.log(names.length);
console.log(names.concat("kebede"));
console.log(names.at(7));
// array
let ary=["ababe", "kebede", "lideya", "astide","18"];
ary.push="Fikadu";
ary.pop();
ary.pop();

console.log(ary);
console.log(ary[3]);
console.log(ary);

let date= new Date();
let oldDate= new Date("2023-1-12");
console.log(date)
console.log(oldDate)
//maths

console.log(Math.pow(23.90))
console.log(Math.round(4.56))
let num= 23e5;
console.log(num)

console.log(!false)
console.log(1==="1")
console.log(true & false)
console.log(true || false)

let zz= 10<5 ? 100:50
console.log(zz)


let age 
console.log(age?? "age is not found")

let numbers= [1,2,3,56,678,9,67];

for(let number of numbers){
    console.log('the number', ": ", [number])
}


for (let key in person){
    console.log(key ,": ", person [key]);
}





















    















    