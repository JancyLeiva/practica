/*Object.entries
- let's you convert an object into an array of key-value pairs.
- let's you loop over objects easily.
- works well with URLSearchParams */

const person = {
    name: "Dominiq",
    age: 29,
};

//podemos llamar el metodo entries en el objeto global (Object) 
console.log(Object.entries(person));    //nos devuelve [Array(2), Array(2)]
//    person.entries();     //esto no funcionaria

// How to loop over the key and value pairs:
for(const [key, value] of Object.entries(person)){      //usamos la desestructuracion para extraer la clave y el valor de cada par 
    console.log(`Key: ${key} | value: ${value}`);
}

//      URLSearchParams 
// this is able to take in an array of key-value pairs. Por eso pasamos el Object.entries ahi
const params = new URLSearchParams(Object.entries(person));
//this sets all of our key value pairs for the URLSearchParams objects in one go with the use of the constructor

console.log(params.toString()); //sin el .toString nos muestra los prototipos

//      fromEntries
//Hace lo opuesto al Object.entries(), toma un array de pares de Key-value, y lo convierte en un objeto
const map1 = [['big', 'small'], [1, 0]];
const geek = Object.fromEntries(map1);
console.log(geek);

const map2 = new Map(
	[['Geek1', 'Intern'],
	['stipend', 'Works basis']]
);
const geek1 = Object.fromEntries(map2);
console.log(geek1);
