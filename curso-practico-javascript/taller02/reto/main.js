// Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.
let selection = document.getElementById('selectCoupon');
let result = document.querySelector('#result');

selection.addEventListener('input', (e) => {
  const price = parseInt(document.getElementById('inputPrice').value);
  let coupon = e.target.value;
  let discount = getDiscount(coupon);
  let finalPrice = calcFinalPrice(price, discount);
  renderNewPrice(finalPrice);
});

function getDiscount(coupon) {
  let result = 0;
  switch(coupon) {
    case 'c01':
      result += 0.9;
      break;
    case 'c02':
      result += 0.85;
      break;
    case 'c03':
      result += 0.75;
      break;
    default:
      result += 1;
  }
  return result;
}

function calcFinalPrice(price, discount) {
  let result = price * discount;
  return result;
}

function renderNewPrice(finalPrice) {
  result.innerHTML = `El precio a pagar es $${finalPrice.toFixed(2)}`
}