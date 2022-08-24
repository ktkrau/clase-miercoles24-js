function hello_world(){
    console.log("Hello World");
    console.log("Cómo estás");

}
hello_world()

function agregaLista(){
    lista.push("a")
}

var lista = ["a"];

agregaLista();
console.log(lista)

function hola_mundo(nombre){ 
    console.log("Hola "+ nombre)
}
hola_mundo("Katherine")
hola_mundo("Juana")

function hola(nombre,apellido){
    console.log("Hola "+nombre+" "+apellido)
}
hola("Elena", "De Troya")

function multiplicar(num1,num2){
    var total = num1 * num2;
    return total; // si regresa un valor tengo que recibir este valor
}

var total_multiplicacion = multiplicar(4,5);  
console.log(total_multiplicacion) 



