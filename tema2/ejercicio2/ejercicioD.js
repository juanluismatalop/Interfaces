
//d. Desestructura nombre, apellidos y teléfono del siguiente objeto:
//  const person = { nombre: 'Luis', apellidos: 'Molina', telefono: '+34666554433' };
const persona = [ 'Juan Luis', 'Mata', '+34333444222' ];
const [nombre, apellidos, telefono] = persona;
console.log(nombre + " " + apellidos + " ");
console.log(telefono);