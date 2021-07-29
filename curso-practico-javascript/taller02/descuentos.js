
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDecuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDecuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById('InputPrice').value;
  const inputDiscount = document.getElementById('InputDiscount').value;

  const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);

  document.getElementById('ResultP').innerHTML = `El precio con descuento es ${precioConDescuento}`;
}