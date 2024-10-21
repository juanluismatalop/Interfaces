//i. Crea una función que retorna un array con 3 valores. Usa la función y desestructura los valores:
function retornaValores() {
    return [23, 32, 33];
}
const [valor1, valor2, valor3] = retornaValores();
console.log(`Valores desestructurados: ${valor1}, ${valor2}, ${valor3}`)