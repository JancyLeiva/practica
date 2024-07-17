/*
Los ejemplos mas comunes de asincronia son:
Data fetching
Calling Backend APIs
Loading Files
Timers & Intervals

son procesos que siempre toman tiempo. 
*/

/*Ejemplo 1: Ordenar una pizza y llamar a un amigo mientras llega pizza.
 */
console.log('--- Synchronous  ---');
let pizza;
function orderPizza(){
    console.log('Order pizza');
    setTimeout(() => {
        pizza = 'pizza';
        console.log(`${pizza} is ready`);
    }, 2000);
    console.log('Pizza was ordered');
}

orderPizza();
console.log('Call a friend');
console.log(`Eat ${pizza}`);


/* en resumen tenemos partes de nuestro codigo que son un poco mas lentas,
y alguno de nuestro codigo depende de que la ejecucion de esa parte haya 
terminado, para asi poderse ejecutar  */

/*Esto podemos solucionarlo asi:
- la funcion orderPizza en realidad deberia estar conteniendo solo la accion
de ordenar la pizza, asi que podemos hacer uso del CALLBACK ahi. */
console.log('--- Asynchronous  ---');

function order(callback) {          //la funcion es sincrona, pero
    setTimeout(() => {              //lo que pasa dentro es asincrono
        const piza = 'piza';
        callback(piza);
    }, 2000);
}

function pizzaReady(piza){          
    console.log(`Eat the ${piza}`);     //para el momento en que esto se llame, la variable ya habra sido resulta
}                                   //*los callbacks son una reaccion del proceso de la funcion asincrona completada

order(pizzaReady);          //cuando este resuelta la funcion orderPizza, que llame a la funcion callback 
console.log('Call a friend');   //una vez le hayamos pedido a la funcion orderPizza que nos avise cuando se haya resulto, hacemos otra tarea 'call a friend'

/*una cosa puede pasar independientemente de la otra, porque no estan sincronizadas */

//Intentando recrearlo sola:
/*function orderPzza(call){
    console.log('ordered a pizza');
    setTimeout(() => {
    let pizzaz = 'pizza';
    call(pizzaz);
    }, 2000);
}


deliver = (pizza) => {
 console.log(`${pizza} was delivered`);   
}

orderPzza(deliver);
console.log(`Called a friend while waiting`);*/
 
/* los callbacks se asemejan a agregar event listeners, ejemplo:
window.addEventListener('click', function(){
console.log('Clicked')
});

podriamos verlo asi:
window.addEventListener('click', callback);
    function callback(){
    console.log('clicked');
 }
*/

/*Pero hay un problema con los callbacks al que llamamos callback hell;
el problema es que si tenemos mas de una cosa que dependen una de la otra
puede volverse algo complicado, por ejemplo: */
function thing1 (callback){
    callback();
}

function thing2 (callback){
    callback();
}

function thing3 (callback){
    callback();
}

thing1 (()=>{       //una vez la thing1 este terminada que se llame a la thing2
    thing2(()=>{    //una vez la thing2 haya acabado que llame a la thing3
        thing3()    //(aqui falta pasarle un callback a la thing3)
    })
})

/*eso dio paso a que se crearan las promesas  */
