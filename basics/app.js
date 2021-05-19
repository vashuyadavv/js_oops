//Object literal or OBJECT  //Complex Data type
// const person={
//     name: 'Dexter',
//     job: 'Spatter Analyst'
// }
// console.log(person);

//JS OOPS
//Person constructor
// function Person(){
//     this.name = 'Dexter';
// }                            //name is hard coded here. 
                                //Doesn't matter how many objects you create, name will always be dexter
// const obj = new Person();
// console.log(obj);

// function Alias(alias, age, dob){
//     this.alias = alias;
//     this.age=age;
//     this.birthday=new Date(dob);
//     this.calAge=function(){
//         const diff=Date.now() - this.birthday.getTime();
//         return Math.abs(new Date(diff).getUTCFullYear()-1970);
        
//    }
//}                               //Can create new objects with diff name
// const john = new Alias('john', 23, 'March 04 1998');
// console.log(john.calAge());


//BUILT-IN CONSTRUCTORS

//String
//const name1='Dex';
//const name2=new String('Dex');
//name2.foo='bar';  //Can add properties
//console.log(typeof name2); //will return object
//console.log(typeof name1);  //will return string
// if (name2 === 'Dex') {
//     console.log('YES');
// } else {
//     console.log('NO');
// }

//console.log(name2);

//Number
// const num1=3;
// const num2=new Number(3);
// console.log(typeof num1);   //will return number
// console.log(typeof num2);   //will return object

//Boolean
// const bool1=true;
// const bool2=new Boolean(true);

// console.log(typeof bool1);   //will return boolean 
// console.log(typeof bool2);   //will return object


//PROTOTYPES
//Each object in js has prototype and a prototype is an object itself
//All  objects inherit their properties and methods from their prototype

//Object.protoytpe
//Person.prototype

// function Person(firstName, lastName, dob) {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.birthday=new Date(dob);
    // this.calculateAge= function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() -1970);
    // }
//}

//Moving calculate age into person.prototype
// Person.prototype.calculateAge=function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() -1970);
// }

//Get full name
// Person.prototype.getFullName=function(){
//     return `${this.firstName} ${this.lastName}`;
// }

//Gets married
// Person.prototype.getsMarried=function(newLastName){
//     this.lastName=newLastName;
// }
// const dex = new Person('Dextor' ,'Morgan', '8-12-97');
// const john = new Person('John' ,'Doe', 'March 4 1998');

// console.log(dex);
// console.log(dex.calculateAge());
// console.log(dex.getFullName());
// john.getsMarried('wick');
// console.log(john.getFullName());

// console.log(john.hasOwnProperty('lastName'));
// console.log(john.hasOwnProperty('getFullName'));

//PROTOTYPAL INHERITANCE
//Person constructor
// function Person(firstName, lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
// }

//Greeting
// Person.prototype.greeting=function(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

//const person1 = new Person('Dexter', 'Morgan');
// console.log(person1.greeting());

//Customer constructor
// function Customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName);
//     this.phone=phone;
//     this.membership=membership;
// }

//Inherit the Person prototype methods
//Customer.prototype=Object.create(Person.prototype);

//Make customer.prototype return Customer()
//Customer.prototype.constructor=Customer;

//Create customer
// const customer1=new Customer('Thomas', 'shelby', '555-222-1010', 'Standard');
// console.log(customer1);
// Customer.prototype.greeting=function(){
//     return `Hello there ${this.firstName} ${this.lastName}.Welcome`;
// }
// console.log(customer1.greeting());

//OBJECT.CREATE
// const personPrototypes = {
//     greeting: function(){
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsNewLastName: function(newLastName){
//         this.lastName=newLastName;
//     }
// }

// const john = Object.create(personPrototypes);
// john.firstName = 'John';
// john.lastName = 'Doe';
// john.age = 27;
//john.getsNewLastName('Snow');   //Will override the lastName
// console.log(john);
// console.log(john.greeting());


//Another way 
// const constantine = Object.create(personPrototypes,{
//     firstName: {value: 'John'},
//     lastName: {value: 'Constantine'},
//     job: {value: 'hunting'}
// });

// console.log(constantine);
// console.log(constantine.greeting());


//ES-6 way  //classes and objects

// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.birthday=new Date(dob);
//     }
//     greeting(){
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }
//     calculateAge(){
//         const diff = Date.now()-this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
//     getsNewName(newFirstName, newLastName){
//         this.firstName=newFirstName;
//         this.lastName=newLastName;
//     }
    //static modulusNumbers(x,y){
        //return x % y;  //Modulus gives the remainder
    //}    
//}

//console.log(Person.modulusNumbers(10, 2));
// const john=new Person('John', 'Constantine', '12-12-12');
// console.log(john);
// console.log(john.greeting());
// console.log(john.calculateAge());
// john.getsNewName('Dexter', 'Morgan');
// console.log(john);


//SUBCLASSES
// class Animal {
//     constructor(type, color, sound){
//         this.type = type;
//         this.color = color;
//         this.sound = sound;
//     }

//     noise(){
//         return `I  make a sound of ${this.sound}`;
//     }
// }

// class Wolf extends Animal{
//     constructor(sound, color, type, size){
//         super(type,color,sound);
//         this.size=size;
//         //you can also create static methods here and use them without instantiating the objects
//     }
// }

// const wolfie = new Wolf('howl', 'white', 'hostile', 'big');
// console.log(wolfie);
// console.log(wolfie.noise());