// const moneyBox = (coins) => {
//   var saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5); // MoneyBox: $5
// moneyBox(10); // MoneyBox: $10 / no está sumando

const moneyBox = (coins) => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);