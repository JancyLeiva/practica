/*Los array son objetos
Los elementos de un array comienzan desde el numero 0,
si imprimimos todo el array, se imprimira en el orden que le definimos */

//array literal:
let animales = [];

//propiedad length
const miArray = ['J', 'K', 'L'];
const tamanio = miArray.length;
console.log(tamanio);

//ACCEDER a los elementos de un array:
var elemt = miArray[0];
console.log(elemt);
var elemt = miArray[1];
console.log(elemt);
var elemt = miArray[2];
console.log(elemt);
var elemt = miArray[3];
console.log(elemt);         //imprime undefined
//o podriamos imprimirlo directamente:
console.log(miArray[0]);

//AGREGAR elementos: 
animales[0] = 'dragon';     //pero debemos tener cuidado con el indice, porque podriamos pasarle perfectamente un indice que no haga sentido y lo aceptaria.
console.log(animales);
animales[4] = 'pez';     //si hicieramos esto, se crearian las posiciones 1, 2 y 3 vacias en el array
console.log(animales);
//el metodo push agrega elementos al final
miArray.push('M');
//el metodo unshift los agrega al inicio
miArray.unshift('i');
console.log(miArray);

//quitar elementos
/*el metodo pop nos devuelve el ultimo elemnto
asi que podemos guardarlo en una variable, y
el elemento queda fuera de la lista*/
let finalArray = miArray.pop();
console.log(miArray);         //imprime [i,J,K,L]
console.log(finalArray);      //imprime M

/*para hacer lo mismo pero con un elemento 
que esta al inicio, usamos shift*/
let inicioArray = miArray.shift();
console.log(miArray);         //imprime [J,K,L]

//recorrer/iterar el arreglo
//for tradicional
for (let i=0; i<miArray.length; i++){  //imprime: J
    console.log(miArray[i]);                //    K
}                                           //    L

//for each
miArray.forEach((elemento) => {
    console.log(elemento);
});

//for of 
for (const elmnt of miArray){
    console.log(elemento);
}


