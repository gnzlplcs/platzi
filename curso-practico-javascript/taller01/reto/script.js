function finalHeight() {
  const sides = parseInt(document.getElementById("sides").value);
  const base = parseInt(document.getElementById("base").value);
  let heightFromBase = calcHeightFromBase(sides, base);
  let heightFromSide = calcHeightFromSide(sides, base);
  document.getElementById(
    "result"
  ).textContent = `La altura desde la base es ${heightFromBase.toFixed(
    2
  )} cm y a altura desde el lado es ${heightFromSide.toFixed(2)} cm`;
}

function calcHeightFromBase(a, b) {
  return Math.sqrt(Math.pow(a, 2) - Math.pow(0.5 * b, 2));
}

function calcHeightFromSide(a, b) {
  return (2 * calcArea(a, a, b) / a);
}

function calcArea(a, b, c) {
  return (
    0.25 * Math.sqrt((a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c))
  );
}