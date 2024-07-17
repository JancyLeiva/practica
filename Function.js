/* Existen un constructor llamado function, y ciertas propiedades que 
nos pueden servir para reutilizar codigo*/
function Punto(x, y){
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('Dibujando...');}  //dibujar es un metodo
}

//crear una funcion utilizando el constructor function:
    //hacer esto no es de buena practica pero podriamos encontrarnos codigo asi
/*const Point = new Function('x', 'y', `
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('Dibujando...');}
    `);

    const p = new Point(1, 2);
    console.log(p);*/

//metodo call que tienen las funciones:
Punto.call({}, 1, 2);   //el primer argumento es el contexto de this, y luego le pasamos los 
                        //argumentos de la funcion que estamos llamando con call


