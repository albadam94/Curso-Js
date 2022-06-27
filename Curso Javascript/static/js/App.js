/*console.log('Hello World') imprime en consola;
window.alert('Hello mundo desde javascript'); Salta alerta en pantalla
document.write('Hello World'); aparece en el documento*/

/*let x, y, z;
x = 10;
y = 20;
z = x + y;
window.alert(z);*/

/*= asigna
=== igual a valor y tipo*/

/* Bloque 
{
    let x = 10;
}
console.log(x); no imprime nada por estar dentro de bloque*/

/*const PI = 3.1416;//constante 
PI = 3;//no se puede cambiar el valor de la constante*/
/*
const carrito = [ 'manzanas', 'peras', 'uvas' ];

carrito.push('sandia');//agrega un elemento al final del arreglo
carrito.pop();//elimina el ultimo elemento del arreglo
carrito.unshift('naranja');//agrega un elemento al inicio del arreglo
carrito.shift();//elimina el primer elemento del arreglo
carrito.splice(1, 1);//elimina un elemento del arreglo
carrito.splice(1, 0, 'sandia');//agrega un elemento en una posicion del arreglo
carrito.splice(1, 0, 'sandia', 'manzanas');//agrega varios elementos en una posicion del arreglo
*/

/*
const compra = { tipo:"Online", modelo:"Samsung", precio:20000 }; //Diccionario

compra.persona = "Juan";//agrega una propiedad al diccionario*/

/*
let length = 16; // Numero
let name="Brayan"; // String
let x = { lastname: 'Albadam', name: 'Brayan', length: 8 }; // Objeto */

/*  Funciones
let p1=1
let p2=3

function nombreFuncion (p1,p2){  //p1 y p2 son parametros
    return p1+p2;
}

console.log(nombreFuncion(p1,p2));   */  //imprime el resultado de la funcion


/*
let carro= "Mercedez"
let car ={tipo: "Mercedez", modelo: "GLC", precio: 20000, color:"Negro"} // Objeto

console.log(car.modelo)*/

/* Eventos

function suma(p1,p2){
    return p1+p2
}
console.log(suma) */

/*para convertir numeros string a normal
let lista={curso_id:'4',nombre:'python'}

let c = 4
curso_id = parseInt (lista.curso_id)

console.log(curso_id)*/

/*let x = Number.max_value;

console.log(x)*/

/*const carros = ['audi', 'bmw', 'mercedes', 'toyota']; //matriz=Lista de objetos
//console.log(carros[2]); //imprime el primer elemento de la matriz
//console.log(carros.length); //imprime el tamaño de la matriz
for (let i = 0; i < carros.length; i++ ){
    console.log(carros[i]);
}*/


/*const carros = ['audi', 'bmw', 'mercedes', 'toyota']; //matriz=Lista de objeto
//carros.map(carro => (console.log(carro))); //imprime el primer elemento de la matriz
*/


/*Fechas
new Date().getFullYear()
console.log(new Date().getFullYear())*/

/* Matematicas
console.log(Math.random())
console.log(Math.floor(Math.random()*10))
console.log(Math.ceil(Math.random()*10))*/


//Condicionales
/*
let x=''
let y = 7

if(x !== y || !x){
    console.log('Hola')
}else if ( x !== y){
    console.log('mundo')
}
*/

//Switch
/*
let x = 12
let y = 7

switch( ) {
    case x:
        //codigo
        console.log('apagado')
        break
    case y: 
        //codigo
        console.log('prendido')
        break    
        default:
            console.log('sin valor')
}*/


//Ciclo For
/*
const carros = ['audi','mercedez','bmw','lexus' ]

for (let i=0;i<carros.length; i++){
    console.log(i)
} */

//Ciclo For In Range
/*
const persona={nombre:'brayan', edad:'27',fecha:'02'}

for(nombre in persona){
    console.log(nombre)
}
*/

// Iteraccion ciclo While
/*
let x = 1

while(x<10){
    console.log(x)
    x++
}
*/

//Do while
/*
let x = 1

do{
    console.log(x)
    x++
}while (x<10)

*/

// Continue - Break
/*
const comidas = ['manzana','pera', 'banana', 'durazno','Fresa']

for (let i = 0; i<comida.length;i++){
    if ( i===3){
        continue
    }
    console.log(i)
}

for(const comida of comidas){
    console.log(comida)
}
*/
/*
//Crear Set
const letters = new Set();

letters.add("a")
letters.add("b")
letters.add("c")

//Crear Variables
const a="a";
const b="b";
const c="c"

//add variables al Set

letters.add(a);
letters.add(b);
letters.add(c);*/


//Mapas
/*
const fruits = new Map();

fruits.set("apples",500)

const fruits= new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);

fruits.set("apples",200);

console.log(fruits)*/

/*
//Type of
let x = ['5.6']

console.log(typeof(x))
//Retorna el tipo de dato
*/



//Conversion tipo de datos
/*
const blogPost={titulo:'titulo',contenido:'contenido',id:'2'}


id=Number(blogPost.id) 
console.log(typeof(id))//2
*/


//Errores
/*
let x = 4
let y = 5

try{

}catch(err){

}
/*
*/


/*
//Funcion de flecha
const nombreFuncion = (a,b)=>{
    //codigo 
    a*b
}
console.log(nombreFuncion)

*/


/*//Clases
class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}

let miCarro1=new Car("Ford",2014)
let miCarro2=new Car("mercedez",2020)
*/


//Json
/*
{ 
    "posts"[
{
    "title":"Javascript"
}
    ]
}*/


//Objetos y Definiciones
/*
let x = new String('objeto')
console.log(typeof(x))
/*---------------------------------------
const compras={leche:"500",harina:"1000"} //Esto es un objeto
compras["leche"]
*/

//Metodos
/*
const persona={
    firstName:"Brayan",
    lastName:"Albadam",
    id:005,
    fullname: function(){
        return(this.firstName+" "+this.lastName).toUpperCase();
    
    }
};

console.log(person.fullName())*/



//Constructores
/*
function Person(first,last,age,eye){
    this.firstName=first;
    this.lastName=last;
    this,age=age;
    this.eyeColor=eye;
    this.nacionalidad=function(){
        return "Colombia"
    }
}
const femenino = new Person("Tatiana","A",40,"verdes" )
const masculino = new Person("Brayan", "A",30,"cafe")
hombre.nacionalidad = function(){
}*/


/*
//Callbacks/*
function primera(){
    return "Hola"
}
function segunda(){
    return "mundo"
}

console.log(primera)
*/


/*
//Async
function primera(){
    window.alert("Hola")
}
function segunda(){
    window.alert("Mundo")
}

setTimeout(()=>{
    primera( )
},[2000] )
*/


//Promesas
/*
function miMostrador(some){
   console.log(some)
}

let miPromesa=new promise(function(miResolucion,miError){
    let x=0;

    if (x==0){
        miResolucion("OK");
    }else{
        miError("Error");
    }
});



miPromesa.then(
    function(value) { miMostrador(value); },
    function(error){ miMostrador(error);}
)
*/

//Async y Await
/*
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
        setTimeout (function () { resolve("Javascript");}, 3000);
    });
    let promise = await myPromise;
    console.log(promise)
    }
    myDisplay();

*/

//fetch API
/*
fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8',{
    method: 'GET',
    headers:{
        'content-Type': 'application/json'
    }
})
.then (response => response.json( ))
.then(data => console.log(data));
*/


//Geolocalizacion
/*
if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
}else{
    console.log("Geolocalizacion no soportada en el navegador");
}

function showPosition(position){
    console.log("Latitude: "+position.coords.latitude+"Longitude: "+position.coords.longitude);
}*/







































































