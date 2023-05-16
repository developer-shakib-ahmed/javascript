// function number() {
//   return 10;
// }

// const number = () => 10;

// const number = (a, b) => a + b;

// console.log( number(1, 4) );

const JavaScript = {
  name: 'JavaScript',
  libraries: [ 'React', 'Angular', 'Vue' ],
  print: function() {
    this.libraries.forEach(( a ) => {
      console.log( `${this.name} Loves ${a}` );
    });
  }
};

JavaScript.print();
