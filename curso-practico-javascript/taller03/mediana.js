const anyList = [200, 3, 100, 550, 700, 9, 600, 400, 4000];

function getMedian(list) {
  let median;
  const halfList = parseInt(list.length / 2);
  let sortedList = sortList(list);
  console.log(sortedList)
  let evenList = isEven(sortedList.length);

  if (evenList) {
    const el1 = list[halfList - 1];
    const el2 = list[halfList];
    const meanElements = getMean([el1, el2]);
    median = meanElements;
  } else {
    median = list[halfList];
  }
  console.log(median);
}

function sortList(list) {
  let result = list.sort((a, b) => a - b);
  return result;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function getMean(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

getMedian(anyList)