let cadenaConTelefono = "El número de contacto es +34 123 456 789.";
let tieneTelefonoInternacional = /\+\d{1,3}\s\d{3}\s\d{3}\s\d{3}/.test(cadenaConTelefono);
console.log(`?La cadena contiene un teléfono con código internacional? ${
tieneTelefonoInternacional}`);