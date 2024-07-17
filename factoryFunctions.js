/*
Nos permiten crear objetos de una manera sencilla y no repetitiva
(objetos que sean exactamente iguales en cuanto a sus propiedades)
*/

//ejemplo: crear multiples usuarios
//si empezamos creandolos asi, tendriamos que estar copiando y pegando el mismo codigo para crear nuevos usuarios
// let user = {
//     id: 1,
//     email: 'posty@mail.com',
//     name: 'Post',
//     activo: true,
//     recuperarClave: function () {
//         console.log('recuperando clave...');
//     },
// };

function crearUsuario(name, email){        /**Las factory functions usan camelCase, y por lo general el nombre inicia con crear o create */
    return {
    email,          //es igual a que tuvieramos email: email,
    name,
    activo: true,
    recuperarClave: function () {
        console.log('recuperando clave...');
    },
    }
}

//ahora solo mediante el llamado de la funcion creamos los usuarios:
let user1 = crearUsuario('Post','posty@mail.com');
let user2 = crearUsuario('Kendrick','ken@mail.com');

console.log(user1, user2);