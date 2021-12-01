// VARIABLES

var PERRO = 'Golden Retriever'; //Inciar Varible (var PERRO) y asignarle valor ('Golden Retriever')

console.log (PERRO);


var GATO; //Iniciar variable SIN asignarlo valor

console.log (GATO);



GATO = true; // Le asigno un valor booleano, aparece en consola como "true"

console.log (GATO);


var PAJARO = 'Canario', //Se inician tres variable al mismo tiempo con su respectivo valor.
    PEZ = 'Tiburon',
    MAMIFERO = 'Ballena';

console.log (PAJARO);

console.log (PEZ);

console.log (MAMIFERO);


//REGLAS DE LAS VARIABLES


// 1. Pueden contener caracteres (- / ? ¡ ) y numeros pero no iniciar con ellos. Ej Producto1 (si); 1Producto (no). ( "_" Guion bajo si permite usarse al principio).

//ESTILOS PARA DEFINIR VARIBALES

var nombreAfiliado ='Esteban' // El mas usado en JS. Se llama: Camelcase

var nombre_afiliado = 'Damian' // Se llama: Underscore

var NombreAfiliado = 'Nadia' // Se llama: Pascal Case


// VARIABLES  LET y CONST 


const Nombre = 'Damian' // Son constantes, se debe si o si asignarle valor al momento de definirla y no puede carmbiarse su valor luego.


let Nombre; 
                          // Let se puede definir sin asignarle valor, se puede tambien, cambiar un valor previamente asignardo. LET y VAR son iguales.
let Nombre = 'Esteban'

let Nombre = true;