const fruits = () => {
  if (true) {
    var fruit1 = 'apple'; // se puede acceder fuera del bloque
    let fruit2 = 'banana';
    const fruit3 = 'kiwi';
  }
  console.log(fruit1); // apple
  console.log(fruit2); // ReferenceError
  console.log(fruit3); // ReferenceError
}

fruits();

var x = 1;
{
  var x = 2;
  console.log(x);
}
console.log(x);

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);

  }
}

anotherFunction();