const lista1 = [100, 200, 300, 500];

function calcMediaAritmetica(lista) {

  // Usando for loop
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }

  // Usando reduce
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista1 = sumaLista / lista.length;
  return promedioLista1;
}