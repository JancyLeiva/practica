/*sincronia se refiere a que una parte del codigo depende de otra 
parte del codigo o proceso, normalmente  cada linea depende de la
linea superior*/

//esta es una funcion sincrona:
/*function orderPizza(){
    console.log('order pizza');
    pizza = 'pizza';
    console.log('Pizza was ordered');
}

orderPizza();
console.log(`Eat ${pizza}`);*/

//que tal si la pizza se tarda dos segundos?
function orderPizza(){
    console.log('order pizza');
    setTimeout(() => {
        pizza = 'pizza';
    },2000);
    
    console.log('Pizza was ordered');
}

orderPizza();
console.log(`Eat ${pizza}`); //por que se imprime Eat undefined?
/*porque tomo dos segundos asignar el valor a la variable pizza, y la consola no espero
pero, por que si?  si dijimos que en una sincronia una linea espera a la otra?, porque
en la invocacion si espero la ejecucion de orderPizza, ya habia sido ejecutada y terminada
antes del console.log. En la ejecucion, el setTimeout no se espera a que termine porque esa
es una funcion asincrona, no esta sincronizada con el resto */

