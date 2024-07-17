/* 01
Funcion para determinar el numero mayor de dos numeros*/
console.log('EJERCICIO 1');
function cualEsMayor(a, b){
    if(a > b)
        return console.log('El numero mayor entre '+`${a}`+' y '+`${b}`+' es: '+`${a}`);
    else
        return console.log('El numero mayor entre '+`${a}`+' y '+`${b}`+' es: '+`${b}`);     
    
        //o mas resumido:
    //return (a > b) ? a : b;    
}

cualEsMayor(5,7);


/* 02
Devolver el nombre de la resolucion
8k: 7680 x 4320
4k: 3840 x 2160
WQHD: 2560 x 1440
FHD: 1920 x 1080
HD: 1280 x 720*/
console.log('EJERCICIO 2');

function nombreResolucion({ancho, alto}){
    if(ancho >= 1280 && alto >= 720)
        return console.log('La resolucion es HD');
    else if (ancho >= 1920 && alto >= 1080)
        return console.log('La resolucion es FHD');
    else if (ancho >= 2560 && alto >= 1440)
        return console.log('La resolucion es WQHD');
    else if (ancho >= 3840 && alto >= 2160)
        return console.log('La resolucion es 4k');
    else if (ancho >= 1280 && alto >= 720)
        return console.log('La resolucion es 8k');
    else 
        return false;
}

nombreResolucion({ancho:1366,alto:2000});


/*03
funcion que nos permita obtener un elemento por su indice, tenemos que
validar que el indice no sea menor a cero y que el elemento exista
en el array */
console.log('EJERCICIO 3');

function getByIdx(arr, idx){
        if (idx >= 0 && idx< arr.length)
            return arr[idx];
        else
            return 'elemento no existe';
}

console.log(getByIdx([1,2],2));

/*04
numeros impares entre 0 y el 10*/
console.log('EJERCICIO 4');

let i=0;
while(i<10){
    if(i%2 == 1){
        console.log('impar '+`${i}`);
    }
    i++;
}

/*05
crear un algoritmo que devuelva el numero
mayor y menor de un array */
console.log('EJERCICIO 5');
let arrNumeros = [55,5,7,15,-5,-100,2];

function mayorMenor(arr){
    let mayor = arr[0], menor = arr[0];
    for(numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
        return [menor,mayor]; 

    /* otra solucion mas extensa:    
    let num = arr[0], mayor, menor;
    for (numero of arr){        //funciona bien con el mayor
        if(num < numero)
            mayor = numero;   
        else
            mayor = num;    
        if(num > numero)        //pero hay problemas determinando el numero menor de esta forma
            menor = numero;   
        else
            menor = num;  
    }
    return [menor,mayor];*/    
}

console.log(mayorMenor(arrNumeros));

/*06
Crear algoritmo que devuelva la cantidad 
de numeros positivos de un array */
console.log('EJERCICIO 6');

function cuantosPositivos(arr){
    let contador=0;
    for (numero of arr){
        if (numero >= 0)
            contador++;
    }
    return 'la cantidad de numeros positivos en el array es ',contador;
}

console.log(cuantosPositivos(arrNumeros));

/*07
Crear algoritmo que devuelve el precio
del producto mas el impuesto */
console.log('EJERCICIO 7');

function subtotal(precio, impuesto){
    return 'el subtotal es '+`${(precio * impuesto)+precio}`;
}

console.log(subtotal(19.90, 0.15));

/*08
crear algoritmo que tome un array de objetos y devuelva
un array de pares, un par es un array de array, ejemplo:
let pares = [
    [1, {id: 1, name: 'Nicolas'}],
    [2, {id: 2, name: 'Felipe'}],
    [3, {id: 3, name: 'Antonio'}],
];

asi deberia quedar el resultado del ejercicio.
*/
console.log('EJERCICIO 8');

let arrayDeObjetos = [
    {id: 1,
     name: 'Nicolas',
    }, 
    {id: 2,
    name: 'Felipe',
    },
    {id: 3,
    name: 'Antonio',
    },
];

function toPairs(arr){
    let nuevoArray = [];
    for (indx in arr){ 
      let elemento = arr[indx];                //creado solo para comodidad de lectura, porque no hay problema en que abajo hubiera sido [arr[indx].id, arr[indx]]
      nuevoArray[indx] = [elemento.id, elemento];       //si omitimos poner [indx] en nuevoArray[indx], solo va 
    }                                                   //a quedarse con el ultimo elemento del array original
    return nuevoArray;
}

console.log(toPairs(arrayDeObjetos));

/*09
(inversa del ejercicio anterior)
Crear algoritmo que devuelva un array de objetos en base a pares,
el primer elemento del array tendremos que incluirlo como otra 
propiedad del objeto*/
console.log('EJERCICIO 9');

let pairs = [
    [1, { name: 'Nicolas'}],
    [2, { name: 'Felipe'}],
    [3, { name: 'Antonio'}],
];

function toCollection(arr){
    let newArr = [];
    for (indx in arr){
        let elemento= arr[indx];
        newArr[indx] = elemento[1];
        newArr[indx].id = elemento[0];
    }
    return newArr;
}

console.log(toCollection(pairs));

/*10 
Crear array de longitud N, y que sus elementos
sean numeros del 1 hasta N.*/
console.log('EJERCICIO 10');

let longitud = 7;

function crearArr(n){
    let arrVacio = [];
    if (n>0){
    for (let i=1; i<=n; i++){
        arrVacio.push(i);
        //arrVacio[i] = i + 1;
    }
    return arrVacio;
    } else
    return [];
}

console.log(crearArr(longitud));

/*1*/
function total({comida, bebida}){
    let totalBebida = 0, totalComida=0, cena=0;
    for(let plato of comida)
        totalComida +=plato;
    for(let drink of bebida)
        totalBebida += drink;
    
    cena = totalBebida + totalComida;
    return console.log('el total de la bebida es: ', totalBebida, ' el total de la comida es: ', totalComida, ' la cena completa cuesta: ', cena);
}                     

let valoresComida = [2800,1300], valoresBebida = [900,650];
total({comida: valoresComida, bebida: valoresBebida}); 
