//j. Realiza una clonación profunda de un objeto que contiene otros objetos o arrays como propiedades:

const objetoAnidado = {
    nombre: 'Carlos',
    detalles: {
        edad: 28,
        habilidades: ['JavaScript', 'React', 'Node.js']
    }
};
const clonProfundo = JSON.parse(JSON.stringify(objetoAnidado));
console.log('Clonación profunda del objeto:', clonProfundo);
    
