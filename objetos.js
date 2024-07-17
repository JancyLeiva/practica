//los objetos son un tipo de referencia, lo que significa que lo que estamos guardando es una direccion a donde eventualmente se almacenara el objeto.

//este objeto sera un lapiz:
//let lapiz = {};     //esto asi tal cual esta es un objeto literal

let lapiz = {
    tipo: 'grafito',        //esto es un par llave - valor, en otros lenguajes a la llave se le llama atributo o propiedad
    color: 'amarillo',
    longitud: 15,           //se sugiere colocar coma en el ultimo tambien 
};

console.log(lapiz);     //podria no mostar las llaves en el orden creado porque JS no asegura el orden de las propiedades.

//formas de acceder a una propiedad:
//1.
console.log(lapiz.tipo);    
//2.
console.log(lapiz['color']);

//Modificar una propiedad:
//1.
lapiz.longitud = 13;
//2. 
lapiz['longitud'] = 16;         //si no conocemos el nombre del atributo o vamos a iterar todo el objeto usaremos esta forma

/*seria como:
let llave = 'longitud';
lapiz[llave] = 16 */

//eliminar:
//delete
delete lapiz.color;
console.log(lapiz); 

/*
let email = 'algo@algo.com';
let name = 'Jarabe';
let direccion = {
    calle: 'Avenida Siempre Viva',
    numero: 380,
};
estas variables estan relacionadas asi que perfectamente pueden
agruparse en un objeto: */
let user ={
    email: 'algo@algo.com',
    name: 'Jarabe',
    direccion: {           //podemos guardar objetos dentro de objetos
        calle: 'Avenida Siempre Viva',
        numero: 380,
    },
    activo: true,           //podemos guardar boolean
    recuperarClave: function () {
        console.log('Recuperando clave...');
    },  //podemos asignar funciones con nombre o anonimas como en este caso 
}  /*A este estilo de programacion donde tomamos datos relacionados 
entre si, y tambien acciones que se pueden realizar con este objeto como 
recuperar la contraseña, actualizar el usuario, enviar una invitacion a 
otro usuario, etc. se le conoce como POO; a encapsular datos y 
comportamientos dentro de una variable (que en este caso es un objeto).
*/

/*En JS los objetos son dinamicos, lo que quiere decir que podemos 
agregarle o quitarle objetoss, o tambien cambiarles el valor */
const usuario = {id: 1 };   //a los objetos se les pueden cambiar todas sus 
                            //propiedades y tambien los valores que estas tienen
                            // independientemente de si fue creado con const o con
                            //let. Con const, lo que no se puede hacer es que deje 
                            //de ser un objeto, o sea intentar despues: usuario = 1;

usuario.name = 'Ali';
usuario.guardar = function () {
    console.log('Guardando', usuario.name);
}

usuario.guardar();      //imprime "Guardando Ali"
delete usuario.name;        //BORRAR UN ELEMENTO DEL OBJETO
delete usuario.guardar;
console.log(user);


const usuario1 = Object.freeze({id: 1});  //si es que no quisieramos que se puedan cambiar sus propiedades 
                                          //ni sus valores, debemos crearlos con Object.freeze
usuario1.name = 'Papa_Noel';
usuario1.id = 2;
console.log(usuario1);                    //se imprime solo id sin quejarse

const usuario2 =  Object.seal({ id: 1 });  //si queremos que sus propiedades estan fijas, pero que sus
                                           //valores si puedan cambiarse debemos utilizar Object.seal
usuario2.name = 'Grinch5004'; 
usuario2.id = 2;
console.log(usuario2);
