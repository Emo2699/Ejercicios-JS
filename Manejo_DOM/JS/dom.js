/*  Manejo del DOM en JS    */

// console.log("*********  Elementos del DOM  **********");
// console.log(window.document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.scripts);

/*Mala practica usar este metodo, pero se uso como ejemplo para ver como modificamos el DOM.
el mensaje lo coloco hasta el final del html, es decir, que si
tenia contenido la pagina en un inicio, el mensaje lo puso
al final o hasta abajo del HTML
*/
//document.write("<h2>Hola mundo desde JS en el HTML</h2>");


/**********************************************************/

/*Contenido del video de la clase 62*/
//Node.nodeType

/*Aunque la salida de este metodo pareciera que es un arreglo
como los que se vieron en los Conceptos basicos de JS, el 
resultado es diferente ya que la salida es una coleccion
de HTML*/
//console.log(document.getElementsByTagName("li"));

/*Busca elementos del HTML con el nombre de la clase que 
recibe como parametro, la salida tambien es una coleccion de
elementos de HTML
*/
//console.log(document.getElementsByClassName("card"));

/*Aqui busca elementos HTML por su nombre, es decir, que su
atributo name, sea igual a la cadena que le pasamos al 
metodo como parametro. Su salida ahora es una lista de Nodos
"NodeList[]", la cual es diferente de las salidas de los 
metodos anteriores.
*/
//console.log(document.getElementsByName("nombre"));

/*Ahora buscamos un solo elemento dentro del documento HTML
en este caso hacemos la busqeuda por el id, es decir, que
su atributo id sea igual a la cadena que pasamos como 
parametro en este metodo
nos devuelve un SOLO elemento
*/
//console.log(document.getElementById("menu"));


/*METODOS POPULARES*/
/*Este metodo se puede decir que reemplaza a los metodos 
anteriores, debido a que con un solo metodo podemos
buscar cualquier elemento por su Id o por su clase
Es importante recalcar que el parametro que recibe
es de acuerdo al selector que se trabaja en CSS, entonces
class = .
id = #
etiqueta HTML = nombre_etiqueta
*/
//console.log(document.querySelector("#menu"));//busco por id

/*A nivel de rendimiento, este metodo de querySelector() es mas lento que el getElementById() debido a la validacion del
selector que tiene internamente
*/

//console.log(document.querySelector("a"));//busco por etiqueta

/*Solo trae a la primera ocurrencia que haya dentro del 
documento*/

//console.log(document.querySelectorAll("a"));
/*Aqui trae todas las ocurrencias, es resultado es una NodeList[]*/

/*Podemos usar algunos metodos que tambien hay en los
arreglos debido a que los nuevos tipos de datos en el 
manejo del DOM tambien los comparten. NO SIGNIFICA
QUE UNA NodeList[] es igual a un Array[]*/

// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll("a").forEach(elemento =>{
//     console.log(elemento);
// });

//busqueda con selector class
// document.querySelectorAll(".card").forEach(element =>{
//     console.log(element);
// });

//impresion de li dentro del menu
// document.querySelectorAll("#menu li").forEach(etiqueta => {
//     console.log(etiqueta);
// });

//impresion por posicion
//console.log(document.querySelectorAll(".card")[2]);

/*****************************************************/

/*      CONTENIDO DE LA CLASE 63        */