// 2. Crea un archivo principal (main.js), importa esa función y úsala ejecutar varias pruebas.

const { restar } = require('./utils.js');

// Prueba 1
const resultado1 = restar(10, 5);
console.log(`Resultado: ${resultado1}`); 
// Prueba 2
const resultado2 = restar(20, 15);
console.log(`Resultado: ${resultado2}`); 
// Prueba 3
const resultado3 = restar(30, 10);
console.log(`Resultado: ${resultado3}`);