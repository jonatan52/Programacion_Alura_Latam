const listaDePaises = new Array ("Colombia", "Brasil", "Argentina");
console.log(listaDePaises);

// Forma abreviada de crear un Array
const ciudadesDisponibles = ["Cartagena", "Bucaramnga", "Pereira"];
console.log(ciudadesDisponibles );

//push: Agrega un nuevo elemnto al final del arreglo
listaDePaises.push("Nicaragua"); 
console.log(listaDePaises);

//Mostrar elementos por posicion
console.log(listaDePaises[0])

//length: muetra la cantidad de elementos que tiene la lista
console.log(`La lista contiene ${listaDePaises.length} elementos`); 

// Remueve el primer elemto de la lista
listaDePaises.shift();

// Remueve el ultimo elemto de la lista
listaDePaises.pop();

//
listaDePaises.filter();