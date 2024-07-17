/*
1. Converting Callbacks to Promises 
2. How to create Promises
3. How to use Promises
4. Why?
5. Different phases of Promises
6. Error handling
7. Chain multiple Promises*/

/*  1
mostrar rimas basadas en el pronostico del clima: 
(version con callback)*/
/*getWeather(displayRhyme);

function displayRhyme(data){
    if(data == 'Rainy') 
        console.log('When pressure is low, wait for rain or snow');
    if(data == 'Sunny') 
        console.log('When pressure is high, look for a blue sky');    
}
function getWeather(callback){
    setTimeout(() => {
       callback('Sunny'); 
    }, 2000);
}*/

//      2 , 3  y  4
//Promise --Maker-- : is a function that creates a promise object and returns it

//Promise --Receiver-- : is the part of the code that could be a function or not, 
//that calls the maker and receives de promise and does something with it 

//              THE PROMISE MAKER

/*The maker is an asynchronous function that instead of a value or variable, it creates 
a promise object and returns it, example:
function getWeather(){
    return new Promise()
}

La idea aqui es que como un proceso asincrono toma una incierta cantidad de tiempo,
la funcion tiene que retornar algo de manera inmediata; la promise es un objeto inmediato
que recibimos, que inidca que vendra algo mas. (Tipo, lo que me pedis no lo tengo ahora
tengo que ir a conseguirlo, pero por mientras aqui esta un promise object que voy a 
cumplir(fulfill), tan pronto como tenga tu data)

The promise object is a function where you can add actual async logic (this could be your 
backend code), this function takes to parameters, one that you can call if the promise is 
successfully fulfilled (a data that came back from the API) and it's called RESOLVE, and the
parameter is the one that you call if the promise fail (you couldn't reach the API or your 
Wifi went down), and it's called REJECT. Example:   */

function getWeather(){
    return new Promise( function(resolve, reject){
        setTimeout(() => {
    //    <<Aqui va un     
            resolve('Rainy');      //* resolve viene siendo una referencia de la funcion que le pasamos a .then
    /*    o un 
            reject();*/
            }, 1000);
    });
}


//    5
/*
When you first create a promise and return a  promise object, by default it's in a
pending state, it means we are waiting. When you call RESOLVE or REJECT, it's no 
longer pending, it gets well resolved or rejected. So,
stage 1: Pending
stage 2: Fulfilled (it was successful)
stage 3: Rejected  (its done but it couldn't accomplish what we expected it )     
         */


//     |^|^|^|^|^|^|^|^|^|^|^      THE PROMISE RECEIVER       ^|^|^|^|^|^|^|^|^|^|^|
    //              5 y 6
//  Forma 1 de construir un promise receiver:
/*getWeather().then(          //si no llamamos ningun metodo el estado es pendiente, el metodo .then es llamado cuando la promesa se resuelve(con cualquier cosa, un resolve o reject) 
    function(data) {    //then puede tomar dos parametros, en este caso este es el que se llama si la promesa devuelve un resolve
        console.log(`First param ${data}`);
    },
    function(data){         //el segundo parametro es al que llamamos si sucede un reject
        console.log(`Second param ${data}`);
    }
     );*/

//  Forma 2 de construirlo:
/*function onSuccess(data){
    console.log(`Success ${data}`);
}
function onError(error){
    console.log(`Error ${error}`);
}

getWeather().then(onSuccess, onError); */

/*             7     
(chaining) 
Haciendo nuestro receiver de la segunda forma podemos encandenar mas funciones, ejemplo:*/
function getWeatherRhyme(weather){              
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch(weather){
                case 'Sunny':
                    resolve('When pressure is high, look for a blue sky');
                    break;
                case 'Rainy':
                    resolve('When pressure is low, wait for rain or snow');
                    break;
                case 'Windy':
                    resolve('Just listen to it howl and prance');    
                default:
                    reject('Nothing Found');    
            }
        }, 1000)
    })
}

function onSuccess(data){           //luego vemos si 
    console.log(`Success ${data}`);
}
function onError(error){
    console.log(`Error ${error}`);
}

getWeather()
    .then(getWeatherRhyme)      //lo que sea que se resuelva en la promesa, va a parar a la funcion encadenada
    .then(onSuccess, onError);  //luego vemos si fue exitosa o fallida

/*otra forma de manejar los errores es que en lugar de pasarlo como segundo 
parametro en el then, podemos usar el metodo .catch :
    .catch(onError)
-> el metodo catch toma exclusivamente los reject, por eso solo toma un parametro, 
desde que no se encuentra un error handler dentro de ningun .then, saltara al .catch 
en cuanto cualquiera de las funciones en la cadena falle 

Ejemplo 2:
*/    
    

//Error handling, REJECT and .catch()
function fun1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            reject('404');
        },3000);
    }
    );
}

function fun2(){
    console.log('Function 2')
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Everything good');
        },3000);
    });
}

function successful(data){
    console.log(`Success: ${data}`);
}
function fail(errorCode){
    console.log(`ERROR ${errorCode}`);
}

/* De esta manera no llega a la fun2, porque estamos manejando el reject
a nivel global
fun1()
    .then(fun2)
    .then(successful)
    .catch(fail);      */ 

/*de esta manera, no se detiene, continua porque estamos manjeando el 
reject de manera individual*/    
/*fun1()
    .then(fun2, fail)
    .then(successful); */

//  FINALLY
function onFinally(){
    console.log('Finally we be done yo');
}

/*los finally los obtenemos incluso si la ejecucion se corta hasta el 
primer reject por el metodo .catch, asi que en caso de que queramos 
resolver algunos event listeners o limpiar algunas variables o algo 
que queramos remover, podemos hacerlo en el .finally block.*/
fun1()
    .then(fun2)
    .then(successful)
    .catch(fail)
    .finally(onFinally);

/**EJEMPLO REAL CON FETCH
 * 
 */
function fetchData(){
    return new Promise(function(resolve, reject){
        fetch('https://api.weather.gov/gridpoints/0KX/35,35/forecast')  //este fetch API llama a api.weather.gov 
            .then(response => response.json())      
            .then(data => resolve(data.properties.periods[1].shortForecast)     //resuelve los datos del pronostico del clima 
            );
    })
}

function displayData(weather){
    console.log(weather);
}

function error(err){
    console.log(`ERROR ${err}`);
}

//para llamarlo:
fetchData()
    .then(displayData)
    .catch(error);    

//////////////////////////////////////////

//paiting my nails:
/*function dry(nails){
    setTimeout(()=> {
        let done= 'the polish is dry';
        nails(done);
    }, 4000);
}

function result(done){
    console.log('Painting my nails');
    console.log(`I'm good to go, ${done}`);
}

dry(result);
console.log('Found a great color');*/

function dry(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('the polish is dry');
        },4000);
    });
}

function result(done){
            console.log('Painting my nails');
            console.log(`I'm good to go, ${done}`);
}

dry().then(result);

//////////////////////////////////////////
