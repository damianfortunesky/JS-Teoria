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
let Nombre = 'Esteban';

let Nombre = true;



// Usando la propiedad textContent            


// Dado el siguiente fragmento HTML:
<div id="divA">Esto <span>es</span>un texto</div>

// Lee el contenido textual:
var text = document.getElementById("divA").textContent;
// |text| contiene la cadena "Esto es un texto".

// Escribe el contenido textual:
document.getElementById("divA").textContent = "Esto es un nuevo texto";

// El HTML "divA" ahora contiene una nueva cadena:

<div id="divA">Esto es un nuevo texto</div>


// Diferencias con innerText:
   
   // textContent lee el contenido de todos los elementos, incluyendo los elementos <script> (en-US) y <style>, innerText, no

   // innerText también tiene en cuenta el estilo y no retornará el texto de elementos escondidos, mientras que textContent sí lo hará.

   // Como innerText tiene en cuenta el estilo CSS, escribirlo disparará un reflow, mientras que textContent no lo hará.

// Diferencias con innerHTML

    /* innerHTML retorna el HTML como su nombre indica. Con bastante frecuencia, para leer o escribir texto en un elemento, la gente usa innerHTML. textContent debería usarse en su lugar.
        Ya que el texto no es procesado es más probable que tenga mejor rendimiento. Además, esto evita un vector de ataques XSS. */



     
        
        