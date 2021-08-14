var hello = 'Hello';
let world = 'Hello World'
let world = 'any message'
const helloWorld = 'Hello Wordl!!'

const anotherFunction = () => {
  console.log(hello, world, helloWorld);
}

anotherFunction()

// declara una variable sin su palabra reservada es una mala práctica
const anotherFunction2 = () => {
  globalVar = 'Hello from another function 2';
  console.log(globalVar)
}

anotherFunction2()
console.log(globalVar)

const anotherFunction3 = () => {
  let localVAr = globalVar = "Hello from global";
}

console.log(anotherFunction3())
console.log(globalVAr)