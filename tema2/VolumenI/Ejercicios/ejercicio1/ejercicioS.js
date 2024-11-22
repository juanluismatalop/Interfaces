let cadenaConMayuscula = "Este texto comienza con mayúscula.";
let comienzaConMayuscula = /^[A-Z]/.test(cadenaConMayuscula);
console.log(`?La cadena comienza con mayúscula? ${comienzaConMayuscula}`);