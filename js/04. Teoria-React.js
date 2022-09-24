/* Apuntes clase 1
*   const = puede cambiar pero no se puede reasignar o apuntar a un objeto diferente. Ej: si creo const myArray = [1,2,3]; --> myArray.push(4); Es valido
*
*   var: Por el ambito que posee, si defino la variable dentro de un bloque (if, switch,  etc) no puedo acceder desde afuera. De una f(x) a un ambito global si funciona
*
*
*Resumiendo: const no te asegura que sea constante, si puedo mutear, no reasignar. Var se debe usar,
*se puede usar una var declarada dentro de un bloque (no es lo mismo que una f(x)) y acceder desde afuera, es una mala practica. No se puede declarar 2 veces. Siempre usar let
*
*   Spread operator, map, arrow f(x), operador ternario, imports, desestructuracion ---> repasar porque es muy util
*
* La diferencia principal entre map y forEach es que el método map devuelve una nueva matriz aplicando la función de devolución de llamada en cada elemento
* de una matriz, mientras que el método forEach no devuelve nada.
*/


/* Apuntes Clase 2
*
* 1)  El acceso al DOM es caro,entoves crearon el VIRTUAL DOM, en vez aplicar todos los cambios sobre el DOM, 
*       primero procesa los cambios en memoria, calcula la manera mas optima y luego los aplica.
*       Hace los cambios en el VIRTUAL DOM, agarra todas las peticiones, y evalua el mejor algoritmo posible para aplicar los cambios.
*     Cuando el estado cambia de app cambia, se renderiza! Basicamente administra el acceso al DOM.
*
* 2) El flujo es unidireccional, se ejecuta de arriba hacia abajo.Te da la que saber de donde vienen los datos y hacia donde van, sobre todo para debuggear.
*
* 3) NODE JS, servidor local para javascript/Typescript. NPM Node Package Manager, es el "ayudante" de Node. Contiene todas las librerias y dependencias para instalar. Es un repositorio de librerias
*
*
*
*/

//var startTime = performance.now(); // Medir cuanto tiempo pasa, para 
//var endTime = performance.now();

/* Apuntes Clase 2 JSX - TRANSPILING
*
*       1) SUGAR-SYNTAX: ¿Que significa? 
*
*        .Spread Operator: [...nombreArray, valor que queres agregar] se usa en lugar de push  OBS PROFE: Un buen programador JS sabe usar bien Spread Operator
*
*        .Desestructuracion: var {a: val}= {a : 2} para acceder a valores de variables
*
*        .Usaremos Map en lugar de foreach/for para recorrer arrays
*
*        .Operador Ternario
*
*        .Arrow function
*
*       2) Polyfill: es una pieza de codigo, usado para proveer funcionalidad moderna a navegadores antiguos
*
*       3) JSX 
*        
*/

/* Apuntes Clase 3 COMPONENTES I
*       
*           .Formatear proyecto sin crear otra app. Borrar node_moduls + package-lock y ejecutas npm i en consola.
*         
*           .package.json   nunca debe borrarse.   
*
*           .Componentes: En React es un componente, todo se trabaja por separado. Se llama modulizacion,
*           .Props
*
*            rfc snippets components
*
*           //@ts-cheack para que te avise los errors
*
*           
*           clase: 00:40:33 crea componente hijo || 00:46:15 usa @ts-cheack  || 00:54:09 props, 00:56:31 manda una prop || 01:08:25 mada f(x) || 02:05:20 desafio landing
*/

/*          clase 4 Componentes II
*
*           Props:
*                 .Es la forma que tiene react de pasar parametros de un componente superior a su children
*                 .Es una orden que el hijo (children) debe obedecer y no puede cambiar 00:17:00hs
*   
*                 ej: nombrePropiedad={valor-propiedad} --> let arrayFrutas = [Banana, naranja]; <Componente nombrePropiedad={arrayFrutas}/>
*              
*                 .JSON.stringify(nombrePropiedad); --> convierte a string y muestra, sirve para debbugear 00:28:07
*
*                  
*           Variables:
*                     .Me sirven solo para hacer calculos auxiliares
*                     .Mueren y pierden su valor entre renders.
*                     .Las puedo modificar
*                     .Si las muto no veo su valor reflejado en la UI porque no hubo render
*
*           Estados: 00:53:00hs
*                   .  Es un objeto de React: Que es? Es una variable que cuando cambia su valor, se renderiza devuelta el componente sin perder ese valor y ese cambio se puede ver reflejado
*                                                     en pantalla
*
* 
*           OBS: 
*               .crea varibale let maxstock = 100; en f(x) App y se la pasa al hijo maxStock={maxStock}
*               .00:37:27 empieza lo bueno
*               . pasar f(x) por onclick --> onClick={() => aumentarStock()}
*
*
*           desafio: crear un componente ItemCount.jsx con un boton y controles para incrementar y decrementar la cantidad requerida de items         
*/
    
/*          clase 5 Promises
*
*
*          Una promesa es un "contrato" entra ambas parte donde al que se le pide la info le tiene que dar una respuesta mientras la app sigue corriendo

/* Apuntes clase 1
*   const = puede cambiar pero no se puede reasignar o apuntar a un objeto diferente. Ej: si creo const myArray = [1,2,3]; --> myArray.push(4); Es valido
*
*   var: Por el ambito que posee, si defino la variable dentro de un bloque (if, switch,  etc) no puedo acceder desde afuera. De una f(x) a un ambito global si funciona
*
*
*Resumiendo: const no te asegura que sea constante, si puedo mutear, no reasignar. Var se debe usar,
*se puede usar una var declarada dentro de un bloque (no es lo mismo que una f(x)) y acceder desde afuera, es una mala practica. No se puede declarar 2 veces. Siempre usar let
*
*   Spread operator, map, arrow f(x), operador ternario, imports, desestructuracion ---> repasar porque es muy util
*
* La diferencia principal entre map y forEach es que el método map devuelve una nueva matriz aplicando la función de devolución de llamada en cada elemento
* de una matriz, mientras que el método forEach no devuelve nada.
*/

