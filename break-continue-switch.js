/*
- Break termina la ejecucion en ese punto, y
- Continue solo se salta esa parte y continua con lo demas */
let i = 0;
while (i < 6){
    i++;
    if(i === 2){            //se salta el numero 2
        continue;
    }
    if(i === 4){           //al llegar al 4 se detiene la ejecucion del loop
        break;
    }
    console.log(i);
}

//al final solo imprime 1 y 3.

/* */

let accion = 'listar';

switch (accion){
    case 'listar':
        console.log('Accion de listar');
        break;      //si no se coloca se ejecuta lo que sigue independientemente de si la variable vale eso o no
    case 'guardar':
        console.log('Accion de guardar');
        break;
    default:        //se va a ejecutar de manera opcional, siempre y cuando no exista ningun case al que corresponda la variable
        console.log('Accion no reconocida');
}