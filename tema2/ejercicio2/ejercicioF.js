//f. Dado [{x: 1, y: 2}, {x: 3, y: 4}], desestructura los puntos en las variables x1, y1, x2, y2.
const cadena = [{x: 1, y: 2}, {x: 3, y: 4}];
const [x1, y1, x2, y2] = cadena;
console.log(x1+x2+y1+y2);