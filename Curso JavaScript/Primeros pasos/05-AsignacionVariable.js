// Const: Espacio de memoria  que luego de asignada no cambia enb el tiempo
const valorPasaje = "1650";
console.log(valorPasaje);

const nombrePasajero = "leonardo";
const apellidoPasajero = "Lacruz";
console.log(nombrePasajero);
console.log(apellidoPasajero);


// var: espacio en memoria que puede cambiar durante la ejecucuion del programa y tiene alcance en cualquier  bloque o sudbloque de codigo
var nombreCompletoDelPasejero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoDelPasejero)
{
    // let: espacio en memoria que puede cambiar durante la ejecucuion del programa  y su alcance es dentro de el mismo bloque de codigo
let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log("Variable con let " + nombreCompletoPasajero)
console.log("Variable con var " + nombreCompletoDelPasejero)

}

console.log()
console.log("Variable con let " + nombreCompletoPasajero)
console.log("Variable con var " + nombreCompletoDelPasejero)


