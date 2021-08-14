const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
}

helloWorld(); // 'Hello World'

console.log(hello); // ReferenceError: hello is not defined

// Ámbito local
var scope = "I'm global";

const functionScope = () => {
  var scope = "I'm just a local scope"; // esto representa un valor local
  const func = () => {
    return scope;
  }
  console.log(func());
}

console.log(scope);
functionScope();