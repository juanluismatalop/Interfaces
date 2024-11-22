//h. Dados dos objetos, combínalos en uno solo utilizando el operador spread. Después, elimina alguna de las propiedades:
const objeto1 = { a: 1, b: 2, c: 3 };
const objeto2 = { d: 4, e: 5, f: 6 };
const convinado = {objeto1, objeto2};
const{d, sinD} = convinado;
console.log(sinD);