/*reglas para nombrar variables: 
1. siempre deben empezar por una letra o guion bajo
2. los nombres deben ser autodescriptivos del valor que tendra.
3. UpperCamelCase: significa que la primera letra de cada palabra que utilicemos para nombrar la variable sera mayuscula. (utilizada por lo general en algunos lenguajes  para constantes)
4. camelCase: igual que la UpperCamelCase excepto que la primera letra de la primera palabra no estara en mayuscula.
5. snake_case: cada palabra estara separada por guion bajo
* Se debe tomar en cuenta que JS es case sensitive (tenemos que cuidar mucho cada mayuscula y minuscula)*/

//no son lo mismo
let NombreCompleto;
let nombreCompleto;

/*Tipos de datos:
Primitivos(se almacenan en pilas dentro de la RAM, de tamaño fijo por tanto mas rapido): Number, String, Boolean, Undefined, Null
De referencia(se almacenan en memoria heap, puede crecer o decrecer): Array, Object, Functions, Clases
*/

//primitivos:
//- numero
let numero = 1;
let texto = "Hola Mundo";
let verdadero = true;
let falso = false;
let noDefinido;           //undefined es el tipo de dato que tienen las variables a las cuales no les hayamos asignado un valor, solo asi tenemos un TIPO DE DATO UNDEFINED
let undef = undefined;     //asi tambien tenemos un TIPO DE DATO UNDEFINED (se hace enfasis porque undefined tambien existe como un VALOR, valor undefined) 
let nulo = null;          //ocurre cuando no queremos establecer que una variable tiene un valor, pero su valor es nulo (podemos utilizarlo por ejemplo en menus en donde el usuario 
                          //no selecciona ninguna opcion, no es undefined porque si escogio, escogio no seleccionar ninguna por eso es nulo

//constantes: variables que no pueden cambiar de valor, esto da mayor seguridad porque el valor podria cmabiar por accidente.
//      **como regla deberiamos utilizar siempre const, a menos que necesitemos que una variable cambie de valor utilizar el let 
const nombre = 'Jorge';
//nombre = 'Juan';        //no podemos hacer esto


/*tipado estatico vs tipado dinamico
el tipado estatico es: String nombre = "Jorge"; al momento de definir una varible le definimos su tipo de dato, Java es un lenguaje con tipado estatico
JS es de tipado dinamico: podemos definir nombre = 'Jorge'; y mas adelante hacer esto: nombre = 42; 
*/

//tipado dinamico:  uso de typeof
//typeof es una funcionalidad que consulta el tipo de dato que tiene la variable
console.log(typeof numero);
console.log(typeof nombre);
console.log(typeof verdadero);
console.log(typeof undef);
console.log(typeof nulo);           //muestra Object, por que?
//porque null por lo general es utilizado cuando existe un listado de un objeto, null representa un objeto vacio o la ausencia de un objeto






