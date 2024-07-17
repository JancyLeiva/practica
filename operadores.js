//OPERADORES ARITMETICOS: utilizados para operaciones matematicas
let a = 5, b = 7;

//**ctrl+/ para comentar muchas lineas de una sola
// console.log(a + b, 'adicion');  //adicion
// console.log(a - b, 'resta');  //resta
// console.log(a * b, 'multiplicacion');  //multiplicacion
// console.log(a / b, 'division');  //division
// console.log(a % b, 'modulo');  //modulo:  es lo que sobre de una division
// console.log(a ** b, 'potencia'); //potencia

//incrementar
console.log(++a);   //al colocarlo al inicio se esta primero incrementando el valor de a, y despues mostrandolo en consola
console.log(a++);   //al colocarlo al final se imprime primero el valor de a, y despues se incrementa en 1
//decrementar
console.log(--a);
console.log(a--);

//OPERADORES DE ASIGNACION: 
let c = 5;
c = c + 5;

//si quisieramos incrementar un valor en mas de 1, 
c += 5;     //colocamos el signo de la operacion que queremos realizar seguido de un parentesis

//DE COMPARACION:
//Cada vez que utilicemos un valor de comparacion obtendremos un boolean
// <>
let d = 13;
console.log(d > 13); //false
console.log(d >= 13); //true
console.log(d < 13); //false
console.log(d <= 13); //true

// ==
console.log(d == 13); //son iguales?
console.log(d != 13); //son diferentes?
//pero que pasa si... :
console.log(d == '13'); //la respuesta es true, porque == pregunta si LOS VALORES SON IGUALES

// ===
//la triple igualdad pregunta por el VALOR Y el TIPO
console.log(d === '13'); //asi que esto es false
console.log(d !== '13'); //pregunta si son distintos tipos de DATOS O VALOR

//OPERADORES LOGICOS: AND, OR, NOT
//AND && : solo si true y true -> resultado true
let tarjeta = true;
let subscripcionHBO = false;
console.log('operador and', tarjeta && subscripcionHBO);    //false

//OR || : solo si false y false -> resultado false
console.log('operador or', tarjeta || subscripcionHBO);    //true, 

//NOT ! : niega algo
console.log('operador not', !subscripcionHBO);  //true


//OPERACIONES DE SHORT CIRCUIT

/*para entender bien, si imprimimos: console.log([] || {});
tendremos de resultado-> []

y si imprimimos console.log([] && {});
tendremos de resultado-> {}

***  esto es porque OR devuelve el primer elemento que evalua en true, 
***  y en el caso de AND devuelve el ultimo que evalua en true.

Los valores que se evaluan en FALSO son: 
*a todos estos se les conoce como FALSY
- false :    el propio boolean de false
- 0 :        el valor cero
- '' :       los string vacios
- null      
- undefined 
- NaN

(todo lo que no esta en la lista se evaluan en verdadero)

Ejemplo con OR*/
let nombre = '';
let username = nombre || 'Anonimo';
console.log(username);               //el valor que tomara es la palabra Anonimo porque '' se toma como falso entonces el primer valor verdadero es 'Anonimo'

nombre = 'el Principito';
username = nombre || 'Anonimo';
console.log(username);          //el valor que tomara en esta ocasion sera 'el Principito', porque es el primer verdadero

//ejemplo con AND
function fn1(){
    console.log('soy funcion 1');
    return true;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}

let resFuncionesAnd = fn1() || fn2();   //imprime el contenido de las dos funciones porque ambas son verdaderas, si cambiamos fn1 a false solo imprime el contenido de funcion 2
console.log(resFuncionesAnd);           //aqui comprobamos el estado de la operacion


//OPERADOR TERNARIO
/* estructura:  expresion ? 'si es true' : 'si es false' */

let edad = 16;
let acceso = edad > 17 ? 'permitida la compra' : 'no puede comprar';
console.log(acceso);



