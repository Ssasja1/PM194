// b.
// 1.Crea una función verificarUsuario(usuario) que retorne una promesa.
// 2. Si el nombre de usuario es "admin", la promesa se resuelve con "Acceso concedido", si no,
// se rechaza con "Acceso denegado".

function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}

//usa .then() y .catch() para manejar la promesa.
verificarUsuario("admin")
    .then(res => console.log(res)) //aceso concedido
    .catch(err => console.error(err));

verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.error(err)); // acceso denegado