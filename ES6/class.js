class Person {

  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  eat(){
    return `${this.name} is eating normal food!`;
  }

}


class Cricketer extends Person {

  constructor(name, age, type, country){
    super(name, age);

    this.type = type;
    this.country = country;
    this.language = 'en';
  }

  // This is an example of Polymorphism
  eat(){
    return `${this.name} is eating special food!`;
  }

  play(){
    return `${this.name} is playing.`
  }

  get lang(){
    return this.language;
  }

  set lang(lang){
    this.language = lang;
  }

  static isEqualAge(cricketer1, cricketer2){
    return cricketer1.age === cricketer2.age;
  }

}

let sakib = new Person('Sakib', 30);
console.log(sakib.eat());

let tamim = new Cricketer('Tamim', 30, 'Batsman', 'Bangladesh');
tamim.lang = 'BN';
console.log(tamim.lang);
console.log(tamim.eat());
console.log(Cricketer.isEqualAge(sakib, tamim));