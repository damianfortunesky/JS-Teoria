// var persona = {                                               // EJEMPLO 1: Objeto con metodo dentro
//     nombre:"damian",            
//     apellido:"fortunesky",                                    
//     edad: 24,
//     crecer: function(años) {this.edad += años}
// }

// persona.crecer(2); 

// console.log(persona);







// var numeroUno = 20;                               // EJEMPLO 1: Objeto con metodo dentro

// var numeroDos = 20;

// console.log (numeroUno + numeroDos);






// let resultado;

// resultado = Math.PI;  //Es el numero PI (3.141592653589793)

// resultado = Math.round; //Redondea el numero anterio (Pi)

// console.log (resultado);




// let puntaje = 10;

// puntaje++;

// console.log(puntaje);





// const nombre = 'Damian';
// const email = 'damianfortunesky@gmail.com'

// // console.log ("Nombre cliente: " + nombre + " email: " + email);

// console.log (`Nombre Cliente: ${nombre}  Email: ${email}`);






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







// // 1. querySelector

// const heading = document.querySelector("#titulo"); //Retorna  0 o 1 elemento. En este caso el  H1   con   id=titulo

// heading.textContent = "Nuevo titulo"; //Modifica el contenido del texto del elemento seleccionado

// heading.classList.add("nueva-clase"); // Te permite agregar o eliminaruna clase nueva al elemento seleccionado

//heading.classList.remove("nueva-clase");  // Eliminar clase

// console.log(heading); // Printea la variable creada








// // 2. querySelectorAll 

// const enlaces = document.querySelectorAll("a");

// console.log (enlaces[0]); // Si son muchos elementos puede elegir por posicion [0,1,2,3,etc]

// enlaces[1].textContent = "Modificado " // Modifique el titulo del enlace 1 (existen 2 enlaces en la posicion 0, 1)










//Arrow funtion

// const sumar =(n1, n2) => console.log(n1 + n2)

// sumar(2, 2);



// const apreniendo = (tecnologia) => console.log(`Aprendiendo: ${tecnologia}`);

//    apreniendo (`Javascript`);









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







// var variable = ['a', 'b', 'c'];

// variable.forEach(function(elemento) {
//   console.log(elemento);
// })








// const monitores = [
//   {nombre:'Monitor 60hz', precio: 15000 },    //ARRAY, inicia desde posicion 0, es decir, i = 0
//   {nombre:'Monitor 75hz', precio: 20000 },
//   {nombre:'Monitor 144hz', precio: 30000 },
//   {nombre:'Monitor 240hz', precio: 50000 },
// ];


// monitores.forEach(function(producto) {
//   console.log(producto);
// })










// const monitores = [
//   {nombre:'Monitor 60hz', precio: 15000 },    // ARRAY
//   {nombre:'Monitor 75hz', precio: 20000 },
//   {nombre:'Monitor 144hz', precio: 30000 },
//   {nombre:'Monitor 240hz', precio: 50000 },
// ];

// monitores.forEach() {
//   console.log ('Se ejecuta una vez por cada elemento del array')





// const monitores = [
//   {nombre:'Monitor 60hz', precio: 15000 },    // ARRAY
//   {nombre:'Monitor 75hz', precio: 20000 },
//   {nombre:'Monitor 144hz', precio: 30000 },
//   {nombre:'Monitor 240hz', precio: 50000 },
// ];


// monitores.map( producto => console.log(producto.nombre));




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














const boton = document.querySelector('#boton'); 
boton.AddEventListener('click', function() {     // Asi podemos registrar un evento vinculado a la VAR "boton". Cuando se registra el evento "click", se ejecuta una funcion
  console.log('diste click');
} );        