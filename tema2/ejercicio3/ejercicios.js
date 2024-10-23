//a. Crea un array “datos” vacío con un literal.
let datos = [];
//b. Añade a “datos” los números del 1 al 50 con un bucle for.
for(let i = 0; i>=50; i++){
    datos.push(i);
}
//c. Elimina los elementos del 25 al 50 asignando un nuevo tamaño a la propiedad length.
datos.length = 24;
// d. Usa el operador spread para hacer una copia del array anterior.
let datosCopia = [datos];
//e. Crea un array de tamaño 50 con el constructor Array.
const arrayTamano50 = new Array(50);
//f. Copia el array anterior a otro con la factoría from.
const copiArrayTamano50 = Array.from(arrayTamano50);
//g. Crea un array multidimensional de 10 filas (i) y 10 columnas (j). Inicializa cada celda con el valor i*j 
const matriz10x10 = Array(10).fill().map(() => Array(10).fill);
//h. Crea un array con la factoría of con los números del 1 al 5. Después, añade un elemento en la
//posición 10 y otro en la 50. Recorre el array con un for imprimiendo los valores, y después con
//forEach. ¿Cuál es la diferencia? ¿Cuál es el tamaño del array?
let arrayH = Array.of(1, 2, 3, 4, 5);
arrayH[10] = 10;
arrayH[50] = 50;
for (let i = 0; i < arrayH.length; i++) {
console.log(arrayH[i]);
}
arrayH.forEach((value) => console.log(value));
// i. Elimina dos elementos con delete.
delete arrayH[5];
delete arrayH[4];
//j. Calcula el producto de todos los números del array “datos” con forEach.
datos.forEach((valor) => {multiplicar *= valor;});
//k. Cada elemento x del array “datos” debe cambiarse por x*x. Usa forEach.
datos.forEach((value, index) => {
datos[index] = value * value;
});
//l. Crea un nuevo array con map recorriendo cada elemento x de “datos”, donde cada elemento
//sea un string “El valor es: x”. Usa template strings.
