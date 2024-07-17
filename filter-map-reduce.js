let cervezas = [{nombre: 'Erdinger', volumen: 500},
                {nombre: 'Delirium', volumen: 300},
                {nombre: 'Diosa blanca', volumen: 700},
                {nombre: 'Heineken', volumen: 1500},
                {nombre: 'Fuller', volumen: 500}
];

console.log(cervezas);

//      FILTER
/*Sirve para filtrar elementos en una lista y devuelve de igual manera una lista*/
let mayorVolumen = cervezas.filter( elemento => elemento.volumen > 500);
console.log(mayorVolumen);

//      MAP
/*La funcion map recorre una lista y permite hacer alguna operacion con 
cada elemento de la lista, devolviendonos otra lista con el mismo numero 
de elementos pero modificados con la operacion que acabamos de hacer 
Ejemplo:*/
let beberUnPoco = cervezas.map( (elemento) => elemento.volumen - 100); //si la operacion se la hacemos directamente al valor nativo, 
console.log(beberUnPoco);                  //nos devuelve un array simple con los valores, no un arreglo de objetos como el filter

//para que devuelva un array de objetos seria:
let beberUnPoco2 = cervezas.map( 
    (elemento) => {
        elemento.volumen -= 100;
        return elemento;
});
console.log(beberUnPoco2);                  //nos devuelve un array simple con los valores, no un arreglo de objetos como el filter

//      REDUCE
/*Lo que hace reduce es una operacion a todos los elementos en orden de izquierda a derecha
y devuelve un valor escalar o unico, toma un elemento o en este caso los dos elementos del objeto,
hace algo con ellos y luego ese resultado lo evalua con los siguientes elementos.*/
let cervezaQueQueda = cervezas.reduce(      //reduce recibe dos parametros, el primero es para la operacion y el segundo es para el valor inicial
    (acumulado, sig) => acumulado + sig.volumen,   //que vaya sumando el elemento volumen y lo vaya acumulando en el acumulado (el 0 es el valor inicial, acumulado iniciara en 0)
    0           //segundo parametro 
);
console.log(cervezaQueQueda);


//      FIND
/*Con find obtenemos un true o false statement y lo que retorna es el primer elemento
en el array que le retorne true al argumento que pasamos dentro de find*/
const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25},
];
const foundItem = items.find((item) => {
    return item.name === 'Book';
});
console.log(foundItem);


//      forEach
items.forEach((item) => {
    console.log(item.name);
})


//      SOME
/* revisa si por lo menos un elemento del array retorna true a lo que evaluamos. */
const freeItems = items.some((item) => {
    return item.price <= 100;
});
console.log(freeItems);

//      Every
/*Solo si todos los elemntos retornan true a lo que evaluamos, every nos retornara un true */
const allLessThan = items.every((item) => {
    item.price <= 1000;     //true
    item.price < 1000;      //false
});
console.log(allLessThan);

//  otro ejemplo de Reduce:
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);  //0 es nuestro segundo parametro
console.log(total);

//      INCLUDES
const items2 = [1,2,3,4,5];

const includesSeven = items.includes(7);    
console.log(includesSeven);     //retorna false