const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);

  }
}

anotherFunction();

// siempre se debe inicializar un loop con let, no on var
