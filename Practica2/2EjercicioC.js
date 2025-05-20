// c.
// Ahora con un arreglo de personas, realiza lo siguiente:
// 1. Usa .find() para buscar a la persona con nombre "Luis".
// 2. Usa .forEach() para imprimir el nombre de cada persona con su edad.
// 3. Usa .reduce() para sumar todas las edades y obtener un total.

const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 }
];

// Usa .find() para buscar a la persona con nombre "Luis".
const personaLuis = personas.find(persona => persona.nombre === "Luis");

console.log(`Persona encontrada: ${personaLuis.nombre} \n`);

// Usa .forEach() para imprimir el nombre de cada persona con su edad.
personas.forEach(persona => {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad} \n`);
});

// Usa .reduce() para sumar todas las edades y obtener un total.
const totalEdad = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);

console.log(`Sumatoria total de edades: ${totalEdad}`);