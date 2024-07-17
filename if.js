/*estructura:
if (condicion){
    expresion
}   las llaves no son necesarias si solo sera una expresion*/

let edad =  15;
if(edad > 17)
    console.log('usuario mayor de edad, puede ver la pelicula solo');
else if (edad > 13)
    console.log('Usuario puede ver la pelicula si esta en compañia de un adulto');
else 
    console.log('usuario restringido')


