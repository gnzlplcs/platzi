const lista1 = [1,1,2,2,3,3,3,5,4,4,4,5,8,7,6,9];
const lista1Count = {};

function getMode(list) {
  let listCount = {};
  list.map(
    function (el) {
      if (listCount[el]) {
        listCount[el] += 1;
      } else {
        listCount[el] = 1;
      }
    }
  );

  const listArray = Object.entries(listCount).sort((acc, value) => acc[1] - value[1]);
  const mode = listArray[listArray.length - 1];
  return mode;
}



