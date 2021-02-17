let myName = "Rishabh";
const nosUS = 52;
var testAdd = 5 + 4; //result of addition is stored in testAdd variable.
function sayHello() {
    alert("Hello World!");
}
sayHello();
function checkAge(name,age) {
    if(age<21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge('Charles',21);
checkAge('Abby',27);
checkAge('James',18);
checkAge('John',17);

var favVegi = ['Potato','Tomato','Onion'];

for(let i=0;i<favVegi.length;i++) {
    console.log(favVegi[i]);
}

let pet = {
    name: 'Tommy',
    breed: 'Bulldog'
};

console.log("Pet name: " +pet.name+ " Pet breed: "+pet.breed);

let civilgang = [
    {
        name:'Aryan Bhatt',
        age:22
    },
    {
        name:'Anirudha Uttarwar',
        age:20
    },
    {
        name:'R B Suraj',
        age:18
    },
    {
        name:'Nishan Jain',
        age:23
    },
    {
        name:'Pramod',
        age:21
    }
];

for(let i=0;i<civilgang.length;i++)
{
    checkAge(civilgang[i].name,civilgang[i].age);
}

function getLength(word) {
    return word.length;
}

var evOdd = getLength('Hello World');
if(evOdd % 2 == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}