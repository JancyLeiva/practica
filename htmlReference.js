//<h1 id="header">Javascript</h1>   :
let header = document.getElementById('header'); //guardando en una variable el elemento de document con el Id 'header'
header.innerText = 'Overridden';          //el .inner es para poder obtener y modificar lo que esta dentro de ese elemento


//<a id="link" href="https://www.youtube.com/watch?v=oNIvnCNzAqU">Youtube</a>   :
let link = document.getElementById('link');
link.href = 'https://amazon.com';

//<h2 id="subtitulo">Input</h2>
const subtitulo = document.querySelectorAll('#subtitulo');  //el # indica que es un id,

subtitulo[0].innerText = 'Referencia por medio de querySelectorAll'; //como el querySelectorAll trae todos los elementos con
//el mismo name(cuando el indicador que usamos es name no ponemos el # al inicio) o id, la unica manera despues de referirnos
//a un elemento en especifico es por la posicion, este es el 0, o sea el primero que encontramos de arriba hacia abajo

//   EVENT LISTENERS
/*Estos basicamente nos permiten monitorear ciertos elementos para poder ejecutar funciones cuando el usuario 
interactue con estos elementos.

--  POST Form Data as Json with fetch API in JavaScript*/

