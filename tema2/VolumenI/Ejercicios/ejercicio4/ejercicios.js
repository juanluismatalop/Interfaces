//1. Crea una función que cuente el número de vocales de una cadena de caracteres.
function contarVocales(cadena) {
    const vocales = "aeiouAEIOU";
    let contador = 0;
    for (let char of cadena) {
        if (vocales.includes(char)) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales("Hola soy Juan Luis Mata Lopez"));

//2. Crea una función que determine si una cadena es un palíndromo, es decir, que se lee igual hacia
//delante que hacia atrás.

function esPalindromo(cadena) {
    cadena = cadena.replace(/\s+/g, '').toLowerCase();
    return cadena === cadena.split('').reverse().join('');
    }

function esPalindromoSinReverse(cadena) {
    cadena = cadena.replace(/\s+/g, '').toLowerCase();
    let longitud = cadena.length;
    for (let i = 0; i < longitud / 2; i++) {
        if (cadena[i] !== cadena[longitud - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(esPalindromo("ojo rojo"));

//3. Crea una función que capitalice una cadena de texto. Es decir que todas las palabras empiecen
//por mayúscula.

function capitalizarCadena(cadena) {
    let resultado = '';
    let capitalizar = true;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === ' ') {
            resultado += ' ';
        capitalizar = true;
        } else {
            if (capitalizar) {
                resultado += cadena[i].toUpperCase();
                capitalizar = false;
            } else {
                resultado += cadena[i];
            }
        }   
    }
    return resultado;
}
function capitalizarCadenaFunciones(cadena) {
    return cadena.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
}

console.log(capitalizarCadena("viva españa")); 

//4. Dado un array de cadenas y una longitud n, crea una función que filtre el array dejando solo las
//cadenas de menor longitud que n.

function filtrarCadenas(array, n) {
    let resultado = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].length < n) {
            resultado.push(array[i]);
        }
    }
    
    return resultado;
}

function filtrarCadenasFilter(array, n) {
    return array.filter(cadena => cadena.length < n);
}

console.log(filtrarCadenasFilter(["Triana", "Macarena", "Nervion", "Pino Montano"], 9));

//5. Crea una función que cree el acrónimo de una cadena de caracteres tomando la primera letra de
//cada palabra y convirtiéndola a mayúscula. Por ejemplo la frase anterior sería CUFQCEADU….

function crearAcronimo(cadena){
    let acronimo = '';
    let capitalizar = true;

    for(let i = 0; i<cadena.length; i++){
        if(cadena[i] === ' '){
            capitalizar = true;
        }else if(capitalizar){
            acronimo += cadena[i].toUpperCase();
            capitalizar = false;
        }
    }
    return acronimo;
}

function crearAcronimoSplit(cadena){
    return cadena.split(' ').map(palabra => palabra[0].toUpperCase()).join('');
}

console.log(crearAcronimo("Peal de Becerro Tierra Ibera"));

//6. Crea una función que cuente las frases, palabras y letras presentes en un texto.

function contarTexto(texto) {
    const frases = (texto.match(/[.!?]/g) || []).length;
    const palabras = texto.split(/\s+/).length;
    const letras = texto.replace(/[^a-zA-Z]/g, '').length;
    return {frases, palabras, letras};
}

function contarTexto2(texto) {
    let frases = 0, palabras = 0, letras = 0;
    let enPalabra = false;

    for(let i = 0; i<texto.length; i++){
        let char = texto[i];

        if(char === '.'||char === '!'||char === '?'){
            frases++;
            if (!enPalabra) {
                enPalabra = true;
                palabras++;
            }
        }else {
            enPalabra = false;
        }
    }
    return {frases, palabras, letras};
}

console.log(contarTexto("hola me llamo juan luis tengo 21 años y soy de peal de becerro"))

//7. Crea una función que identifique si hay elementos duplicados en un array.

function tieneDuplicados(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return true;
            }
        }
    }
    return false;
}
function tieneDuplicados(array) {
    return new Set(array).size !== array.length;
}
console.log(tieneDuplicados([1, 2, 3, 4, 5, 1]));

//8. Crea una función que debe retornar verdadero si alguno de los elementos de un array está re‑
//petido n veces.

function repetidoNVeces(array, n) {
    const mapa = {};
    for (let elemento of array) {
        mapa[elemento] = (mapa[elemento] || 0) + 1;
    }
    return Object.values(mapa).includes(n);
}

function repetidoNVeces(array, n) {
    for (let i = 0; i < array.length; i++) {
        let contador = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                contador++;
            }
        }
        if (contador === n) {
            return true;
        }
    }
    return false;
}

console.log(repetidoNVeces([1, 2, 3, 4, 2, 2], 3));

//9. Crea un array que intercale dos arrays dados. Por ejemplo dados [a,b,c,d] y [1,2,3,4] el resultado
//sería [a,1,b,2,c,3,d,4]

function intercalarArrays(array1, array2) {
    const resultado = [];
    for (let i = 0; i < array1.length; i++) {
        resultado.push(array1[i], array2[i]);
    }
    return resultado;
}

console.log(intercalarArrays(['a', 'b', 'c', 'd'], [1, 2, 3, 4]));

//10. Crea una función que rote los elementos de un array n posiciones. Por ejemplo, dado el array
//[1,2,3,4,5,6] y el número 2 el resultado será: [5,6,1,2,3,4]

function rotarArray(array, n) {
    let resultado = [];
    let longitud = array.length;
    for (let i = 0; i < longitud; i++) {
        resultado.push(array[(i + (longitud - n)) % longitud]);
    }
    return resultado;
}
function rotarArraySlice(array, n) {
    return array.slice(-n).concat(array.slice(0, -n));
}

console.log(rotarArray([1, 2, 3, 4, 5, 6], 2));

//11. Crea una función que elimine de una cadena los caracteres dados en un array.

function eliminarCaracteres(cadena, caracteres) {
    let resultado = '';
    for (let i = 0; i < cadena.length; i++) {
        if (!caracteres.includes(cadena[i])) {
            resultado += cadena[i];
        }
    }
    return resultado;
}
function eliminarCaracteres(cadena, caracteres) {
    return cadena.split('').filter(char => !caracteres.includes(char)).join('');
}

console.log(eliminarCaracteres("Hola Mundo", ['a', 'o']));

//12. Crea una función que rote una matriz de tamaño nxn, 90 grados a la derecha. Ejemplo: [1,2,3]
//[7, 4, 1] [4,5,6] => [8, 5, 2] [7,8,9] [9, 6, 3]

function rotarMatriz90Grados(matriz) {
    return matriz[0].map((_, i) => matriz.map(row => row[i]).reverse());
}
function rotarMatriz90Grados(matriz) {
    let n = matriz.length;
    let nuevaMatriz = [];
    for (let i = 0; i < n; i++) {
        nuevaMatriz.push([]);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            nuevaMatriz[j][n - 1 - i] = matriz[i][j];
        }
    }

    return nuevaMatriz;
}

const matriz = [
[1, 1, 1],
[2, 2, 2],
[3, 3, 3]
];
console.log(rotarMatriz90Grados(matriz));
//13. Crea una función que determine si los paréntesis presentes en una cadena de texto están balan‑
//ceados. Por ejemplo (a(b)) → Balanceado, (a(b(a)) → No balanceado.

function estanBalanceados(cadena) {
    let stack = [];
    for (let char of cadena) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (!stack.length) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

 console.log(estanBalanceados("(a(b))"));
 console.log(estanBalanceados("(a(b(a))"));

//14. Busca una submatriz dentro de una matriz más grande. El resultado debe ser las coordenadas
//donde se encuentra dicha matriz.
function encontrarSubmatriz(matriz, submatriz) {
    const filasM = matriz.length;
    const columnasM = matriz[0].length;
    const filasS = submatriz.length;
    const columnasS = submatriz[0].length;
    for (let i = 0; i <= filasM - filasS; i++) {
        for (let j = 0; j <= columnasM - columnasS; j++) {
            let encontrada = true;
            for (let x = 0; x < filasS; x++) {
                if (matriz[i + x].slice(j, j + columnasS).toString() !== submatriz[x].toString()) {
                    encontrada = false;
                    break;
                }
            }
            if (encontrada) {
                return { fila: i, columna: j };
            }
        }
    }
    return null;
}

const matrizGrande = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
const submatriz = [
    [6, 7],
    [10, 11]
];
console.log(encontrarSubmatriz(matrizGrande, submatriz));

//15. Crea una función que verifique si una matriz de 9x9 es una solución de un sudoku. Una cuadrí‑
//cula válida de Sudoku es aquella que cumple las siguientes condiciones:
//a. Filas Únicas: Cada fila debe contener los números del 1 al 9 sin repetición.
//b. Columnas Únicas: Cada columna debe contener los números del 1 al 9 sin repetición.
//c. Subcuadrículas Únicas: Cada una de las nueve subcuadrículas de 3x3 debe contener los
//números del 1 al 9 sin repetición.

function esSudokuValido(tablero) {
    function esGrupoValido(grupo) {
        let numeros = Array(9).fill(false);
        for (let i = 0; i < grupo.length; i++) {
            let num = grupo[i];
            if (num < 1 || num > 9 || numeros[num - 1]) return false;
            numeros[num - 1] = true;
        }
        return true;
    }

    for (let i = 0; i < 9; i++) {
if (!esGrupoValido(tablero[i])) return false;
}
// Verificar columnas
for (let col = 0; col < 9; col++) {
let columna = [];
for (let fila = 0; fila < 9; fila++) {
columna.push(tablero[fila][col]);
}
if (!esGrupoValido(columna)) return false;
}
// Verificar subcuadrículas
for (let i = 0; i < 9; i += 3) {
for (let j = 0; j < 9; j += 3) {
let subcuadricula = [];
for (let x = 0; x < 3; x++) {
for (let y = 0; y < 3; y++) {
subcuadricula.push(tablero[i + x][j + y]);
}
}
if (!esGrupoValido(subcuadricula)) return false;
}
}
return true;
}
// Ejemplo de uso
const tablero = [
[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]
];
console.log(esSudokuValido(tablero)); // Salida: true