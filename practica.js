console.log('TAREA 1.1');

console.log('***********  Ejercicio 1  ***********');

const libros = [ 
    { titulo: "Cien años de soledad", autor: "Gabriel Garcia Marquez", anio:1967 }, 
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605 }, 
    {titulo: "1984", autor: "George Orwell", anio: 1949 } ];

    let autores = [];
for(let index in libros){
    autores[index] = libros[index].autor;
}

console.log(autores);    

console.log('***********  Ejercicio 2  ***********');

const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };

const {nombre, salario, antiguedad} = empleado;
let updtSalario, actual;
    if(antiguedad > 5){
       updtSalario = (salario*0.1) + salario;
       actual = {nombre, updtSalario, antiguedad};
       console.log(actual);
    }

console.log('***********  Ejercicio 3  ***********');

const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2];

let mayor=0;
for(let numero of numeros){
    if(mayor < numero){
        mayor = numero;
    }
}
console.log(`El mayor de la lista: [${numeros}] es ${mayor}`);

console.log('***********  Ejercicio 4  ***********');

let suma=0, contador=0;
for(let numero of numeros){
    if(numero%2 == 1){
        suma += numero;
        contador++;
    }
}
console.log(`El promedio de los impares de la lista es ${suma/contador}`);

console.log('***********  Ejercicio 5  ***********');

const persona = { nommbre: "Ana", edad: 25, ciudad: "SPS" };

const {nommbre, edad, ciudad} = persona;
console.log(nombre);
console.log(edad);
console.log(ciudad);

console.log('-------------------------------------');
console.log('TAREA 1.2');
console.log('|||||||||||  Ejercicio 1  |||||||||||');

const arrNumeros = [1,5,7,8,11,68,3,2];

let cuadrado = arrNumeros.map((n) => n*n);
console.log(`[${arrNumeros}] el cuadrado de esta lista es: [${cuadrado}]`);

let par = arrNumeros.filter((n) => n%2 == 0);
console.log(`los pares de lista son: [${cuadrado}]`);

console.log('|||||||||||  Ejercicio 2  |||||||||||');

function promedio(arr){
    let sum=0, cont=0, res;
    if(arr.length == 0){
        return 0;
    } else{
        for(let numero of arr){
        sum += numero;
        cont++;
    }
    return sum/cont;
}
}

console.log(promedio(arrNumeros));

console.log('|||||||||||  Ejercicio 3  |||||||||||');

const url = 'https://fakestoreapi.com/products/1';
async function getData(){
try{
    const res = await fetch(url);
    const data = await res.json();
    if(res.status !== 200){     
        throw new Error('Error al obtener los datos');
    }else {
        console.log(data);
    }
                
    } catch(error) {
        console.log('Fetch error:', error);     
    }
}
            
getData();

/*function getData(){
    return new Promise((resolve, reject) => {
        fetch(url)
                .then(response => response.json())      
                .then(data => resolve(data))
    });
}

function displayData(product){
    console.log(product);
}

getData().then(displayData).catch(error => {throw new Error('Error al obtener los datos');});*/

