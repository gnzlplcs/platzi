const fruits = () => {
  var fruit = 'apple';
  console.log(fruit);
}

fruits(); // apple
console.log(fruit); // ReferenceError: fruit is not defined

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  let y = 2;
  console.log(x); // 2 / var sí reasigna una variable
  console.log(y); // SyntaxError: Identifier 'y' has already been declared
}

anotherFunction();