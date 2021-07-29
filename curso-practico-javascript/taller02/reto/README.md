# Implementación de descuentos para cupones

## Tabla de Contenido

[Objetivo](#objetivo)

[Resolución](#resolución)

+ [Input](#input)

+ [Process](#process)

+ [Output](#output)

## Objetivo

"Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones".

## Resolución

### Input

+ Precio
+ Selección de cupón

### Process

Solamente detallo el proceso en JS, ya que el HTML es súper sencillo. Solo me aseguré de asignar correctamente un `value="name-of-value"` a cada `option` del elemento `select`.
1. En primer lugar, me aseguré de obtener el precio ingresado por el usuario, utilizando el método `getElementById`. Al comienzo lo declaré como variable global pero nunca corrió. Solamente corrió cuando lo declaré dentro del `addEventListener` que usé para seleccionar el cupón. También tuve que agregarle el método `parseInt` para que no me devuelva un `NaN`. Me tomó harto tiempo y muchos `console.log()` extraer esta data correctamente 😅.

    ```js
    const price = parseInt(document.getElementById('inputPrice').value);
    ```
2. Asigné el elemento `#selectCoupon` a la variable `selection` para poder extraer el valor de cada `option`.
3. Creé la variable `result` la cual se usará para renderizar el resultado final. Esta variable se conectará vía DOM con el `div#result` del HTML.
4. La primera función que creé fue la que iba a renderizar el resultado final: `renderNewPrice(finalPrice)`. Personalmente, se me hace más sencillo empezar por lo que se va a mostrar para dejar al último la parte algorítimica y de extracción de datos. Esta función tiene como parámetro el precio final a pagar, el cual retorna desde la función `calcFinalPrice(price, discount)`.
5. Después creé la función `calcFinalPrice(price, discount)`, con dos parámetros: `price` y `discount`. `price` ya fue obtenido en el paso 1, y `discount` se obtiene de la función `getDiscount(coupon)`. Esta función se encarga de aplicar el descuento al precio ingresado por el usuario.
6. Enseguida creé la función `getDiscount(coupon)` la cual se encarga de seleccionar qué descuento se debe hacer en función al cupón seleccionado. Recibe como parámetro `coupon` y utilicé un sencillo control condicional `switch`.
7. Este fue el paso más complicado y me tomó un par de días resolverlo. Debo mencionar que [este video](https://youtu.be/s0c36oh8I-I) de [@prof3ssorSt3v3](https://github.com/prof3ssorSt3v3) me ayudó a entender cómo hallar la solución. Una vez creadas todas mis funciones me dediqué a extraer el `value` de cada `option` (ver paso 2). Para ello creé un `addEventListener` sobre `selection` y me valí de la propiedad `target` para poder extraer `value`. Una vez hecho esto lo demás fue sencillo, solamente hacer callbacks a mis funciones ya creadas.
    ```js
    selection.addEventListener('input', (e) => {
      const price = parseInt(document.getElementById('inputPrice').value);
      let coupon = e.target.value;
      let discount = getDiscount(coupon);
      let finalPrice = calcFinalPrice(price, discount);
      renderNewPrice(finalPrice);
    });
    ```

### Output

+ Mostrar el precio con el descuento realizado