//Objects
//collection of  realted data and/or functionlally
var user={
    "name":"rahul",
    "age":22,
    "contact":9315,
    "email":"aman@gmail.com"
}

console.log(user.name);
console.log(user);

//printing all the values in 1 way
for (var key in user) {
    console.log(user[key]);
}

//JS object is a non primitive and allows you to store multiple collection of data

//obj using constructor
//we can create obj using function constructoer & class contructor
//both class and functipn constructor returns an empty onject
//"this" kyword will will used

//create using function constructor

function car(make,model,year)
{
    this.make=make
    this.model=model
    this.year=year
}
var car1=new car("Eagle","Talon TSi",1993)
for (var key in car1) {
    console.log(car1[key]);
}

class rectangle
{
    constructor(h,w)
    {
        this.h=h
        this.w=w
    }
}
var rect=new rectangle(10,15)
console.log(rect);

//spread operator
var str="abcdefghi"
console.log(...str);

//using spread oprator you can show th details inside another object as it returns its shallow copy
var body=
{
    "height":160,
    "weight":54
}
var person=
{
    ...body,
    "name":"Aman"
}

for (var key in person) {
    console.log(person[key]);
}
console.log(Object.values(person));

//create a obj using function and class constructor both and give 2 properties to it name and age
class prsn
{
    constructor(name, age)
    {
        this.name=name;
        this.age=age;
    }
}
function p(name,age)
{
    this.name=name;
    this.age=age
}
var p1=new prsn("Aman",22)
console.log(p1);
var p2=new p("Aman",22)
console.log(p2);
