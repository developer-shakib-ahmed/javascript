/**
 * Tagged template literals
 */


function modifier (strings, ...values) {
  
  const modified = strings.reduce(( prev, current ) => {

    return prev + current + (values.length ? 'Mr. ' + values.shift() : '')

  }, '');

  return modified;

}

let player1 = 'Shakib';
let player2 = 'Tamim';

console.log(modifier`We have ${player1} and ${player2} in our cricket team.`);