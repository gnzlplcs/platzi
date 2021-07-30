const salariosPe = peru.map(e => e.salary);
const salariosPeSorted = salariosPe.sort((a,b) => a - b);

// Helpers
function isEven(n) {
  return n % 2 === 0;
}

function getMean(list) {
  const sum = list.reduce(
    function (acc = 0, value) {
      return acc + value;
    }
  );
  const average = sum / list.length;
  return average;
}


// Cálculo de mediana de salarios
function medianaSalarios(list) {
  const half = parseInt(list.length / 2);
  if (isEven(list.length)) {
    const halfEl1 = list[half - 1];
    const halfEl2 = list[half];
    const mean = getMean([halfEl1, halfEl2]);
    return mean;
  } else {
    const halfEl = list[half];
    return halfEl;
  }
}


// Mediana top 10%
const spliceStart = (salariosPeSorted.length * 90) / 100;
const spliceCount = salariosPeSorted.length - spliceStart;
const salariosTop10 = salariosPeSorted.splice(spliceStart, spliceCount);

console.log(getMean(salariosTop10))


const medianaGeneralPe = medianaSalarios(salariosPeSorted);