/* ANOTACIONES SOBRE EL LENGUAJE:

  1.En un lenguaje de scripts (secuencia de comandos).

  2.El desarrollador escribe "codigo fuente", es lo que rige el funcionamiento de un programa.

  3.Es un lenguaje interpretado debido a que no existe una compilacion posterior del codigo fuente,
  el codigo fuente se mantiene sin cambios y se ejecuta por medio de un interprete. Los scripts son en su mayoria interpretados.
  
  4.Los navegadores poseen interpretes (JScript para edge; SpiderMonkey para mozilla firefox; Motor V8 para Chrome).

  5.Es un lenguaje orientado a objetos, es decir, contiene elementos llamados "objetos" y los mismo poseen caracteristicas especificas y formas de uso varidas.
  
  6.Sirve en el desarrollo web para mejorar la interaccion del usuario, crear animaciones y ayudas a la navegacion.
  Tambien se usa para crear extensiones para diferentes programas y crear aplicaciones.
  
  7.Javascript es un lenguaje de scripts del lado del cliente, PHP es un lenguaje de scripts del lado del servidor (son cosas distintas).
  
  8.En javascript el ";" al final no es obligatorio, en otros lenguajes, si.

*/




// VARIABLES



  /* ¿Que es una variable?: Es un espacio de almacenamiento en un ordenador para grabar/guardar cualquier tipo de dato.
   
 Una vez declarada la variable ya se puede almacenar cualquier dato. Se declara asignando un nombre y un valor (Ej: var nombre = "valor" )

 TIPOS DE VARIABLES : 1.Tipo numerico (1,2,3)
                     2.Cadenas de texto o strings ("texto")
                     3.Booleanos ("true/false")

 OPERADORES ARITMETICOS : +(SUMA); -(RESTA); *(MULTIPLICACION); /(DIVISION); %(MODULO); */


 /* En JavaScript existen tres formas de crear variables en la nueva versión:

 VAR:(la mas vieja y tradicinal);

 CONST:(VALORES CONSTANTES);

 LET:(VALORES QUE PUEDEN SER CAMBIADOS); */

 var variable; /* Aqui se incio la variable pero no se le asigno valor, a difencia de la anterior */

 var variable = "Valor de la variable" /* defino la variable con "var", luego le defino el nombre de la misma con "producto", luego le defino el valor ="Valor de la varibale" */


 const variable = "valor asignado"; // La variable const requiere si o si que se defina la variable con su nombre y asignarle un valor. 


 lvariableet ; // La variable let puede solo definirse con un nombre y no agregarle valor. Su valor tambien puede ser reasignado en cualquier momento.

 let variable = "valor asignado"; //asignarle valor de forma inmediata no es necesario





// TIPOS DE DATOS


 /* JavaScript es un lenguaje de tipado débil o dinámico. Esto significa que no es necesario declarar el tipo de variable antes de usarla.

  1. Estring (cadena de texto). Tienen posicion, el primer caracter es el "0" de izq a drcha. Ej: "hola mundo"

  2. Number (numeros). Es el unico tipo de dato "number", engloba numeros enteros y flotantes.
 
  3. Boolean (valor booleano). Son una entidad logica. Ej : true, False

  4. Object (Valor en memoria que se puede acceder por un identificador). En JavaScript los objetos pueden ser vistos como una colección de propiedades. 
  
      Ej : var persona = { nombre: "Damian",
                           edad: "24",
                           ciudad: "Santa Rosa"
                          };

  5.Null (Es un valor asignado que tiene "no valor"). Valor: null.

  6.Undefined (una variable a la que no se le asigna valor alguno tiene valor undefined). Ej : var producto; ---> console.log(producto) = undefined
  
  7. Symbol. Es un tipo de datos cuyos valores son únicos e inmutables. Dichos valores pueden ser utilizados como identificadores (claves) de las propiedades de los objetos.

 
 
  Estos TIPOS DE DATOS se dividen en 2 grupos:
    
    1. PRIMITIVOS: Los valores primitivos son inmutables, no pueden cambiar de valor. No tienen metodos ni propiedades. Estring, Number, Boolean y Symbol son primitivos (es decir, inmutables).

    2. DE OBJETO: Los valores de objetos son mutables, puede cambiar de valor

    OBS: Con el operador "TYPEOF" podemos ver que tipo de dato es con el que estamos trabajando.  Ej :   var mascota = "luna"; --->    console.log (typeof mascota)   ---> "string"

    
    
    OBJET WRAPPER:

    Cuando se invoca un método o propiedad en un dato primitivo, javascript crea una instancia de su versión en objeto o “wrapper object” por un corto periodo para poder devolver su valor y después la destruye.

    Digamos que Javascript convierte los tipos primitivos en objetos entre bastidores sin que te des cuenta.

    Excepto para null y undefined, todos los valores primitivos tienen lo que se conoce como primitive wrapper object, lo que crea la versión en Objeto de su equivalente primitivo.

    Podemos crear objetos wrapper explícitamente utilizando sus constructores definidos:

      String para el primitivo string.
      Number para el primitivo number.
      Boolean para el primitivo Boolean.
      Symbol para el primitivo Symbol.

    
      EJ: var a = "tarta de plátano"; // primitivo
          var b = new String("tarta de plátano"); // objeto     
*/





// METODOS


 /*  .Un método es una propiedad de tipo función de un objeto. (DEFINICION IMPORTANTE) (VER EJEMPLO 1 MAS ABAJO).

    .Todos los objetos predefinidos por javascript tienen sus propios métodos. 
    
    .Los métodos sirven para hacer acciones. Ejemplos como estas son, una ventana emergente, modificar las propiedades de un objeto, añadir elementos a una lista, quitarlos,
    
      transformar un string en un número entero o decimal, etc.

    .Los strings, los números, los arrays y las variables de tipo fecha son en realidad objetos aunque nosotros
    
      los hayamos estado usando sin tenerlo en cuenta. Por lo tanto también tienen métodos.                            

    


    1.METODOS NUMERICOS: parseInt(transforma un string en número entero. En caso de ser un texto como por ejemplo 5Kg nos devolvería el número 5);

                         parseFloat(hace lo mismo que parseInt pero en este caso con un número decimal);

                         toFixed()

                         toPrecision()

                         toString ()


    2.METODOS STRING INDISPENSABLES: indexOf (devuelve el primer elemento de un string que sea igual al valor indicado dentro del paréntesis. En caso de no encontrarlo devuelve -1.); 
      
                                     lastIndexOf (hace lo mismo que indexOf() pero empezando por el final de un string);

                                     slice(x,y) (devuelve los y caracteres a partir de la posición x. El primer carácter siempre ocupa la posición 0);

                                     split (crea una lista de elementos a partir de un string separando los elementos por el carácter indicado dentro del paréntesis.);

      
    3.METODOS ARRAYS INDISPENSABLES: length (Devuelve el número de elementos de una lista), (Primer elemento en posicion 0, ultimo elemento en posicion -1);

                                     join [junta todos los elementos de una lista separados por el carácter que indiquemos dentro del paréntesis (entre comillas porqué será un string)];
    
                                     pop (elimina el último elemento de una lista y hace que la lista quede disminuida en una posición su longitud.); 
    
                                     sort (ordena alfabéticamente o numéricamente los elementos de una lista.) 
    
 */


 var persona = {                                               // EJEMPLO 1
     nombre:"damian",            
     apellido:"fortunesky",                                    
     edad: 24,
     crecer: function(años) {this.edad += años}
 }

 persona.crecer(1); //Hara que mi resultado sea 24 + 1 = 25

 console.log(persona); //Printea en consola el objeto + el metodo ejecutado.

 /* .Un METODO es una PROPIEDAD de tipo FUNCION de un OBJETO.
   
   .Dado un objeto de tipo persona podríamos definir el método .crecer();

   .El metodo crecer() tiene una funcion dentro.

*/



// NUMEROS Y OPERADORES


 /* .Los numeros se utilizan a traves de variables y su funcion principal es ser usados en operaciones entre los mismos .
   
   .En Javascript no hace falta especificar que tipo de numero se utiliza (ya sea entero, decimal, etc).

   .OPERADORES: +(suma) -(resta) *(multiplicacion) /(division) %(modulo = es el residuo de las divisiones enteras, Ej: 7/3=2 y sobra 1, 1=modulo obs:pregunta trabajos)

 */

 var numeroUno = 20;

 var numeroDos = 20;

 console.log (numeroUno + numeroDos); // Printea en consola: 40  





// OBJETO MATH


 /* 
    .El objeto Math posee dentro muchisimas funciones que tienen que ver con el orden matematico. 
    
    .Si se accede a consola --> window = te especifica el objeto y las funciones dentro de el.

    .Metodos del objeto math: .round (redondea)
                              .Ceil (redondea hacia arriba)
                              .Floor (redondea hacia abajo)
                              .PI (numero pi, 3,14)
                              .sqrt (raiz cuadrada)
                              .abs (convierte numeros negativos en positivo)
                              .min (minimo numero de un listado)
                              .max (numero max de un listado)
                              .radom (numero aleatorio)                            
 */

// ORDEN DE LAS OPERACIONES

 /*
 Es similar a la jerarquia matematica:
                                      1.Parentesis
                                      2.Multiplicacion y division
                                      3.suma y resta
 */





// INCREMENTOS
 

 /*
  .Con el incremento se agrega valor a un valor preexistente, si tengo 10 años y le agrego un incremeto de 1 año, tendre entonces 11 años.
  
  .El incremento se define con: ++ (suma 1)
                                -- (resta 1)
                                += (suma el incremento que le indiques)
                                -= (resta el incremento que le indiques)
 */ 

 let puntaje = 10;

 puntaje++;

 console.log(puntaje); // El resultado va a ser: 10 + (el incremento) = 11





// CONCATENACION
 
 /*
  .La concatenacion sirve para unidos dos variables en una.

  .En los numeros, el signo + suma, en los string concatena.

  .Por qué es importante concatenar? Porque cuando tienes una base de datos, digamos que el nombre de un cliente y su email vienen separados, pero una vez que los muestras en pantalla
      
      quieres que se vean juntos, entonces es por eso que es importante la concatenación.

 */

 const nombre = 'Damian';
 const email = 'damianfortunesky@gmail.com'

 console.log (nombre);
 console.log (email); //Muestra los resultados uno abajo de otro porque no se concatena

 console.log (nombre +' '+ email); //muestra el resultado en una sola linea porque hay concatenacion, el ' ' es espacio entre los resultados. Ej: Damian damianfortunesky@gmail.com

 console.log ("Nombre cliente: " + nombre + " email: " + email); // Resultado: Nombre Cliente: Damian email: damianfortunesky@gmail.conm





// TEMPLATE STRING O STRING LITERAL

  // Es un sustituto más claro de sintaxis que la concatenacion, es lo que se utiliza hoy en dia.

  const nombre = 'Damian';
  const email = 'damianfortunesky@gmail.com'

  console.log (`Nombre Cliente: ${nombre}  Email: ${email}`); // con `` y ${nombre variable} hacemos mas sencilla la sintaxis y los espacios se agregan solos





// BOOLEANOS


 /*
  .Un valor booleano representa un valor de verdad; es decir, TRUE o FALSE.
  
  .Una expresión booleana puede producir un valor de desconocido (unknown), que está representado por el valor nulo.

 */

  const ValorA = false;
  
  const ValorB = true; 

  console.log (ValorA); // Resultado: false

  console.log (ValorB); // Resultado: true

  // OBS: Puedo usar TYPEOF para saber que tipo de dato es. 
  
  const ValorA = false;

  console.log (typeof ValorA); // Resultado: Boolean





//OBJETOS (IMPORTANTE, LO MAS USADO, PARTE CENTRAL JS)

 /*
  .JavaScript está diseñado en un paradigma simple basado en objetos.

  
  .Un objeto es un entidad independiente con propiedades y tipos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.

      Una propiedad de un objeto se puede explicar como una variable adjunta al objeto.


  .El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método.

  .Una caracteristica esencial de los objetos es que se puede quitar o agregar informacion de ellos.

  .El uso de mayusculas y minisculas al escribir la variable y objetos importa. "myCar" es diferente a "mycar"

  .Ej de objeto en vida real: Una taza es un objeto con propiedades. Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc.
 */  

 const nombreProducto = "monitor 20 pulgadas";

 const precio = 300;                          // Aca tenemos tres variables individuales, con un obejto puedo contener estos tres valores juntos.

 const disponible = true;




 const Producto = {
   nombreProducto: "monitor 20 pulgadas",  // Esto es un objeto, contiene las 3 variables anteriores en forma de propiedades.
   precio: 300,
   disponible: true,
 } 


 console.log (Producto); // Resultado: nombreProducto: "monitor 20 pulgadas", precio: 300, disponible: true,



 console.log (Producto.precio); //De esta manera accedo a una propiedad 

 console.log (Producto ["precio"]); // Otra manera de acceder a una propiedad





//AGREGAR Y ELIMINAR PROPIEDADES DE OBJETOS


 Producto.imagen = "imagen agregada"; //Esto AGREGA una propiedad llamada imagen al objeto anterior llamado Producto.

 delete Producto.disponible; // ESto ELIMINA la propiedad elegida del objeto Producto, en este caso "disponible"





// DESTRUCTURING (DESESTRUCTURAR) DE OBJETOS


 const Producto = {
  nombreProducto: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
 } 


 const precioProducto = Producto.precio; // Aqui creo una variable accediendo a la propiedad del objeto ya creado.

 console.log (precioProducto); // Resutaltado: 300


 const {precio} = Producto; //Esto es DESTRUCTURING, la forma nueva. Accede a la propiedad del objeto y al mismo tiempo crea la varibale.



// METODOS PARA OBJETOS

 /*
  .¿Porque se puede agregar o eliminar propiedades de un objeto aunque se defina con CONST? Esto es una limitante, para evistarlo se usa el metodo .frezze

  .Algunos metodos son: 
  
          .frezze (Congela el objeto para que sus propiedades no puedan ser modificadas, tampoco agregar o quitar);

          .Seal (Permite modificar las propiedades existentes pero no agregar o quitar);
 */

 const Producto = {
   nombreProducto: "monitor 20 pulgadas",
   precio: 300,
   disponible: true,
 } 
 
 Object.freeze (Producto); //Esto hace que el objeto este en modo "frezeado" y no se pueda modificar

 console.log(Object.isFrozen(Producto)); //Este metodo sirva para saber si un objeto esta freezeado o en modo relajado

 console.log(Object.isSealed(Producto)); // 




 

// COMO UNIR DOS OBJETOS CON SPREAD OPERATOR

   /* 
      .Una buena practica en Javascript es NUNCA modificar los datos originales de los objetos. 
   */


 const productoPerro = {
     collar: "azul",
     correa: "negra",
 } 
   
 const medidas = {
   collar: "10cm",
   correa: "1mts",
 }

    // Dos objetos diferentes



    const productoFinal = {...productoPerro, ...medidas }; // De esta manera creo un nuevo objeto que contiene los 2 anteriores


    console.log(productoFinal); // Resultado: Un objeto con todas las propiedades de los 2 objetos anteriores





// ARREGLOS O ARRAYS


 /*
  .Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación.
  
  .Tanto la longitud como el tipo de los elementos de un array son variables.

  .El array no tiene variables, tiene posiciones con datos. OJO CON ESTE CONCEPTO !!

  .Operaciones habituales: 
                            .Crear un Array: let frutas = ["Manzana", "Banana"]
                            
                            .Acceder
 */





// OPERACIONES HABITUALES CON ARRAYS


 let frutas = ["Manzana", "Banana"]  // Crear un Array




 let primero = frutas[0]  // Acceder a un elemento de Array mediante su índice. Resultado: Manzana




 let ultimo = frutas[frutas.length - 1]  // Acceder a un elemento de Array mediante su índice. Resultado: Banana





 frutas.forEach(function(elemento, indice, array) {  // Recorrer un Array. Resultado: Manzana 0, Banana 1
   console.log(elemento, indice);
 })
                             



 let nuevaLongitud = frutas.push('Naranja')  // Añadir un elemento al final de un Array. En  este caso añade "naranja" al final.

 let ultimo = frutas.pop() // Elimina el ultimo elemento de un array.  Resultado: "Manzana", "Banana" y se elimina "naranja"

 let nuevaLongitud = frutas.unshift('Fresa') // Añadir un elemento al principio de un Array

 let primero = frutas.shift() // Eliminar el primer elemento de un Array

 let primero = frutas.toString() // Convertir a string un array

 let primero = frutas.toUppercase() // Convertir a mayuscula un array

 let primero = frutas.totoLowercase () // Convertir a minuscula un array







 
 frutas.push('Fresa')                   // Encontrar el índice de un elemento del Array

  // ["Manzana", "Banana", "Fresa"]

 let pos = frutas.indexOf('Banana')

  // (pos) es la posición para abreviar

  // 1

  // Concatenar Arrays

  let frutas = ["Manzana", "Banana"];

  let vegetales = ["Tomate", "lechuga"];

  let frutasConVegetales = frutas.concat(vegetales);

  console.log (frutasConVegetales); // ["Manzana", "Banana", "Tomate", "lechuga"]



 let elementoEliminado = frutas.splice(pos, 1)                  //Eliminar un único elemento mediante su posición

  // ["Manzana", "Fresa"]

  // pos = posicion = 1 ;  1 = cantidad de elementos a eliminar





  /*
    .Con .splice() no solo se puede eliminar elementos del array,
        
        si no que también podemos extraerlos guardándolo en un nuevo array.

    .¡Ojo! que al hacer esto estaríamos modificando el array de origen.
  */


  let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria']                  // Extraer varios elementos mediante su posición
  console.log(vegetales)

  // ["Repollo", "Nabo", "Rábano", "Zanahoria"]
  
  let pos = 1, numElementos = 2
  
  let elementosEliminados = vegetales.splice(pos, numElementos)

  // ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"
  
  console.log(vegetales)
  // ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales" 





  let copiaArray = vegetales.slice();                                        //Copiar un Array
  // ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"





 // Acceso a elementos de un array

  /*
    .Los índices de los arrays de JavaScript comienzan en cero, es decir, el índice del primer elemento de un array es 0,
    
       y el del último elemento es igual al valor de la propiedad length del array restándole 1.
    
    .Si se utiliza un número de índice no válido, se obtendrá undefined.
  */


    let arr = ['este es el primer elemento', 'este es el segundo elemento', 'este es el último elemento']
    
    console.log(arr[0])              // escribe en consola 'este es el primer elemento'
    
    console.log(arr[1])              // escribe en consola 'este es el segundo elemento'
    
    console.log(arr[arr.length - 1]) // escribe en consola 'este es el último elemento'






 
  // La propiedad LENGTH de un array de JavaScript está conectada con algunas otras de sus propiedades numéricas. 
 

    const frutas = []
    frutas.push('banana', 'manzana', 'pera')
    
    console.log(frutas.length) // 3               //Si se agregan o quitan elementos o propiedades de un array, esto se ve reflejado en LENGTH



  // Constructor

      /*
         Array()  Crea un nuevo objeto Array.
      */



  // Creación de un array a partir de una expresión regular

    /* 
        .¿Que es un una expresion regular? 
        
          Una expresión regular es una cadena de caracteres que es utilizada para describir o encontrar patrones dentro de otros strings,
        
          en base al uso de delimitadores y ciertas reglas de sintaxis. Ej: buscar solo mails dentro de un array


        .El resultado de una búsqueda con una RegExp (Regular expresion) en un string puede crear un array de JavaScript.
         
          Este array tendrá propiedades y elementos que proporcionan información sobre la correspondencia encontrada.
          
          Para obtener un array de esta forma puede utilizarse RegExp.exec(), String.match() o String.replace().

    */

    /* Ejemplo:

       .Recordar las b y la d final

       .No distinguir mayúsculas y minúsculas
    */

    const miRe = /d(b+)(d)/i               // Formato RegExp. Busca una d seguida de una o más b y, al final, de otra d
    const miArray = miRe.exec('cdbBdbsbz')

    // Las propiedades y elementos que se obtienen de esta búsqueda son los siguientes:


    /* Propiedad/Elemento	     Descripción	                                                                                                                   Ejemplo

       input                   El string original sobre el que se ha realizado la búsqueda con la expresión regular	"                                          "cdbBdbsbz"

       index                   El índice de la correspondencia en el string, siendo cero el de la primera posición.	                                           1

       [0]                     Los últimos caracteres que cumplen la correspondencia	                                                                         "dbBd"

       [1], ...[n]             Elementos que indican las correspondencias de substrings entre paréntesis (si se han incluido) de la expresión regular.
                               No hay límite al número de substrings entre paréntesis que se puedan utilizar.                                                  [1]: "bB"
                                                                                                                                                               [2]: "d"
    */


   
                                                                                                                                                               

//FUNCIONES

  /*
    .Las funciones son uno de los bloques de construcción fundamentales en JavaScript.
    
    .Una función en JavaScript es similar a un procedimiento, un conjunto de instrucciones que realiza una tarea o calcula un valor,
     
      pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.
      
      Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.

  */

  // Como definir/declarar una funcion

   /*
      1.Se usa la palabra clave funtion
      
      2.El nombre de la función.

      3.Una lista de parámetros de la función, entre paréntesis y separados por comas.

      4.Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }. Esto se llama cuerpo de la funcion.

      5.Despues de crear una funcion, como en el Ejemplo 1, se debe llamar a la misma para que se ejecute.

      OBS: La ventaja de las funciones es que te permiten tener un codigo mas ordenado y facil de mantener. Ademas, son reutilizables.

   */

      //Ejemplo 1:

      function sumar () {                // Aqui creo/declaro la funcion 
        console.log(10+10);
      }
                
      sumar()                            // Aqui mando a llamar a la funcion, aparece en consola el resultado de 10+10 = 20
      
      
      
    
      //Ejemplo 2:

        function square (number) {        // Funcion: "square"  ;  Parametro: "number"
          return number * number;        // La función consta de una declaración "return number * number", esto explicita que  se devuelva el parámetro de la función (number) multiplicado por sí mismo.
        }                                // La instrucción "return" especifica que tipo de valor va a devolver la funcion. 

                                          





  // Existen 3 formas de crear funciones 
        

    // 1. Declarando la funcion (Ejemplo 1):

      function sumar () {                 
        console.log(10+10);
      }

      sumar();




    // 2. Expresion de la funcion: 

      const sumar = function () {         //Se inicia como si fuera una variable, seguido de un nombre, luego la palabra clave function y sus parametros (), luego el cuerpo {..}
        console.log(10+10);
      }

      sumar();
    



    // 3. Esta forma se llama IIFE: Sirven para proteger las variables, que no se mezclen con otro archivo, pero no son recomendables para reutilizarlas


      (function(){                            // Básicamente son funciones que no necesitan llamarse porque se mandan llamar ellas mismas.
         console.log("esto es una funcion")                            
      })();                                   // Sintaxis:  1.()  ;  2.function  ;  3.()  ;  4.{}   ;  5.()            

    
      /* .Lo que diferencia a esta forma de las otras dos es el HOSTING. (PREGUNTA DE TRABAJO)

          .HOSTING: 
                    
                    .Es un termino que fue pensado como una manera general para referirse a como funcionan los contextos en Javascrip.
             
                    .Javascript se ejecuta en dos etapa, la primera es la etapa de "registro y/o creacion", y la segunda es la de "ejecucion".


                    .Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente
                    
                      movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas
                      
                      en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.


                    .Una de las ventajas de colocar (ponerlas en memoria) las declaraciones de funciones antes de ejecutar cualquier otro segmento de código es que permite utilizar
                    
                      una función antes de declararla en el código.  
      */





  // Diferencia entre funcion y Metodos
     
    // Los metodos de los objetos, son tecnicamente funciones, pero se limitan a se ejecutados unicamente desde el objeto al que pertenecen
    // Funcion. Si yo uso la funcion parseint() puedo convertir un numero a string siempre que el valor lo admita.

    const numero1 = 10;

    const numero2 = "10";

    console.log ( parseInt(numero2) ); // Resultado: 10 en formato numero.

    
    // Ahora bien, los Metodos se escriben con un . luego de nombrar la funcion. Ej: toString()
      
      console.log ( numero1.toString() ); // Es un metodo. Resultado: Convierte numero a string el 20.
  




  // Funciones con parametros y argumentos
      
      function sumar( numero1, numero2 ) {  //Parametros: nuermo1, numero2. Los parametros son variables dentro de la funcion (pueden cambiar)
        console.log (numero1 + numero2);
      }
      
      sumar(10 + 10); //Argumnetos o valores reales: 10 + 10 

      
      
      
      // Parametros por default:

        /*  
            .Se usan para cuando no estan presentes los argumentos y quiero declarar una variable igualmente.

            .Permiten que los parámetros con nombre se inicien con valores predeterminados si no se pasa ningún valor o undefined.     
        */

        // Ejemplo: Si no se proporciona ningún valor para b cuando se llama a multiply, el valor de b sería undefined al evaluar a * b y multiply devolvería NaN.

        function multiply(a, b) {
          return a * b
        }
        
        multiply(5, 2)  // 10
        multiply(5)     // NaN !   PERO SI DEFINO PARAMETROS POR DEFAULT: 

      
        function multiply(a, b) {
          b = (typeof b !== 'undefined') ?  b : 1 // Aqui defino que b = 1 si no le asigno ningun argumento.
          return a * b
        }
        
        multiply(5, 2)  // 10
        multiply(5)     // 5




        function sumar (numero1 = 0, numero2 = 0) { // Parametros: numero1, numero2
          console.log(3 + 3);
        }

        sumar(3, 3); // Argumentos
        
        sumar(); // Resultado: 0
        sumar(1) // Resultado: numero1 = 1 + numero2 = 0 ======> 1  // La funcion llama a los valores por default cuando los argumentos no estan presentes.
      
     
        


      
  // Funciones que retornan valores
    
    function sumar(n1, n2) {   // Se asignan parametos y se establece return, que devuelve la operacion que se le indica (n1 + n2)
      return n1 + n2;
    }

    const resultado = sumar (2, 3); // Se crea variable "resultado" con el valor que retorna la funcion sumar()
 
    console.log (resultado); // Printea en consola el resultado de 2 + 3



  

    let total = 0; // Creo variable total  = 0

    function AgregarAlCarrito (precio) {   //Esta funcion retorna total (0) + el incremento (viene dado de parametro precio)
      return total += precio;
    }

    function CalcularImpuestos (total) {  //Multiplica el parametro "total" por 1,15 para calcular los impuestos agregados al precio
      return 1.15 * total;
    }

    total = AgregarAlCarrito (200);
    total = AgregarAlCarrito (400);   // Reasigna el valor del parametro total a medida que el usuario agrega productos al carrito (precio de los mismos)
    total = AgregarAlCarrito (400);

    console.log(total); // Printea en consola el valor del parametro total


    const totalAPagar = CalcularImpuestos(total); // Se reasigna el valor retornado por la funcion CalcularImpuestos en otra variable (TotalAPagar)

    console.log(`El total a pagar con impuestos es de: ${totalAPagar}`); // Printea el total del carrito + impuestos agregados






  // Metodos de propiedad
    
    // Un metodo es una función la cual es propiedad de un Objeto. Se utiliza como metodo y dentro posee una funcion

    const reproductor = {
      reproducir : function (id) {       // La propiedad del objeto reproductor, es decir, reproducir tiene asociada una funcion.
        console.log (`Reproduciendo cancion con el Id: ${id}`)
      },
      pausar : function () {
        console.log (`Pausando..`)
      },
      crearPlaylist : function (nombre) {
        console.log(`Creando playlist: ${nombre}`)
      }, 
    }

    reproductor.reproducir(3401); // Se utiliza como metodo del objeto.
    reproductor.pausar();
    reproductor.crearPlaylist (`Rock and Roll`);

    // Incluso, puedo crear las funciones por fuera del objeto:
    
    reproductor.borrarCancion = function (id) {
      console.log (`Eliminando cancion`)
    }
    
    reproductor.borrarCancion(20);




  // Arrow Function (funciones de flechas)
    
    /* 
      .Tienen una sintaxis mas corta, son otra forma de declarar funciones

      .Funcionan bien en los array methonds

      .Se sustituye la palabra reservada "funtion" por "=>"
    */

    const sumar = (n1, n2) => console.log(n1 + n2);

    sumar(2, 2);




   const apreniendo = (tecnologia) => console.log(`Aprendiendo: ${tecnologia}`);

   apreniendo (`Javascript`);

  
  
  
  
// ESTRUCTURAS DE CONTROL

    /*
      .Las estructuras de control en javascript se utilizan para definir el flujo de instrucciones que se van ejecutando. 
        
        Esto permite modificar instrucciones segun las condiciones dadas.

      .Tipos de Estructuras: 
                              
                            1. Estructuras condicionales: Este tipo de estructura de control tiene como objetivo realizar una bifurcación del flujo de instrucciones.
                               
                                Se establece condiciones en la funciones con intrucciones que se ejecutan en base al cumplimiento de dicha condicion. 
                                
                                ( === si es igual) ( !== si es difernte)  ( > mayor que) ( < menor que)


                                Ejemplo:  if (condicion)

                                          {
                                            instrucciones que se ejecutarán si se cumple la condición
                                          }

                                          else

                                          {
                                            instrucciones que se ejecutarán si NO se cumple la condición
                                          }



                            2. Estructuras de repeticion: Se conocen como bucles y sirven para ejecturar acciones de forma repetida.

                                  Ejemplo: Credenciales de acesso para logearse a algun sitio, si el usuario se equivoca, se repite el proceso.



                            3. Estructuras de control de errores: Permiten controlar los errores que el usuario final comete de forma fortuita o intencionada.

                                  Ejemplo: Se pide introducir un numero y se introduce una letra, el programa tira error para que el usuario corrija dicho error.
    
    
    */

      const puntaje = 1000;
      
      if(puntaje == 1000) {               //Si el puntaje es 1000 lo printea en consola, si no es, no ejecuta niguna accion
        console.log ("El puntaje es 1000");
      }




      const dinero = 1000;
      const deuda = 800;

      if (dinero > deuda) {
        console.log ("El usuario puede pagar");
      }
      else {
        console.log ("Fondos insuficientes");
      }

  // Switch
  
      /*
        . Cuando tienes multiples condiciones lo mejor es usar Switch, es mas corto y facil de mantener
      */


      const metodoPago = `Tarjeta Credito`;

      switch (metodoPago) {
        case 'Tarjeta Credito':                   // CASE evalua el metodo de pago y ejecuta el argumento que va despues de :
          console.log ('Pagaste exitosamente');
          break;                                  // Siempre finaliza con un "BREAK"

        case 'Mercado pago':
          console.log ('Pago valido sujeto a verificacion');

        case 'Efectivo':
          console.log ('Pagaste con efectivo');

        default:                                  // Si no se cumplen las condiciones se ejectuta el argumento de "default". Es un similar a else.
          console.log ('No se completo pago');
          break;

      }

// ITERADORES 
      
  /*
    .En programación de computadores, un iterador se refiere al objeto que permite al programador recorrer un contenedor, (una colección de elementos) particularmente listas

  */

  // For Loop

      /*
        .Sirven para irterar en objetos. Poseen un indice (donde arranca a recorrer) llamdao "i=valor" . Luego viene la condicion que se debe cumplir "i (condicion) valor"
      */
      
      for( let i = 0; i < 10; i++) {   // i = 0 es el indice y el punto de partida del iterador. 
                                       
      }                                // 1 < 10 es la condicion. Si el i = 0 es < 10 entonces se ejectura el codigo.
      
                                       // i++ es el incremento, 


                                      /* Entonces, cómo funciona este código? 

                                        1. El índice tiene el valor 0, es decir, es igual a cero y ese valor es menor a 10. 

                                        2. Como es verdadera la condicion, se ejecuta el codigo.

                                        3. Con el incremento, ahora, el indice i = 1 y se repite la operacion (asi hasta 9).
                                                                        
                                      */


      // Ejercicio de PRUEBA DE TRABAJO: Identifica del 1 al 100, si el numero es PAR o IMPAR

      for( let i = 1; i <= 100; i++ ) {
        if ( i % 2 === 0) {                        // Si ek Modulo de 2 (i % 2) es 0 de residuo, entonces el numero es PAR, si es 1, es IMPAR
          console.log ('El numero ${i} es PAR');
        } else {
          console.log ('El numero ${i} es IMPAR');
        }
      }

      // Los For loop son una excelente forma de interar en un arreglo (ARRAY: Objeto de tipo lista)

      const monitores = [
        {nombre:'Monitor 60hz', precio: 15000 },    //ARRAY, inicia desde posicion 0, es decir, i = 0
        {nombre:'Monitor 75hz', precio: 20000 },
        {nombre:'Monitor 144hz', precio: 30000 },
        {nombre:'Monitor 240hz', precio: 50000 },
      ];

      for(i = 0; i < monitores.length; i++ ) {
        console.log (monitores[i] );
      }


  // WHILE LOOP

      /*
        .El while loop se ejecuta cuando una accion es verdadera. Cambia un poco la sintaxis.

        .¿Cual es la difencia entre el "while loop" y el "do while loop"? Pregunta de entrevista              IMPORTANTE !!

          El while loop evalua la condicion y si es verdadera ejectura el codigo. El do while ejecuta el codigo al menos una vez.
     
      */

      let = i;           //Indice o valor inicial

      while (i <= 10) {   
        
        if(i % 2 === 0) {
          console.log('El numero ${i} es PAR');     // Condicion
        } else {
          console.log('El numero ${i} es IMPAR');
        }

        i++;             //Incremento 
      }
  



  // DO WHILE LOOP

      /*
        .La diferencia entre del do while, es que, se ejecuta el codigo al menos una vez, y luego evalua la condicion.
      */

      let = 0;              //Indice

      do {
        console.log(i);     // Codigo que se ejectua si la condicion en verdadera

        i++;                //El incremento va dentro del do
      } while (i < 10);     //Condicion



  // forEach y map

    /*
       .forEach y map solo se pueden ejecturar en arrays o arreglos
       .forEach funciona igual que un for, se usa para iterar un arreglo para obtener cada uno de sus elementos
       .Son metodos para arrays

        .¿Cuando utilizar forEach y cuando map?  Cuando quieras ITERAR sobre un array para mostrar los elementos en consola, utiliza foreach. Si quieres crear un NUEVO ARRAY, map.

    */
      
      //Ejemplo 1
      
       var variable = ['a', 'b', 'c'];

       variable.forEach(function(elemento) {
         console.log(elemento);                 // Printea en consola: a b c
       })
       


      //Ejemplo 2

       const monitores = [
        {nombre:'Monitor 60hz', precio: 15000 },    //ARRAY, inicia desde posicion 0, es decir, i = 0
        {nombre:'Monitor 75hz', precio: 20000 },
        {nombre:'Monitor 144hz', precio: 30000 },
        {nombre:'Monitor 240hz', precio: 50000 },
      ];
      
      
      monitores.forEach(function(producto) {
        console.log(producto);
      })
      
    

      //Ejemplo 3

      monitores.forEach( producto => console.log(producto.nombre)); // Usado en arroy funtion


  //MAP
      
  // Con map, creas un nuevo arreglo, por ejemplo, utilizando solos los nombres de los productos

  const arrayNuevo = monitores.map( producto => console.log(producto.nombre)); 



//THIS  

  /*
    .Es una palabra reservada. Sirve para hacer referencia a elementos del mismo objeto
    .No se puede utilizar en arroy funtion
  */

  const reservacion = {
    nombre: 'damian',
    apellido: 'fortunesky',
    deuda: 5000,
    estado: false,
    informacion: function (){
      console.log(`El cliente ${nombre} reservo y el total a pagar es de ${total}`); // 1) Yo aca no puedo hacer referencia a "nombre" porque es del mismo objeto, tira error.
    }
  }


  console.log(reservacion);



  const reservacion = {
    nombre: 'damian',
    apellido: 'fortunesky',
    deuda: 5000,
    estado: false,
    informacion: function (){
      console.log(`El cliente ${this.nombre} reservo y el total a pagar es de ${total}`); // 2) con This hago referencia al mismo objeto y luego accedo a la propiedad que quiero. 
    }
  }



// PROGRAMACION ORIENTADA A OBJETOS

  /*
    .Si bien Javascript es un lenguaje orientado a objetos (como java o C#), Utiliza los que se llama "prototipe".

    .Se crea a partir de     var nombreObjeto = {}  . En programacion orientada a objetos se utilizan clases

    .¿Que es una clase? Es el contenedor con todas las funciones, metodos y propiedades. "nombreObjeto" es una clase. La clase debe empezar con mayuscaulas.

  */


  // OBJECT LITERAL: ES EL MAS USADO PERO ES MENOS DINAMICO PORQUE LE PASAMOS NOSOTROS SUS PROPIEDADES

    const objeto = {           
      nombre:'pc',
      precio: 90000,
    };  



  // OBJECT CONSTRUCOR: ES MAS DINAMICO PERO ES MENOS USADO

    function Producto (nombre, precio) {                     // La clase es: Producto  ; Los parametros : nombre, precio
      this.nombre = nombre;
      this.precio = precio;               
    }                                            // This hace refencia a los valores del objeto, asi se guardan los valores ('Monitor 60hz', 15000) dentro de la variable (producto2)

    const producto2 = new Producto ('Monitor 60hz', 15000)                                                              
    const producto2 = new Producto ('Monitor 240hz', 90000)  // Este tipo de objeto te permite instanciar multiples veces con diferentes valores a diferencia el object literal

    console.log (producto2); 
    
    




  // PROTOTYPE

    /*
      .Los permite crear funciones que solo se permiten en un objeto especifico. 
      .Permite tener un codigo mas organizado y crear menos funciones
      
    */
    

    function Producto (nombre, precio) {        // Ojeto creado con object constructor. Es un generador de objetos
      this.nombre = nombre;
      this.precio = precio;
    }

    const producto2 = new Producto ('Iphone', 1000);     // Nuevo objeto a partir del original
    const producto3 = new Producto ('Samsung', 700);


    Producto.prototype.formatearProducto = function () {            // Aqui, con PROTOTYPE creo una funcion especifica para el objeto producto
      return 'El producto ${this.nombre} cuesta ${this.precio}' 
    }


    console.log (producto2.formatearProducto()); // Printea en consola los valores de producto2 con la funtion "formatearProducto" que le asociamos 
 






  // CLASES EN JAVASCRIPT  (ES LA VERSION NUEVA Y LO QUE MAS SE USA, SIRVE MEJOR QUE PROPOTYPE)

    /*
      .Se agregaron en 2015. Hace que crear objeto (lo anterior) se mas sencillo
      .Las clases comienzan con mayusculas
      .Los valores se pasan con un constructor
    */


    class Producto {                   // Esto es una clase
      constructor(nombre, precio) {    
        this.nombre = nombre;          // Constructor () es donde se asigan los parametros y las propiedades donde van luego los valores
        this.precio = precio;
      }
    }

    const producto1 = new Producto ('Monitor 90hz', 500);   // Instanciamos la clase creada y se asignan valores 
    const producto2= new Producto ('Monitor 1440hz', 800);

    console.log(producto1); // Printea el objeto con los valores


  // Si quiero agregar el "formatearProducto"

    class Producto {                   
      constructor(nombre, precio) {    
        this.nombre = nombre;          
        this.precio = precio;
      }

      formatearProducto () {                                //Se agrega dentro de los {} de la class como  un metodo
        return 'El ${this.nombre} cuesta ${this.precio}'
      }          
    }







  // HERENCIA 

    class Producto {                   
      constructor(nombre, precio) {    
        this.nombre = nombre;          
        this.precio = precio;
      }

      formatearProducto () {                               
        return 'El ${this.nombre} cuesta ${this.precio}'
      }          
    }
    

    // Supongamos que queremos crear otra clase


    /*
      .La herencia es una forma de pasar valores o propiedades hacia otro lado.
      .Se usa con "extends" y agregar el nombre de la clase de la cual quiero heredar.
      .Evita duplicar codigo y se hace mas facil de mantener
      .En el contructor se utiliza super ()
    */

        class Libro extends Producto {            // Aqui se hereda el constructor () y la funtion return de la clase Producto
          constructor(nombre, precio, isbn) {
            super(nombre, precio)                 // Con super (), el constructor hijo va al constructor padre y hereda las propiedades elegidas
            this.isbn = isbn;
          } 
          
          formatearProducto () {                               
            return '${super.formatearProducto()} y su isbn es ${this.isbn}';  // Aqui busca el string duplicado de la clase padre
          } 
              
        }

        

        const libro = new Libro ('Padre Rico, Padre pobre', 1500, '90356092');

  // TRY CATCH
        
    /*
      . En JS cuando tenemos un error (que no sabemos cual es) el codigo no se ejecuta. Try catch sirve para que el codigo se ejecute a pesar del error en situaciones criticas
          
          que requieran que algo funcione (una conexion a base de datos, un inicio de sesion, un intento de pago en un carrito de compras, et)
      
      . Try catch significa "intenta a pesar del error" y se usa en situaciones especificas o como herramienta para detectar un error.
    */


    const numeroUno = 1;
    const numeroTres = 3;  

    console.log(numeroUno);
    console.log(numeroDos);     // La variable numeroDos no esta definida. Se printea en consola, numero 1, error y la otra variable no se ejectua por mas que este definida
    console.log(numeroTres);


      // Con try catch solucionamos esto

      console.log(numeroUno);
      
      try {
        console.log(numeroDos);
      } catch (error) {
        console.log(error);             // Si bien tira error en consola, se sigue ejecutando el codigo y por ende la variable numeroTres
      }

      console.log(numeroTres);





  
  // PROMISES

      /*
        .Una promise (promesa) refleja un valor que puede estar disponible en el presente o el futuro
        
        .La mayoria de las APPIS modernas utilizan promises

        .En las promises existen 3 VALORES:   PENDDING (en espera),  FULFILLED(se cumplio la promesa),  REJECT(no se cumplio la promesa)
      
      */



      const usuarioAutenticado = new Promise ((resolve, reject) => {  // Se puede usar con Arrow funtion (como aqui) o con la palabra reservada "funtion"
        const auth = true;                                            // Si es true, el usuario esta autenticado

        if(auth) {
          resolve ('Usuario autenticado');                            // Resolve es lo que se ejecuta si se cumple la promesa, siempre.
        } else {
          reject ('Error de autenticacion');                          // Reject se ejecuta si la promesa NO se cumple, siempre.
        }
      });


      usuarioAutenticado               // Con .Then accedemos a los valores del promise y se ejecuta una funcion en base a eso (el resolve)
        .then ( function(resultado) {  
          console.log(resultado);      // Resultado es lo que contiene el Resolve anterior
        })                            
        .catch ( function(error) {     // Si la promesa no se cumple se ejectua el Reject y por ende esta funcion que con su parametro trae el resultado de Reject
          console.log(error);
        }) 
                                       

        //Expresado en Arrow funtion 

          .then( (resultado) => console.log(resultado))  
          .catch( (error) => console.log(error))


  // NOTIFICATION API

    // 1. Creamos un boton en el hmtl con id #boton

    // 2.Creamos una variable y asignamos en ella, la seleccion del elemento HTML 

        const boton = document.querySelector('#boton');  // Crear selectores de este tipo es mas facil de mantener

    
    // 3. Utilizamos el evento (click), todos los eventos funcionan con la funtion "AddEventListener"


        const boton = document.querySelector('#boton'); 
        boton.AddEventListener(click, function() {     // Asi podemos registrar un evento vinculado a la VAR "boton". Cuando se registra el evento "click", se ejecuta una funcion
          console.log('diste click');
        } )                  
    
    // 4. Notificacion terminada
        
        const boton = document.querySelector('#boton');

        boton.AddEventListener('click', () => {
          Notification.requestPermission()
          .then(resultado => console.log('El resultado es: ', resultado))       // .then es la promise (notification se encarga de los resolves y los reject)
        });

        if (Notification.permission == 'granted') {           
          new Notification ('Esta es la notificacion', {     // Nombre de la notificacion
            icon: 'img/._ccj.png',
            body: 'Codigo con Damian'                        // Texto de la notificacion
          })
        }



  // Async / Await

      /*
        .La funcion async devuelve un elemento Promise. Cuando la funcion async devuelve un valor, Promise se resolvera con el valor devuelto.

        .Una función async puede contener una expresión await, la cual pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada y,
        
            a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.

        .La finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas y realizar algún comportamiento específico en un grupo de Promises.
      */

    function descargarNuevosClientes () {
      return new Promise (resolve => {                    // La promise 
        console.log('Descargando clientes.. espere..');

        setTimeout( () => {                               // Espera 5 segundos para ejecutar el resolve
          resolve('Los clientes fueron descargados');
        }, 5000 );
      })
    } 

    async function app () {                                 // Funcion asyncrona con try catch para se que ejectute en caso que la descarga no se realize
      try {
        const resultado = await descargarNuevosClientes ();
        mostrarClientes (resultado);
        console.log (resultado);
      } catch (error) {
        console.log (error);
      }
    }
 
    app();
    







// JAVASCRIPT EN EL NAVEGADOR Y DOM SCRIPTING

  /* .Aqui vamos a ver lo que es la interacion. 

    .Existen 3 SELECTORES para seleccionar contenido de un documento HMTL:

        1.querySelector: Siempre inicia con document (es el documento html). Retorna 1 o 0 elementos (no puede retornar muchos elementos)


        2.querySelectorAll: Retorna de 0 a multiples elementos seleccionados (ejemplo: 3 enlaces de una barra de navegacion)


        3.getElementById:
  */



  // 1.
  
  const heading = documento.querySelector ("selector clase o id de  un h1"); // Selecciona el elemento, clase o id y te permite modificarlo

  heading.textContent ='Nuevo h1' // Llame a la variable que selecciona el h1 del documento html y le modifique el contenido del h1 con textContent
  




  // 2. 

  const enlaces = documento.querySelectorAll (".navegacion a"); // Selecciono toda una navegacion con sus respectivos enlaces

  console.log(enlaces[0]);   // Printea en consola el enlace en el indice 0

  enlaces[0].textContent = "Nuevo texto para enlace"; // El . para acceder a las propiedades (estas se pueden ver en dev tools de los navegadores). Se accede al 1er elemento "[0]"
  enlaces[0].href = "enlace-destino.html"; 
  enlaces[0].classList.Add('nueva-clase');
  enlaces[0].classList.remove('clase a eliminar');
  

    <a class= "clase-nueva" href="enlace destino.html" > Nuevo texto para enlace </a> // Esto es lo que queda 





  // 3.  

  const titulo2 = document.getElementById('nombre-id'); // Como ya esta buscando por id, no hace falta el #






  // CREAR ELEMENTO HTML DESDE JAVASCRIPT


    // 1. Crear nuevo enlace navegacion 

    const nuevoEnlace = document.createElement("A");   // Se debe poner la etiqueta a crear en Mayuscula, siempre

    // 2. Crear el href de enlace

    nuevoEnlace.href = "index.html";

    // 3. Crear el texto del enlace

    nuevoEnlace.textContent = "Nuevo enlace";


    // 4. Crear la clase del enlace

    nuevoEnlace.classList.Add("navegacion__enlace");  

    // 5. Agregarlo al documento HMTL (se le indica el lugar a donde queres el nuevo elemento)

      const navegacion = document.querySelector(".navegacion"); // Seleccionas el elemento dento del document y lo llamas por su clase

      navegacion.appendChild(NuevoEnlace); // Le agrega el elemento hijo a la navegacion original del documento. "NuevoEnlace" es el elemento que cree yo antes

  
// EVENTOS EN JAVASCRIPT

    /* 
      .Los eventos en JS son las acciones que se realizan. Ej : un click, scroll, apretar boton, etc. 
    
      .Existen eventos automaticos  y otros que realiza el usuario al navegar. Ej: Es un evento automatico cuando el documento carga y esta listo.

      .Con addEventListener se pueden registar los elementos y ejecutar cierto codigo cuando sucede ese evento

      .PREGUNTA TRABAJO -->  ¿Diferencia entre load y DOMContentLoaded ? Load espera que cargue todo (html, css, js), DOMContentLoaded solo espera el html
    */

    
  window.addEventListener('load'); // Estamos esperando un evento (espera que se cargue la ventana). window hace refencia a todo el javascript disponible, va mas alla que document


    // Ejemplo de funciones con eventos

      console.log(1);

      window.addEventListener('load', function() { //Espera que se carguen los archivos(evento load) y luego printea "2" en consola
        console.log(2);
      });

      console.log(3);             // Como resultado en consola se prinea 1, 3, y 2 (por el evento)

   
    Window.onload = function() {  // Otra forma de usar el evento load
      console.log (6)
    }


  

  // Seleccionar elementos y asociarles un evento

    const btnEnviar = document.querySelector('.boton-primario');  // Creamos una variable y seleccionamos el elemento (boton)

    btnEnviar.addEventListener('click', function(evento) {   // Una vez que seleccionas el elemento tienes disponible "addEventListene"  para registrar el evento que quieras
      console.log(evento);
      evento.preventDefault();                              // preventDefault
      console.log ('enviando formulario');
    });  

                                                          /*    IMPORTANTE
                                                            
                                                            Cuando necesites mas informacion, le podes pasar (a la variable que creaste) un "addEventListener"
                                                            
                                                              con una funcion con el objeto "evento" como parametro (hace referencia al evento que esta sucediendo,
                                                                
                                                              en este caso el "click")  y cuando lo printeas en consola te da la info sobre el objeto (evento click)
                                                          
                                                          */

  // Eventos con el teclado
  
   const nombre = document.querySelector('#nombre'); // Creo una variable con el id del input del formulario con el que estoy trabajando
     
   nombre.addEventListener('input', function(e) {    // "e" es el parametro evento     
      console.log(e)
   });                                               // En consola aparece dicho evento y muestra toda la informacion del mismo


                                                    // Con la propiedad "value" puedo manejar el texto dentro del formulario (va en el html dentro del input seleccionado)

    
    
    // Si tuviera una MISMA FUNCION repetida en varias variables creadas, la puedo definir aparte y simplificar condigo

      const nombre = document.querySelector('#nombre');
      const email = document.querySelector('#email');
      const textarea = document.querySelector('#textarea');

      nombre.addEventListener('input', leerTexto);       
      email.addEventListener('input', leerTexto);
      textarea.addEventListener('input', leerTexto);
          
      function leerTexto (e) {
        console.log(e.target.value) // Lee la info que introducimos en los input
      };


    //  Lo que vamos a hacer es que lo que escribimos en los input se agregue automaticamente al objeto global

      
      const datos = {
        nombre: '',
        email: '',        // Objeto global, es impotante que sus propiedades sean igual a los nombre de las variables
        textarea: '',
      }
    
    
    
      const nombre = document.querySelector('#nombre');
      const email = document.querySelector('#email');
      const textarea = document.querySelector('#textarea');

      nombre.addEventListener('input', leerTexto);       
      email.addEventListener('input', leerTexto);
      textarea.addEventListener('input', leerTexto);
        
      function leerTexto (e) {
        // console.log(e.target.value);  // e.target se refiere elemento clickado. Value nos da el valor (texto que contiende dentro)

        datos.[e.target.id] = e.target.value; //

        console.log(datos);
      };

    // El evento del tipo submit es igual pero en vez de definir "click", definis submit y el input debera tener un type=submit y debo seleccionar un formulario en vez de un boton




// Diferencias con innerText:
   
   // textContent lee el contenido de todos los elementos, incluyendo los elementos <script> (en-US) y <style>, innerText, no

   // innerText también tiene en cuenta el estilo y no retornará el texto de elementos escondidos, mientras que textContent sí lo hará.

   // Como innerText tiene en cuenta el estilo CSS, escribirlo disparará un reflow, mientras que textContent no lo hará.

// Diferencias con innerHTML

    /* innerHTML retorna el HTML como su nombre indica. Con bastante frecuencia, para leer o escribir texto en un elemento, la gente usa innerHTML. textContent debería usarse en su lugar.
        Ya que el texto no es procesado es más probable que tenga mejor rendimiento. Además, esto evita un vector de ataques XSS. */