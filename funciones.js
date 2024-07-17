/*Las funciones en JS tambien son objetos, y estas se consideran objetos de primera clase,
esto quiere decir que las funciones pueden ser asignadas a otras variables, pasadas como 
argumentos a otras funciones, o tambien retornadas de otras funciones*/


//funciones sin argumentos
function saludar(){
    console.log('Hola mundo');
}

saludar();

function suma(){
    return 2+2;
}

let resultado = suma();     //reutilizar el valor retornado

//funciones con argumentos 
function resta(a,b){
    return a - b;
}

//funciones con argumento descriptivo
function division({numerador,denominador}){
 return numerador/denominador;
}

console.log('resultado de la division: '+`${division({numerador:14, denominador:7})}`);   //si no se colocan las llaves antes de escribir los argumentos, 
                                                                            //o si ponemos solo los argumentos directamente separados por coma, dara NaN.

/*Recordatorio:  
-> los valores que nosotros les pasamos a las funciones se llaman argumentos
-> cuando nosotros referenciamos los valores dentro de las funciones se llaman parametros*/


function sumaNueva(a, b){
    console.log(arguments);         //para referenciar todos los argumentos, esto imprime un array que contiene todos ellos, esto no es la mejor forma de hacerlo
    return a + b;
}

let resSuma = sumaNueva(5,6,7,8,9); 
console.log(resSuma);

/*Las funciones tienen propiedades que podemos ver si colocamos un punto, por ejemplo */
console.log(resta.name);    //nos muestra el nombre de la funcion
console.log(resta.length);  //esto nos indica la cantidad de argumentos que recibe la funcion


function Usuario(nombre) {
    this.nombre = nombre;
}

//asignar una funcion a una variable ejemplo:
const U = Usuario;
let user = new U('Nicolas');    //definiendo un usuario a partir de la referencia a la funcion Usuario

console.log(user);      //imprime: Usuario {nombre: 'Nicolas'}  un usuario que fue creado a partir de la funcion usuario

//pasar una funcion como argumento:
function of(Fn, arg){      //la funcion of, va a recibir una funcion constructora(Fn), que podria ser por ejemplo Usuario y tambien vamos a pasarle un argumento(arg)
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');     //imprime:  Usuario {nombre: 'Chanchito'}
console.log(user1);

//retornando funciones dentro de otras funciones:
function returned(){
    return function(){      //funcion anonima
        console.log('Hola mundo');
    }
}

let saludo = returned();    //es necesario hacer esto para poder imprimir el hola mundo
saludo();       


/*FUNCIONES ANONIMAS ó Fat arrow functions 
las funciones anonimas se ven asi:          () => {}
    donde en el parentesis va el o los parametros y luego de la flecha(=>),
    cuando son funciones de una sola linea, hay un return implicito; ejemplo:
*/
const multiplicacion = (a, b) => a * b;     //a una constante llamada multiplicacion le estamos pasando la funcion 
console.log(multiplicacion(1,5)); 

/*en caso de que queramos redactar una funcion con varias instrucciones, el caso seria asi: */
const mult = (a, b) => {
    const c = a * b;
    return c + 1;
}

console.log(mult(4,5));


//CALLBACK FUNCTIONS
/*Un callback es una funcion que pasamos como parametro a otra funcion,
esa otra funcion realizará algo y al finalizar llamara a esa funcion callback,

ejemplos sincronos de callback: 
*/

console.log('1');
setTimeout(() => {
    console.log("Heloo");
},0);
console.log('2');


/*() => {
    console.log("Heloo");
} 
    esta parte es la callback function, es el paramatro que le pasamos al setTimeout */

const names = ['James', 'Lily', 'Sevy'];
//con un forEach pasamos una callback function que acepta como parametro 
//cada elemento de names
names.forEach((name) => console.log(name));

//para construir esto por nuestra cuenta:
const myForEach = (arr,cb) => {                 //cb es un parametro que se supone reciba una funcion
    for(let i=0; i<arr.length; i++){
        const element = arr[i];         //con element lo que haremos es llamar esa callback function
        cb(element)
    }
}
//callback function:
myForEach(names, (name) => {
    console.log(name);
})

/*ejemplos asincronos:  */
const loadPokemon = (id, cb) => {
    fetch()
}