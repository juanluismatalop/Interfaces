/*1. Crea un programa que genere un array con 1000 números aleatorios del 0 al 99.
    a. Crea una función que calcule la media aritmética.
    b. Calcula la frecuencia de cada número del 0 al 99. Es decir, si el número 0 aparece 80 veces
        en el array de 1000 posiciones, se guardará un 80 en la posición 0 del nuevo array. Si el
        número 1 aparece 50 veces, se guardará un 50 en la posición 1, etc.
    c. Crea una función que ordene el array de menor a mayor sin usar métodos de Javascript.
    d. Ahora, usa una función de Javascript para realizar la ordenación.*/
    
let arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100));

//a. Crea una función que calcule la media aritmética.

function calcularMedia(array){
    let suma = array.reduce((acc, num)=> acc + num, 0);
    return suma /array.length;
}

/*b. Calcula la frecuencia de cada número del 0 al 99. Es decir, si el número 0 aparece 80 veces
        en el array de 1000 posiciones, se guardará un 80 en la posición 0 del nuevo array. Si el
        número 1 aparece 50 veces, se guardará un 50 en la posición 1, etc.*/

function calcularFrecuencias(array){
    let frecuencias = Array(100).fill(0);
    array.forEach(element => {
        frecuencias[num]++;        
    });
    return frecuencias;
}

//c. Crea una función que ordene el array de menor a mayor sin usar métodos de Javascript.

function ordenarArray(array){
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if(array[i] > array[j]){
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

// d. Usar una función de JavaScript para ordenar el array

function ordenarArrayJS(array) {
    return array.sort((a, b) => a - b);
}
