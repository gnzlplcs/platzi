# Anotaciones

## Acerca de

Anotaciones y ejercicios del Curso de Closures y Scope en JavaScript, del profe Oscar Barajas ([gndx](https://github.com/gndx)).

## Anotaciones

### Scope

El *scope* se define como el alcance que tiene una variable dentro del código, a qué bloques de código va a acceder una variable. Hay *scope local* y *scope global*.

#### Scope Global

Cuando se declaran variables de forma global, se puede acceder a estas incluso dentro de cualquier bloque (ver [global.js](/scope/global.js)).

Si se decrara una variable de forma global, se podrá acceder a ella desde cualquier bloque del código. Es posible reasignar la variable `var`, pero es una mala práctica. Cuando se usan variables `let` o `const` no se puede reasignar.
```
SyntaxError: Identifier 'world' has already been declared
```
También se puede declarar sin `var`, `let` o `const`, pero también constituye una mala práctica.