let cadenaConNumeros = "Este texto tiene números 1234.";
let tieneNumeros = /\d/.test(cadenaConNumeros);
console.log(`?La cadena tiene números ${tieneNumeros}`);