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
console.log("Eliminados 5 y 4")
//j. Calcula el producto de todos los números del array “datos” con forEach.
datos.forEach((valor) => {multiplicar *= valor;});
//k. Cada elemento x del array “datos” debe cambiarse por x*x. Usa forEach.
datos.forEach((value, index) => {
datos[index] = value * value;
});
//l. Crea un nuevo array con map recorriendo cada elemento x de “datos”, donde cada elemento
//sea un string “El valor es: x”. Usa template strings.
const cadenaString = [2,22,222,2222];
cadenaString.map((x)) = ('El valor es : + ${x}');
//m. Crea un nuevo array mediante map que incremente cada elemento de “datos” en 5 unidades.
let incrementadoArray = datos.map((x) => x + 5);
//n. Mediante filter, quédate con los números impares en un nuevo array impares.
let impares = datos.filter((x) => x % 2 !== 0);
// o. Usa find para buscar el número 13.
let numero13 = datos.find((x) => x === 13);
//p. Usa every para comprobar si todos los números son positivos.
const positivos = datos.every((valor) => valor > -1);
//q. Calcula la sumatoria del array “datos” mediante reduce.
let sumatoria = datos.reduce((acc, value) => acc + value, 0);
//r. Calcula el valor más pequeño del array mediante reduce.
let valorMinimo = datos.reduce((acc, value) => (value < acc ? value : acc), datos[0]);
// s. Usa flat para aplanar el array multidimensional que creaste anteriormente.
let arrayAplanado = multiArray.flat();
// t. Tenemos la cadena: "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays".
//Separa mediante split las distintas frases. Después mediante map quita los espacios
//sobrantes (trim). A continuación usa flatMap para extraer todas las palabras de cada
//frase en un único array.
let cadena = "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays";
let frases = cadena.split(". ");
let palabras = frases.flatMap(frase => frase.trim().split(" "));
// u. Crea el array a [1,2,3,4,5] y b [6,7,8,9,10] con literales. Concatena los arrays a y
//b con concat. Después con operador spread. Crea una variable const cola. Usa unshift
//y shift para añadir y quitar elementos. Dado el array resultante de la concatenación
//de a y b, obten el subarray desde el índice 2 al penúltimo elemento (slice). Usa
//splice para quitar los 2 últimos elementos de un array.
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];
let concatenado = a.concat(b);
let concatenadoSpread = [...a, ...b];
const cola = [...concatenadoSpread];
cola.unshift(0);
cola.shift();
let subArray = concatenadoSpread.slice(2, concatenadoSpread.length - 1);
subArray.splice(subArray.length - 2, 2);
//v. Rellena con fill un array de 100 elementos con -1.
let arrayRelleno = new Array(100).fill(-1);
// w. Crea un array de cadenas. Busca con indexOf una cadena.
let cadenas = ["uno", "one", "primero", "hola"];
let index = cadenas.indexOf(uno);
// x. Comprueba si la cadena "hola" está dentro del array anterior.
let indexHola = cadena.indexOf("hola");
// y. Ordena la lista de cadenas anterior de forma alfabética con sort.
let cadenasOrdenadas = cadenas.sort();
// z. Crea un array vacío de 50 posiciones. Con forEach asigna valores aleatorios entre 0 
//y 100. Después ordena con sort de menor a mayor. Cambia y ordena de mayor a menor.
const array50 = new Array(50);
array50.forEach((_, index)=> {
    array50[index] = Math.floor(Math.random() * 101);
});
array50.sort((a, b) => a - b);
array50.sort((a, b) => b - a);
// aa. Usa reverse para invertir el array anterior.
array50.reverse();