var gastos = [100, 5, 45,10]; // una lista en la cual guardamos mas de un valor

var hobbies = ["Hacer ejercicio", "Leer", "Ver series", "Comer"]
var animales=["Perro", "Gato", "Pajaro"]

console.log("El primer hobbie de la lista es: "+hobbies[0])


animales.push("Pez"); // agregando un elemento más a mi lista -- .pop elimina el ultimo elemento de la lista
console.log("Tengo "+animales.length+ " animales")

//quiero saber la cantidad total de gastos:
/* var total_gastos = gastos[0] + gastos[1] + gastos[2] + gastos [3] */
var total_gastos=0;
for(var i=0;i<gastos.length; i++){
    total_gastos += gastos[i];
}
console.log(total_gastos)

//imprimir todos los hobbies

for(var i=0; i<hobbies.length;i++){
    console.log(hobbies[i])
}
console.log("El ultimo hobbie de la lista es: "+ hobbies[hobbies.length-1])
//imprimir mis animales al reves
for(var i=animales.length-1;i>-1;i--){
    console.log(animales[i])
}

