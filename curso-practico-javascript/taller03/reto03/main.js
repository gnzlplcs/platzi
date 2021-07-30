function getHarmonicMean(list) {
  let inverseList = getInverseList(list);
  let sum = inverseList.reduce((acc = 0, el) => acc + el);
  let harmonicMean = (list.length / sum).toFixed(2);
  return Number(harmonicMean);
}

function getInverseList(list) {
  let newList = [];
  newList = list.map(e => Math.pow(e, -1));
  return newList;
}