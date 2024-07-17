//WHILE
/*estructura: 
while (condicion) {     -> si se cumple se ejecuta lo de adentro
    logica
    salida del loop
}*/

// console.log('ciclo while: ');
// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// console.log('ciclo while 2: ');
// let j=0;
// while(j < 10){
//     if(j % 2 == 0){
//         console.log(j, ' es numero par');
//     }
//     j++;                                    //esto siempre debe ir fuera de los if porque si la condicion no se cumpliera quedariamos atrapados en el loop
// }


//DO WHILE
/*estructura: 
do {

} while (condicion);
  
La diferencia es que primero hace y luego pregunta para poder continuar*/

// console.log('do while:');
// let h=2;                    //si esto lo hacemos con while no imprimiria nada
// do {
//     if(h % 2 == 0){
//         console.log(h, ' es numero par');
//     }
//     h++;
// } while (h < 3);

//FOR
/*estructura:
for ( inicializacion; comparacion; aLaTerminacionIteracion) {}*/
// console.log('ciclo for:');
// for(let g=2; g < 10; g++ ){
//     if(g % 2 == 0){
//         console.log(g, ' es numero par');
//     }
// }

//FOR OF
/*a este se le saca mucho provecho cuando iteramos arrays o diccionarios*/
// console.log('ciclo for of:');

// let animales = ['cerdo','caballo','oveja','araña'];
// for(let animal of animales)
//     console.log(animal);        //imprime los animales uno por uno

// //con ciclo for:
// console.log('ahora con for:');
// for (let a = 0; a< animales.length; a++){
//     let animalF = animales[a];
//     console.log(animalF);
// }

// //con while:
// console.log('ahora con while:');
// let b=0;
// while (b < animales.length){
//     console.log(animales[b]);
//     b++;
// }

//FOR IN
/*nos sirve para iterar las propiedades de un objeto, esto podriamos ocuparlo si 
no conocemos las propiedades porque estan siendo asignadas en tiempo de ejecucion

ejemplo:*/

let user = {
    id: 1,
    name: 'Loki',
    age: 10001,
};

for (let propiedad in user) {
//    console.log(propiedad);     //nos muestra los nombres de las propiedades
    console.log(propiedad, user[propiedad]);
}

//ejemplo con arrays, pero si es PARA ACCEDER A LOS ELEMENTOS DE UN ARRAY YA NO SE USA:
let animales = ['dragon','serpiente','canguro'];
for (let indice in animales){
    console.log(indice, animales[indice]);      //animales[indice] es para poder acceder al elemento
}

