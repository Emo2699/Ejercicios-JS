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
/*




*/
/*Accedo a la etiqueta lang ddel HTML con notacion punto*/
//console.log(document.documentElement.lang);
/*Otra forma de hacerlo*/
//console.log(document.documentElement.getAttribute("lang"));

//console.log(document.querySelector(".link-dom").href);

/*La diferencia con el metodo getAttribute es que me trado el valor
o la cadena que esta en el atributo que le indicamos, es decir,
la cadena de la pagina como tal.
Arriba nos arrojo el valor de toda la ip a la que apuntaba el valor
del atributo que se le paso como argumento*/
//console.log(document.querySelector(".link-dom").getAttribute("href"));
/*
    DIFERENCIA ENTRE getAttribute y notacion punto
*/


//ESTABLECIENDO NUEVOS VALORES A LOS ATRIBUTOS
/*El resultado lo vemos en la consola del navehador, en la seccion de 
elementos.*/

//notacion punto
//document.documentElement.lang="en"

//con getAttribute
//document.documentElement.setAttribute("lang","es-MX");

//Uso de variables para almacenar lo que traemos del DOM, puede ser const o let
//Recomendacion, variables del DOM anteponerle $
//const $linkDom = document.querySelector(".link-dom");
//Si no existe el atributo lo pone y le asigna valor
//$linkDom.setAttribute("target","_blank");
//$linkDom.setAttribute("rel","noopener");
//Si existe el atributo, le cambia unicamente el valor
//$linkDom.setAttribute("href","https://www.google.com.mx");

//Verificacion de exstencia de atributos
//console.log($linkDom.hasAttribute("rel"));

//Eliminacion de atributos
//$linkDom.removeAttribute("rel");

//console.log($linkDom.hasAttribute("rel"));

//Data-Attributes
//console.log($linkDom.getAttribute("data-description"));
//console.log($linkDom.dataset);
//console.log($linkDom.dataset.description);
//Establecer nuevos valores
//$linkDom.setAttribute("data-description","DOM");
//$linkDom.dataset.description="Holi";


/*      CONTENIDO DE LA CLASE 64        */
//ESTILOS Y VARIABLES CSS
//const $linkDom = document.querySelector(".link-dom");

/*Regresa un objeto CSSStyleDeclaration, el cual es un mapa en JS*/
//console.log($linkDom.style);
//console.log($linkDom.getAttribute("style"));//Solo arroja lo que hay en el HTML enn dicho atributo
//console.log($linkDom.style.backgroundColor);//En formato RGB
//console.log($linkDom.style.color); ///En formato RGB

/*Al igual que console.log($linkDom.style);, tambien nos arroja
un mapa de todas las propiedades css del elementos que le pasamos,
sin embargo, la diferencia es que podemos apreciar los valores
asignados por defecto del navegador a nuestro elemento*/

//console.log(window.getComputedStyle($linkDom));
//console.log(getComputedStyle($linkDom).getPropertyValue("color"));

//Establecer valores
//$linkDom.style.setProperty("text-decoration","none");//quita el subrayado del link
//$linkDom.style.setProperty("display","block");
//$linkDom.style.width="50%";
//$linkDom.style.textAlign="center";
//$linkDom.style.marginLeft="auto";
//$linkDom.style.marginRight="auto";
//$linkDom.style.padding="1rem";
//$linkDom.style.borderRadius=".9rem";
//console.log($linkDom.getAttribute("style"));

//Variables CSS --> Custom Properties
//const $html = document.documentElement,$body = document.body;
//console.log(getComputedStyle($html));
//let DarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
//let YellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

//console.log(DarkColor,YellowColor);

//$body.style.backgroundColor = DarkColor;
//$body.style.color = YellowColor;

//Modificacion del valor de las variables.

//$html.style.setProperty("--dark-color","pink");
//DarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

//$body.style.setProperty("background-color",DarkColor);
