//b. Dado un array de números, desestructura los números en posiciones impares.
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primero, segundo, tercero, cuarto, quinto, sexto, septimo, octavo, noveno] = numero;
const numerosPares = [segundo, cuarto, sexto, octavo];
const numerosImpares = [primero, tercero, quinto, septimo, noveno];
console.log(numerosImpares);