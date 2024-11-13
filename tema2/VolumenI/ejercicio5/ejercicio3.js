/*3. Crea una función que busque todas las ocurrencias de una palabra en un texto dado. La función
retorna un array con las posiciones encontradas.*/

function busquedaOcurrencias (texto, palabra){
    let posiciones = [];
    let index = texto.indexOf(palabra);
    while (index !== -1){
        posiciones.push(index);
        index = texto.indexOf(palabra, index + palabra.length);
    }
    return posiciones;
}