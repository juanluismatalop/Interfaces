// Crea dos archivos, mathOperations.js y app.js. En mathOperations.js, exporta
// funciones llamadas add(a, b), subtract(a, b) y multiply(a, b). En app.js, crea
// una función loadOperations() que importe dinámicamente mathOperations.js y, al
// resolverse la promesa, use las funciones para realizar varias operaciones matemáticas. Luego,
// usa la función en app.js para importar el módulo dinámicamente y mostrar los resultados.

export function add(a,b){
    return a + b;
}
export function subtract(a,b){
    return a - b;
}
export function multiply(a,b){
    return a * b;
}