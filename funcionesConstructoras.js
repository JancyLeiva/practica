/*
A las funciones constructoras el nombre que se les da
es el del recurso que queremos que este cree.
 */

// estructura: { id: 1, recuperarClave: function(){} }
function Usuario(){     //se espera que para este tipo de funciones se utilice la convencion UpperCamelCase(tambien conocida como PascalCase)
    this.id = 1;
    this.recuperarClave = function () {
        console.log('recuperando clave...');
    }
}

/*si queremos crear un objeto de usuario, no basta con que solamente
llamemos la funcion*/
console.log(Usuario());     //imprime undefined

/*es necesario  utilizar la palabra reservada new*/
let usuario = new Usuario();
console.log(usuario);

/*En JS cuando tenemos una propiedad a la que le estamos asignando una
funcion ya sea con una factory function o una funcion constructora, a
estas dejamos de llamarles funciones, pasan a ser metodos. Entonces los
metodos son funciones que fueron asignadas a una propiedad de un objeto.

Cuando utilizamos la palabra reservada new:
- se crea un objeto literal del aire {}.
- luego, se vincula el prototipo de la funcion (en este caso usuario), con el objeto que se acaba de crear
- despues, el objeto vacio que se acaba de crear se le asigna a la palabra reservada this,
- si es que la funcion no retorna nada, lo que hace es que retorna de manera automatica this*/


/*ATAJOS CONSTRUCTORES
let obj = {};       al hacer esto estamos llamando al constructor de objetos
hacerlo asi es igual a que hagamos esto:  let objeto = new Object();
- propiedad oculta de los objetos:    .constructor   todos los objetos creados en JS contienen una 
  propiedad llamada constructor, con esto comprobamos que en efecto ambas formas retornan lo mismo

                forma literal de crearlo
new Array();    []
new String();   "" '' ``
new Number();   12
new Boolean();  true false

  */

function Usuario(){
    this.name = "Chanchito feliz";
}
let user = new Usuario();
console.log(user.constructor);      //se muestra todo el codigo de Ususario() porque este tipo de constructores no son nativos

/*Se comportan de forma distinta dependiendo de como fueron creados, los que son con new,
son envueltos en objetos.  */
const s1 = "1 + 1";             //imprime: 1 + 1
const s2 = new String("1 + 1"); //imprime: String {'1 + 1'}
console.log(s1, s2);

//si los evaluamos encontraremos que
console.log(eval(s1), eval(s2)); //se imprime: 2 String {'1 + 1'}

/* -> el consejo es que si por alguna razon debemos crear el string con el constructor, y luego necesitamos obtener su valor,
lo que se puede hacer es utilizar el metodo valueOf(), este metodo tambien lo tienen los boolean y los number*/
console.log(s2.valueOf());   //imprime el string literal:  1 + 1

