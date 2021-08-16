a = 2;
var a ;
console.log(a); // 2

console.log(a); // undefined
var a ;

// JavaScript utiliza el hoisting en declaraciones pero no en inicializaciones

nameOfDog('Elmo');
function nameOfDog(name) {
  console.log(name);
}

// El motor de JS compila antes de ser interpretado, por eso se elevan las funciones y pueden ser invocadas desde cualquier lugar del códgio