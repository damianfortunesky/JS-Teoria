// Ejecicio 1

// var persona = {                                               
//     nombre:"damian",            
//     apellido:"fortunesky",                                    
//     edad: 24,
//     crecer: function(años) {this.edad += años}
// }

// persona.crecer(2); 

// console.log(persona);




// Ejecicio 2

// var numeroUno = 20;                              

// var numeroDos = 20;

// console.log (numeroUno + numeroDos);



// Ejecicio 3


// let resultado;

// resultado = Math.PI;  //Es el numero PI (3.141592653589793)

// resultado = Math.round; //Redondea el numero anterio (Pi)

// console.log (resultado);



// Ejecicio 4

// let puntaje = 10;

// puntaje++;

// console.log(puntaje);



// Ejecicio 5

// const nombre = 'Damian';
// const email = 'damianfortunesky@gmail.com'

// // console.log ("Nombre cliente: " + nombre + " email: " + email);

// console.log (`Nombre Cliente: ${nombre}  Email: ${email}`);



// Ejecicio 6

// let total = 0; // Creo variable total  = 0

// function AgregarAlCarrito (precio) {   //Esta funcion retorna total (0) + el incremento (viene dado de parametro precio)
//   return total += precio;
// }

// function CalcularImpuestos (total) {  //Multiplica el parametro "total" por 1,15 para calcular los impuestos agregados al precio
//   return 1.15 * total;
// }

// total = AgregarAlCarrito (200);
// total = AgregarAlCarrito (400);   // Reasigna el valor del parametro total a medida que el usuario agrega productos al carrito (precio de los mismos)
// total = AgregarAlCarrito (600);

// console.log(total); // Printea en consola el valor del parametro total


// const TotalAPagar = CalcularImpuestos(total);

// console.log(TotalAPagar);



// Ejecicio 7

// // 1. querySelector

// const heading = document.querySelector("#titulo"); //Retorna  0 o 1 elemento. En este caso el  H1   con   id=titulo

// heading.textContent = "Nuevo titulo"; //Modifica el contenido del texto del elemento seleccionado

// heading.classList.add("nueva-clase"); // Te permite agregar o eliminaruna clase nueva al elemento seleccionado

//heading.classList.remove("nueva-clase");  // Eliminar clase

// console.log(heading); // Printea la variable creada




// Ejecicio 8

// // 2. querySelectorAll 

// const enlaces = document.querySelectorAll("a");

// console.log (enlaces[0]); // Si son muchos elementos puede elegir por posicion [0,1,2,3,etc]

// enlaces[1].textContent = "Modificado " // Modifique el titulo del enlace 1 (existen 2 enlaces en la posicion 0, 1)




// Ejecicio 9

//Arrow funtion

// const sumar =(n1, n2) => console.log(n1 + n2)

// sumar(2, 2);


// const apreniendo = (tecnologia) => console.log(`Aprendiendo: ${tecnologia}`);

//    apreniendo (`Javascript`);



// Ejecicio 10

// //Iterando con for loop un arreglo/array

// const monitores = [
//    {nombre:'Monitor 60hz', precio: 15000 },    //ARRAY, inicia desde posicion 0, es decir, i = 0
//    {nombre:'Monitor 75hz', precio: 20000 },
//    {nombre:'Monitor 144hz', precio: 30000 },
//    {nombre:'Monitor 240hz', precio: 50000 },
//  ];

//  for(i = 0; i < monitores.length; i++ ) {    //El condicional implica que el for loop recorre todo el arreglo y muestra el numero de indice (i)
//    console.log (monitores[i].nombre );       // Printea en consola todos los elementos del array con el nombre (por el metodo .nombre)
//  }





// Ejecicio 11

// const monitores = [
//   {nombre:'Monitor 60hz', precio: 15000 },    //ARRAY, inicia desde posicion 0, es decir, i = 0
//   {nombre:'Monitor 75hz', precio: 20000 },
//   {nombre:'Monitor 144hz', precio: 30000 },
//   {nombre:'Monitor 240hz', precio: 50000 },
// ];


// monitores.forEach(function(producto) {
//   console.log(producto);
// })

// monitores.map( producto => console.log(producto.nombre));



// Ejecicio 12

// const reservacion = {
//   nombre: 'damian',
//   apellido: 'fortunesky',
//   deuda: 5000,
//   abonado: false,
//   informacion: function (){
//     console.log(`El cliente ${nombre} reservo y el total a pagar es de ${total}`);
//   }
// }

// console.log(reservacion);



// Ejecicio 13

// const boton = document.querySelector('#boton'); 
// boton.AddEventListener('click', function() {     // Asi podemos registrar un evento vinculado a la VAR "boton". Cuando se registra el evento "click", se ejecuta una funcion
//   console.log('diste click');
// } );     


// Constructor

// function usuario(nombre, edad, calle) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.calle = calle;
// };

// const persona1 = new persona ("Homero", 40, "Av siempre viva");


// Objeto con prompt


// const persona = {
//   nombre: prompt("Ingrese nombre"),
//   edad: prompt("Ingrese edad"),
// };


// Ejecicio 14 

/*let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', establecerClima);

function establecerClima() {
  let eleccion = seleccionar.value;

  if (eleccion === 'soleado') {
    parrafo.textContent = 'El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado.';
  } else if (eleccion === 'lluvioso') {
    parrafo.textContent = 'Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.';
  } else if (eleccion === 'nevando') {
    parrafo.textContent = 'Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.';
  } else if (eleccion === 'nublado') {
    parrafo.textContent = 'No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.';
  } else {
    parrafo.textContent = '';
  }
}*/



// Ejercicio 15

/*EXPLICACION JUEGO
En el juego de casino Blackjack, un jugador puede determinar si tiene una ventaja en la siguiente mano sobre la casa llevando la cuenta del número relativo de cartas altas y bajas que quedan en la baraja. 
Esto se llama cuenta de tarjetas.

Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla. Cuando el conteo es positivo, el jugador debería apostar alto.
Cuando el conteo da 0 o negativo, el jugador debería apostar bajo.

Cambios del conteo	Cartas
+1			2, 3, 4, 5, 6
0			7, 8, 9
-1			10, 'J', 'Q', 'K', 'A'

CONSIGNA

Escribirás una función para contar cartas. Recibirá un parámetro card (carta) que puede ser un número o una cadena y aumentar o reducir la variable global count (conteo) de acuerdo al valor de la carta (observa la tabla).
La función devolverá una cadena con el conteo actual y la cadena Bet (Apuesta) si el conteo es positivo, o Hold (Espera) si el conteo es cero o negativo. El conteo actual y la decisión del jugador (Bet o Hold) deben estar
separados por un solo espacio.


SOLUCION*/

/*let count = 0;

function ContarCartas(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');*/



// Ejercicio 16

/*const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes){
  
  if(strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2 ){
    return names[1];
  }else if (strokes <= par - 1 ){
    return names[2];
  }else if (strokes <= par){
    return names[3];
  }else if (strokes <= par + 1 ){
    return names[4];
  }else if (strokes <= par + 2 ){
    return names[5];
  } else {
    return names[6];
  }

}

golfScore(5, 4);*/