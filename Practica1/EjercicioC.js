// Crea un arrow function llamada saludoPersonalizado que reciba dos parámetros: nombre y edad
//y retorne una cadena como la siguente

//"Hola, me llamo Isai y tengo 37 años."

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arrow function
const saludoPersonalizado = (nombre, edad) => {
  return `Hola, me llamo ${nombre} y tengo ${edad} años.`;
};

rl.question('¿Cuál es tu nombre? ', (nombre) => {
  rl.question('¿Cuántos años tienes? ', (edad) => {
    console.log(saludoPersonalizado(nombre, edad));
    rl.close();
  });
});
