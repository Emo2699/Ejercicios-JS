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


/*      CONTENIDO DE LA CLASE 65        */
//CLASES CSS
//const $card = document.querySelector(".card");
//console.log($card);

//Acceder al valor del atributo class
//console.log($card.className); //Devuelve el nombre de la clase que tiene el elemento
//console.log($card.classList); //Devuelve un elemento DOMTokenList[]

//Evaluar si un elemento tiene una clase en particular
//console.log($card.classList.contains("rotate-45"));
//
//$card.classList.add("rotate-45"); //Añadimos una clase al elemento
//
//console.log($card.classList.contains("rotate-45"));
//
//
//$card.classList.remove("rotate-45"); //Eliminamos una clase al elemento
//console.log($card.classList.contains("rotate-45"));


/*Este elemento pone la clase que le indicamos al elemento si no la 
tiene, pero si la tiene Se la quita*/
//$card.classList.toggle("rotate-45");//ponemos clase porque no la tiene
//console.log($card.classList.contains("rotate-45"));
//
//
//$card.classList.toggle("rotate-45");//quitamos clase porque si la tiene
//
//console.log($card.classList.contains("rotate-45"));

//REEMPLAZO DE UNA CLASE POR OTRA
//$card.classList.toggle("rotate-45");
//
//$card.classList.replace("rotate-45","rotate-135");

//INTERCAMBIO O REMPLAZO DE DISTINTAS CLASES AL MISMO TIEMPO
//$card.classList.add("opacity-80","sepia"); //Agregacion de varias clases
//$card.classList.remove("opacity-80","sepia"); //Eliminacion de varias clases
/*En el video se muestra que toggle funciona con más de dos clases
sin embargo en la consola del navegador, en la seccion de elementos,
se puede ver que solo funciono con la clase que esta en el primer
argumento de la funcion toggle()*/
//$card.classList.toggle("opacity-80");

/*      CONTENIDO DE LA CLASE 66        */
//Texto y HTML
// const $whatIsDOM = document.getElementById("que-es");
// let text = `
//     <p>
//         El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML
//     </p>
//     <p>
//         Este proveé una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS
//     </p>
//     <p>
//         <mark>
//             El DOM no es parte de la especificacion de JS, es una API de los navegadores.
//         </mark>
//     </p>
// `;

//Reemplazar contenido de la etiqueta que rescatamos por el ID
/*Con Inner text solo agregamos texto en crudo, si ponemos etiqueta 
HTML no la reconoce como tal*/
//$whatIsDOM.innerText = text; //forma que se usaba para Internet Explorer, Ya no es estandar
/*Otra forma de hacerlo es con textContent, la diferencia es que no 
respeta los saltos de linea ni tabuladores que tenga en mi texto
*/
//$whatIsDOM.textContent = text;  

/*Para renderizar etiquetas HTML usamos innerHTML*/
//$whatIsDOM.innerHTML = text;

/*Existe un metodo que se llama outerHTML, el cual reemplaza
la etiqueta del elemento que lo manda a ejecutar por las 
etiquetas que le pasemos, en este caso, lo que hay en la variable text

CASO 1--> con innerHTML
tenemos un parrafo inicial y a su contenido le puso lo que tiene la
variable text, por lo que da un parrafo con 3 parrafos internos

CASO 2 --> outerHTML
tenemos un parrafo inicial el cual reemplazamos por completo con lo que 
hay en la variable text, que en este caso son 3 nuevos parrafos, aunque
pudo haber sido un H1, img, table, etc

*/
//$whatIsDOM.outerHTML = text;


/*      CONTENIDO CLASE 67      */
/*  RECORRIENDO EL DOM --> DOM TRAVERSING*/
//recorrido de los elementos del DOM, es decir, de las etiquetas
/*Trabajaremos sobre la parte de la etiqueta <section></section>*/
//const $cards = document.querySelector(".cards");
//console.log($cards);
//console.log($cards.children);
//console.log($cards.children[2]);
//console.log($cards.parentElement); //Retorna el elemento padre
//console.log($cards.parentNode); //Retorna el elemento hijo
//console.log($cards.firstChild); //Primer hijo nodo
/*Aparece como texto debido a que toma como nodo de texto al 
salto de linea entre las etiquetas, si lo quitaramos ya 
nos apareceria la primer tarjeta. Pasa lo mismo si tenemos un 
comentario*/

//console.log($cards.firstElementChild); //Primer elemento HTML hijo
//Tambien hay metodos de últimos elementos e hijos
//console.log($cards.lastChild);
//console.log($cards.lastElementChild);

//Tambien podemos ver elementos aledaños al padre
//en este caso al estar trabajando sobre la etiqueta section
//los elementos serian <a></a>, y <script></script>
//console.log($cards.previousSibling); //pasa lo mismo que con los nodos
//console.log($cards.previousElementSibling);//elemento previo de HTML
//
//console.log($cards.nextSibling);
//console.log($cards.nextElementSibling);

//metodo closest()
/*Indica que elemento padre es el más cercano a partir del elemento que 
mande a ejecutar este metodo, le tenemos que mandar como parametro 
el nombre de la etiqueta HTML que buscamos*/
//console.log($cards.children[2].closest("section"));
/*Aqui mi referencia es una tarjeta.
le estoy indicando que me devuelva la etiqueta section que actua como
padre más cercana a la de mi referencia.*/



/*      CONTENIDO DE LA CLASE 68 --> CREANDO ELEMENTOS Y FRAGMENTOS     */
//Elemento == Etiqueta HTML

//Crearemos una nueva tarjeta
//const $figura = document.createElement("figure"), //etiqueta figure
//$img = document.createElement("img"),//etiqueta img
//$fidcaption = document.createElement("figcaption"),//etiqueta fidcaption
/*La etiqueta fidcaption tiene un nodo de texto, entonces tambien lo 
tenemos que crear*/
//$fidcaptionText = document.createTextNode("Nueva"),
//$cards = document.querySelector(".cards"); //Elemento padre

//incorporacion de las etiquetas al DOM
/*Primero modificamos los atributos de la etiqueta de la img,
en donde especificamos su src y alt*/
//$img.setAttribute("src","http://placeimg.com/200/200/animals");
//$img.setAttribute("alt","Animals");

//Aregamos al fidcaption el nodo fidcaptionText
//$fidcaption.appendChild($fidcaptionText);

//Ahora, agregamos a la etiqueta figure, las etiquetas img y fidcaption
//$figura.appendChild($img);
//$figura.appendChild($fidcaption);

/*Para que nuestra figura tenga los estilos que tienen las demas,
le agregamos la clase "card" ya que con esa le añadimos los estilos
con CSS a las tarjetas*/
//$figura.classList.add("card");
//Ahora, agregamos a la etiqueta section la figura
//$cards.appendChild($figura);

/*Segunda forma de agregarlo, no es la más correcta pero funciona*/
//const $figura2 = document.createElement("figure");

// $figura2.innerHTML = `
//         <img src="http://placeimg.com/200/200/people" alt="People">
//         <figcaption>People</figcaption>
// `;

//Agregamos la clase
//$figura2.classList.add("card");

//Agregamos la figura2 a la section
//$cards.appendChild($figura2);

//Más ejemplos
//document.write("<h3>Más ejemplos de manipulacion de DOM</h3>");
//Estaciones del año
//const estaciones=["Primavera","Verano","Otoño","Invierno"],
//$ul = document.createElement("ul");

//Agregamos al body nuestra lista
//document.body.appendChild($ul);

//Recorremos nuestro arreglo y por cada elemento agrgeamos un li al ul
// estaciones.forEach(estacion =>{
//     const $li = document.createElement("li");
//     $li.textContent = estacion; //Agregamos el texto a la etiqueta
//     $ul.appendChild($li); //Aregamos el "li" al "ul"
// });


//Segunda forma de hacerlo
//document.write("<h3>Continentes del mundo</h3>");
//const continentes=["America","Europa","Asia","Africa","Oceania"],
//$ul2 = document.createElement("ul");

//Agregammos al body
//document.body.appendChild($ul2);
/*Como iremos agregando las li como si fueran cadenas de texto
es necesario que inicialicemos nuestro innerHTML, en caso
contrario marcaria error*/
//$ul2.innerHTML="";
// continentes.forEach(continente =>{
//     /*Le ponemos += ya que esta funcionando como cadena, si le quitamos
//     el + solo agregaria el último elemento ya que lo estaría sobre
//     escribiendo*/
//     $ul2.innerHTML += `<li>${continente}</li>`
// });

/*Uso de Fragmentos*/
// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre"
// ], $ul3 = document.createElement("ul"),
// $fragmento = document.createDocumentFragment();

/*Al ser fragmentos, no se puede usar innerHTML, por lo que
se crearan elemento por elementos como en la primer
version que se vio*/

/*En el siguiente ejemplo, lo que se hace es crear un 
fragmento donde se añaden todas las etiquetas li
a dicho fragmento, pero aún no lo añadimos al dom.
Es como si se creara una variable HTML que despues
se inserta al DOM*/ 

// meses.forEach(mes =>{

//     const $li = document.createElement("li");
//     $li.textContent = mes;
//     $fragmento.appendChild($li);
// });

/*Una vez creado nuestro fragmento, lo añadimos a nuestro DOM,
entonces, esto mejora el rendimiento ya que SOLO hacemos una
inserción en lugar de las n que se hubieran necesitado
de insertar elemento por elemento*/
// document.write("<h3>Meses del año con Fragmento</h3>");
// $ul3.appendChild($fragmento);
// document.body.appendChild($ul3);


/*      CONTENIDO DE LA CLASE 69 --> TEMPLATES HTML     */
// const $card = document.querySelector(".cards")
// ,$template = document.getElementById("plantilla").content,
// $fragmento = document.createDocumentFragment(),
// cardContent = [
//     {
//         title:"Tecnología",
//         img:"http://placeimg.com/200/200/tech"
//     },
//     {
//         title:"Animales",
//         img:"http://placeimg.com/200/200/animals"
//     },
//     {
//         title:"Arquitectura",
//         img:"http://placeimg.com/200/200/arch"
//     },
//     {
//         title:"Gente",
//         img:"http://placeimg.com/200/200/people"
//     },
//     {
//         title:"Naturalesza",
//         img:"http://placeimg.com/200/200/nature"
//     },
// ];

// cardContent.forEach(carta =>{
//     $template.querySelector("img").setAttribute("src",carta.img);
//     $template.querySelector("img").setAttribute("alt",carta.title);
//     $template.querySelector("figcaption").textContent=carta.title;

//     let $clon = document.importNode($template,true);
//     $fragmento.appendChild($clon);
// });

// $card.appendChild($fragmento);



/*   CONTENIDO DE LA CLASE 70 --> MODIFICACION DE ELEMENTOS OLD STYLE*/

// const $cartas = document.querySelector(".cards"),
// $newCarta = document.createElement("figure"),
// $cloneCards = $cartas.cloneNode();


// $newCarta.innerHTML=`
//     <img src="http://placeimg.com/200/200/any" alt="Any">
//     <figcaption>Any</figcaption>
// `;
//Agregamos la clase card a la etiqueta cartas
//$newCarta.classList.add("card");

/*Insertamos un elemento por remplazo*/
//$cartas.replaceChild($newCarta,$cartas.children[2]);

/*Insertamos antes de un nodo especificado*/
//$cartas.insertBefore($newCarta,$cartas.firstElementChild);
//$cartas.insertBefore($newCarta,$cartas.children[0]);

/*Eliminamos un elemmento*/
//$cartas.removeChild($cartas.lastElementChild);

/*Clonacion de elementos*/
//document.body.appendChild($cloneCards);


/*CONTENIDO DE LA CLASE 71*/
/*
    .insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacenText(position,text)
    
    Posiciones
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)
*/

// const $cartas = document.querySelector(".cards"),
// $newCarta = document.createElement("figure");
// $cloneCards = $cartas.cloneNode();


// $newCarta.innerHTML=`
//     <img src="http://placeimg.com/200/200/any" alt="Any">
//     <figcaption>Any</figcaption>
// `;
//Agregamos la clase card a la etiqueta cartas
//$newCarta.classList.add("card");

//$cartas.insertAdjacentElement("beforebegin",$newCarta);
//$cartas.insertAdjacentElement("afterbegin",$newCarta);
//$cartas.insertAdjacentElement("beforeend",$newCarta);
//$cartas.insertAdjacentElement("afterend",$newCarta);

// let $contenidoCarta =`
//     <img src="http://placeimg.com/200/200/any" alt="Any">
//     <figcaption></figcaption>
// `;

//$newCarta.insertAdjacentHTML("beforeend",$contenidoCarta)

//$newCarta.querySelector("figcaption").insertAdjacentText("beforeend","Any");

//$cartas.insertAdjacentElement("beforebegin",$newCarta);


//Con JQuery
//$cartas.prepend($newCarta);
//$cartas.before($newCarta);
//$cartas.append($newCarta);
//$cartas.after($newCarta);

/*CONTENIDO DE LA CLASE 72 --> MANEJADORES DE EVENTOS*/

