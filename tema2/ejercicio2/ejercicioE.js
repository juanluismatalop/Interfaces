//e. Cambia el siguiente bucle para desestructurar cada entrada e imprimir llave y valor por separado:
//  for (const [key, value] of Object.entries(person)) {
//      console.log(key, value);
//  }
const persona = { nombre: 'Juan Luis', apellidos: 'Mata', telefono: '+34333444222' };
for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}

