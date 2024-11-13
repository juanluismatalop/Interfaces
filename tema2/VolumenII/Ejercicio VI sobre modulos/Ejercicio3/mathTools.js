// Crea un archivo llamado mathTools.js que exporte una función por defecto llamada
// calculate(operation, a, b) que acepte tres parámetros: una operación (“sum”,
// “multiply”, etc.) y dos números. Dependiendo del valor de operation, deberá llamar a las
// funciones sum(a, b), subtract(a, b), o multiply(a, b), que también deben
// ser exportadas de manera normal (no por defecto). En otro archivo app.js, importa la
// función por defecto y las funciones normales, y realiza varias operaciones como suma, resta y
// multiplicación

export function sumar(a, b) {
    return a + b;
    }
export function restar(a, b) {
    return a - b;
    }
export function multiplicar(a, b) {
    return a * b;
    }

export default function calculate(operation, a, b){
    switch (operation){
        case'sumar': return sumar(a, b)
        case'restar': return restar(a, b)
        case'multiplicar': return multiplicar(a, b)
    }
}