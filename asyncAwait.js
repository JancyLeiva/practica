/*1. Async y Await deben usarse juntos, excepto en dos escenarios;
    - await puede ser usado sin async con los JS modules
    - Chrome DevTools Console permite el uso de await sin async
    
2. async/await solo afecta al Promise Receiver no al Promise Creator, 
por lo tanto no cambiamos la parte del creador, solo cambia la parte 
que maneja esa data que se recibe.

3. Podemos poner await frente a cualquier funcion que retorne una promesa

4. Casi cualquier funcion puede convertirse en asincrona con el async,
ejemplo:   */

/*const me = {
    sayHello(){
        return 'I am Qoli';
    }
}
me.sayHello();  //retorna: 'I am Qoli'*/

/*const me = {
    async sayHello(){
        return 'I am Qoli';
    }
}
me.sayHello();  //retorna: Promise{ 'I am Qoli' }*/
/*Esto significa que podemos desarrollar cualquier operacion asincrona
dentro y esperar por ello, no tenemos que, obligatoriamente, pero podemos.

const me = {
    async sayHello(){
        const result = await callSomeAPI();
        return 'I am Qoli';
    }
*/
/*
5. Todas las funciones async retornan Promise por defecto, como vimos en 
el ejemplo anterior.

6. Error handling with try/catch */



function getData(){
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(46)
        }, 1);
    });
}
/* Solo de esta manera agregando await nada mas no funcionaria porque
await solo es valido si esta dentro de un una async function
const result = await getData();
console.log(result);
*/

/*La manera de hacer una funcion asincrona es simplemente poner async 
frente a ella.  
Podemos llamar a getData() como a cualquier funcion sincrona y podemos
asignarla a una variable, pero para que obtenga la promesa agregamos un 
await */
async function start(){
    const result = await getData();
    console.log(result);
}

start();

//aun podriamos hacerlo de esta manera:
async function start2(){
    getData()
            .then((result)=>{
                console.log(result);
            })
            .catch()
}

//ejemplo real con fetch:

/*      FETCH       
fetch is a native browser feature and you can use it to call backend endpoints
and receive data.
Utilizaremos fetch en lugar del setTimeout: */
async function start(){
    const data = await fetch('https://fakestoreapi.com/products/1');  //esperaremos por el resultado de fetch
    const result = await data.json();
    console.log(result);
}

//si hacemos esto con .then se veria asi:
async function start2(){
    fetch('https://fakestoreapi.com/products/1') //esperaremos por el resultado de fetch
        .then((data) => data.json())
        .then((result)=>{
            console.log(result);
        })
}


//Error handling with try/catch:
function getDataP(){
    return new Promise(function(resolve,reject) {
        setTimeout(()=>{
            //resolve('Here is your data');
            reject('Something went wrong!');
        },1);
    });
}

async function start3(){
    try{
        const result = await getDataP();
        console.log('Success ${result}');
    } catch (error) {
        console.log('ERROR: ${error}');
    }   
}

/*
Esto esta mal porque si nos encontramos en un reject, obtendremos lo del
catch, pero tambien lo que lo del escenario de que todo fue bien(lo que
se muestra al estar en resolve), esto nos puede generar bugs.
async function start4(){
    const result = await getDataP()
                                  .catch(error => {
                                    console.log('ERROR: ${error}');
                                  })
                                  console.log(result);
} */


//podemos separar por completo los handlers                                   
function onSuccess(){
    console.log(`Success ${result}`);
}

function onFailure(){
    console.log(`ERROR: ${error}`);
}

async function start5(){
    try{
        const result = await getDataP();
        onSuccess();
    } catch (error) {
        console.log('ERROR: ${error}');
        onFailure();
    }   
}


/*La razon principal por la que se usa el async/await es para hacer el 
codigo mas legible*/

function callSomeAPI(callback){
    setTimeout(()=>{
        callback(fetch('https://fakestoreapi.com/products/1'));
    },2000)
}

function callback(data){
    console.log(data);
}

callSomeAPI(callback);
console.log('request some data');
console.log('Do other stuff');

function apiProm(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve(fetch('https://fakestoreapi.com/products/1'));
        },3000);
    });
}

function error(err){
    console.log(`ERROR ${err}`);
}

apiProm()
        .then((data)=>{console.log(data.json())})
        .catch(error);
