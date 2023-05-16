function Person1( name, age ) {
  const person = {}

  person.name = name;
  person.age = age;

  person.eat = function(){
    console.log(`${person.name} is eatting.`);
  }

  person.sleep = function(){
    console.log(`${person.name} is sleeping.`);
  }

  person.play = function(){
    console.log(`${person.name} is playing.`);
  }

  return person;
}

let person1 = Person1( 'Tamim', 27 );
// console.log(person1);





// function Player( name, age ) {

//   this.name = name;
//   this.age = age;

// }

// Player.prototype = {
//   play: function() {
//     return `${this.name} am playing`;
//   },

//   eat: function() {
//     return `${this.name} am eatting.`;
//   }
// }

// const sakib = new Player( 'Sakib', 30 );
// // console.log(sakib.play());

// const tamim = new Player( 'Tamim', 30 );
// console.log(tamim);


/**
 * Set Master Object Prototype Method
 */
Object.prototype.creator = function() {
  return `Creator Name: Shakib`;
}
// console.log(Object.prototype);




/**
 * Prototype performe as like Object Oriented Class
 * 
 * There will be connecting between 2 function with Object.create() function
 */
function Person(name, age) {

  // Performe like Parent Class

  this.name = name;
  this.age = age;

}

Person.prototype = {
  eat: function() {
    return `${this.name} is eating.`;
  }
}

function Cricketer(name, age, type, country) {

  // Perform like Sub Class

  Person.call(this);
  this.name = name;
  this.age = age;
  this.type = type;
  this.country = country;

}

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;

Cricketer.prototype.play = function() {
  return `${this.name} is playing`;
}

let tamim = new Cricketer('Tamim', 35, 'Batsman', 'Bangladesh');
console.log(tamim);

let shakib = new Person('Shakib', 27);
// console.log(shakib.eat());