//2. Crea una función que calcule el factorial de un número usando un bucle.

function factorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
    