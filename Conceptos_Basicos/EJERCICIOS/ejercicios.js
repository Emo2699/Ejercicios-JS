/**
 * Author:              Ramirez Morales Erick Hazel
 * Date:                23-02-23
 * Description:         Solucion a problemas propuestos dentro del PDF
 */


/*          PROBLEMA 1          */
//version sencilla
function contarCaracteres(cadena){
    if(typeof(cadena)!= 'string'){
        console.error("el argumento no es una String");
        return;
    }
    console.log(cadena.length);
}//fin funcion
//contarCaracteres("50");

//version 2 en arrow function
const contar = (cadena2)=>{
    if(typeof(cadena2)!= 'string'){
        console.error("el argumento no es una String");
        return;
    }
    let conteo = 0;
    for(let i in cadena2){
        conteo+=1;
    }
    console.log(conteo);
}//fin funcion
//contar(50);


/*      PROBLEMA 2      */
//version sencilla
function partirCadena(cadena,n){
    if(typeof(cadena) != 'string'){
        console.error("la cadena no es una String");
        return;
    }
    console.log(cadena.substring(0,n));
}//fin funcion
//partirCadena("Mozilla",3);

//version 2 en arrow function
const problema2 = (cadena,n) =>{
    if(typeof(cadena) != 'string'){
        console.error("la cadena no es una String");
        return;
    }
    let resultado="",i;
    for(i = 0; i < n; i++){
        resultado+=cadena[i];
    }
    console.log(resultado);
}//fin funcion
//problema2("ya no quiero estar aqui",8);

/*      PROBLEMA 3      */
//version sencilla
function separarCadena(cadena,caracter){
    if(typeof(cadena) != 'string' || typeof(caracter) != 'string'){
        console.error("Los parametros no son String -_-");
        return;
    }
    console.log(cadena.split(caracter));
}//fin funcion
//separarCadena("hola que tal"," ");
    

//version en arrow function
const problema3 = (cadena,caracter)=>{
    if(typeof(cadena) != 'string' || typeof(caracter) != 'string'){
        console.error("Los parametros no son String -_-");
        return;
    }
    let resultado = [], i; //Declaramos nuestro arreglo
    let aux = ""; //Declaramos una cadena vacia auxiliar

    for(i in cadena){
        if(cadena[i] != caracter){
            aux +=cadena[i];
        }
        else{
            resultado.push(aux);
            aux="";
        }
    }
    if(aux != ""){
        resultado.push(aux);
    }
    console.log(resultado);
}//fin funcion
//roblema3("hola que tal","o");


/*      PROBLEMA 4      */
//version sencilla
function repeticion(cadena,veces){
    if(typeof(cadena) != 'string' || typeof(veces) != 'number'){
        console.error("El tipo de datos de los argumentos es incorrecto -_-");
        return;
    }
    console.log(cadena.repeat(veces));
}//fin funcion
//repeticion("hola ",4);

//version en arrow function
const problema4 = (cadena, n)=>{
    if(typeof(cadena) != 'string' || typeof(n) != 'number'){
        console.error("El tipo de datos de los argumentos es incorrecto -_-");
        return;
    }
    let i,resultado="";
    for(i = 0; i < n; i++){
        resultado+=cadena;
    }
    console.log(resultado);
}//fin funcion
//problema4("hola",10);


/*      PROBLEMA 5      */
//version sencilla
function invertir(cadena){
    if(typeof(cadena) != 'string'){
        console.error("La cadena no es una string -_-");
        return;
    }
    let resultado="";
    for(let i = cadena.length-1; i >-1;i--){
        resultado+=cadena[i];
    }
    console.log(resultado);
}//fin funcion
//invertir("hola");

/*      PROBLEMA 6      */
function problema6(cadena_larga, cadena_buscada){
    if(typeof(cadena_larga) != 'string' || typeof(cadena_buscada) != 'string'){
        console.error("Los parametros son incorrectos -_-");
        return;
    }
    /*Validamos si la cadena larga tiene coma, en caso 
    que sea asi, las remplazamos con una cadena vacia
    como no podemos modificar los valores de los
    argumentos, usaremos una variable auxiliar
    */
    let aux = "";
    if(cadena_larga.search(",")){
        aux = cadena_larga.replaceAll(",","");
    }
    //console.log(aux);
    /*Aqui la cadena larga la separaremos en un arreglo,
    donde el separador para cada elemento del arreglo
    es cuando encuentre un espacio en la cadena larga
    */
    let arreglo = aux.split(" ");
    /*Ahora buscamos dentro del arreglo y vamos comparando
    cada uno de sus elementos con la cadena buscada y con 
    la ayuda de una variable auxiliar vamos contando
    las veces que coincidan en la comparacion
    */
    let resultado = 0;
    arreglo.forEach(elemento => {
        if(elemento === cadena_buscada)
            resultado++;
    });
    console.log(resultado);
}
//problema6("Hola mundo, Adios mundo, ya me quiero ir mundo","mundo");

/*      PROBLEMA 7      */
const problema7 = (cadena)=>{
    if(typeof(cadena) != 'string'){
        console.error("La cadena no es una string -_-");
        return;
    }
    let bandera = 0;
    let i,j = cadena.length -1;
    for(i = 0; i < j; i++,j--){
        if(cadena[i] != cadena[j]){
            bandera = 1;
            break;
        }
    }
    bandera === 1 ? console.log("NO ES PALINDROMO"):console.log("ES PALINDROMO");
}//fin funcion
//problema7("hola");


/*      PROBLEMA 8      */
//Version en arrow function
const problema8 = (cadena,patron)=>{
    if(typeof(cadena) != 'string'){
        console.error("La cadena no es de tipo string -_-");
        return;
    }
    let regex = new RegExp(patron,"g");
    let aux = "";
    if(cadena.search(patron)!= -1){
        aux = cadena.replaceAll(regex,"");
    }
    console.log(aux);
}
//problema8("xyz1, xyz2, xyz3, xyz4 y xyz5","yz");

/*
    NOTA: Visitar el siguiente enlace para conocer mas sobre el uso de expresiones regulares.
    https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

    https://www.arkaitzgarro.com/javascript/capitulo-11.html
*/

/*      PROBLEMA 9      */
function aleatorio(minimo,maximo){
    return (Math.random() * (maximo-minimo) + minimo);
}
// let res = aleatorio(501,600);
// console.log(Math.round(res));

/*      PROBLEMA 10     */
const problema10 = (numero)=>{
    if(typeof(numero) != 'number'){
        console.error("El parametro no es un numero -_-");
        return;
    }
    let bandera = 0, cadena = numero.toString();
    let i,j = cadena.length -1;
    for(i = 0; i < j; i++,j--){
        if(cadena[i] != cadena[j]){
            bandera = 1;
            break;
        }
    }
    bandera === 1 ? console.log("NO ES CAPICUA"):console.log("ES CAPICUA");
}
//problema10(14642);

/*      PROBLEMA 11     */
//version recursiva
function factorial(numero){
    if(numero === 1){
        return 1;
    }
    else
        return numero * factorial(numero -1);
}//fin funcion
// let problema11 = factorial(4);
// console.log(problema11);

//version iterativa
function factorialIterativa(numero){
    if(numero === 1)
        console.log(1)
    else{
        let i,res= 1;
        for(i = numero; i > 0; i--){
            res*=i;
        }
        console.log(res);
    }    
}//fin funcion
//factorialIterativa(3);


/*      PROBLEMA 12     */
//version en arrow function
const problema12 = (numero)=>{
    if(typeof(numero) != 'number'){
        console.error("El numero no es de tipo number -_-");
        return;
    }
    if(numero <  0){
        console.error("El numero debe de ser positivo para determinar si es primo o no -_-");
        return;
    }
    if(numero === 1){
        console.info("El numero 1 no se considera primo o no primo");
        return;
    }
    if(numero === 2){
        console.log("ES PRIMO");
        return;
    }
    else{
        let iterador = 2;
        while(iterador < numero){
            if(numero % iterador === 0){
                console.log("NO ES PRIMO");
                return;
            }
            iterador++;
        }
        console.log("ES PRIMO 7u7r");
    }
}
//problema12(3);

/*      PROBLEMA 13     */
//version en funcion normal
function esPar_Impar(numero){
    if(typeof(numero) != 'number'){
        console.error("El numero no es de tipo number -_-");
        return;
    }
    numero%2 === 0?console.log("ES PAR"):console.log("ES IMPAR");
}
//esPar_Impar(10);

/*      PROBLEMA 14     */
//version en arrow function
/*Con esta funcion tenemos una pequeña interaccion con el usuario a travez del metodo prompt()*/
const problema14 = ()=>{
    opcion = prompt("Ingresa 1 para convertir de Celsius a Farenheit.\nIngresa 2 para convertir de Farenheit a Celsius.");
    let resultado = 0, grados;
    /*NOTA: A diferencia de C, donde el switch funcionaba únicamente con int o con char, aqui en JS puede fucionar con string tambien*/
    switch(opcion){
        case "1":
            //celsius a farenheit
            grados = prompt("Ingresa los grados Celsius:");
            resultado = ((parseFloat(grados) * 9/5)+32);
            console.log("Los grados en Farenheit son: "+resultado);
            break;
        case "2":
            //farenheit a celsius
            grados = prompt("Ingresa los grados Farenheit:");
            resultado = ((parseFloat(grados) - 32)/(9/5));
            console.log("Los grados en Celsius son: "+resultado);
            break;
        default:
            console.error("Opcion incorrecta -_-");        
    }//fin del switch
}
//problema14();


/*      PROBLEMA 15     */
function conversion_binaria_decimal(){
    opcion = prompt("Ingresa 1 para convertir de Decimal a Binario\nIngresa 2 para convertir de Binario a Decimal")

    let numero,resultado = "";
    switch(opcion){
        case "1":
            //      Decimal a Binario
            /*Al numero lo necesitamos convertir a tipo de dato number para operar con él*/
            numero = parseInt(prompt("Ingresa el numero a convertir:"));
            
            while(Math.trunc(numero / 2) != 0){
                resultado+= (numero%2).toString();
                numero = Math.trunc(numero /2);
            }
            /*Al terminar el bucle aun falta añadir a
            la cadena resultado el modulo de la 
            division 1/2. Por eso lo agregamos
            */
            resultado+= (numero%2).toString();
            /*En este punto ya tenemos la cadena binaria
            correspondiente a la conveersion, ahora solo
            falta invertirla ya que con el proceso
            anterior la fuimos guardando al revés.
            Nos apoyaremos de la funcion del problema 5
            para voltearla*/

            invertir(resultado);
            break;
        case "2":
            //      Binario a Decimal
            numero = prompt("Ingresa el numero en BINARIO a convertir:");
            /*Para este proceso trabajaremos con la cadena de forma invertida a como la meta el usuario,
            Esto debido a que las personas estas acostumbradas
            a escribir los numeros binarios de tal forma
            en que los numeros con mayor potencia estan a la izquierda, pero al convertirlo a decimal es más conveniente hacerlo con la cadena invertida*/

            let aux = "";
            for(let i = numero.length-1; i > -1; i--){
                aux+=numero[i];
            }
            /*Comenzamos con el proceso de conversion*/
            let decimal = 0;
            for(let j in aux){
                if(aux[j] === "1"){
                    decimal+= Math.pow(2,j);
                }
            }
            console.log(decimal);
            break;
        default:
            console.error("Opcion Incorrecta -_-");        
    }

}//Fin de la funcion

//conversion_binaria_decimal();

/*Otra forma de hacer la conversion*/
/*En esta funcion no hay necesidad de voltear la cadena recibida
unicamente nos apoyamos con una variable auxiliar
para ir controlando las potencias.*/
function Decimal_binario(numero){
    if(typeof(numero) != 'string'){
        console.error("El tipo de dato es incorrecto -_-");
        return;
    }
    let aux = numero.length-1, i, resultado = 0;
    for(i in numero){
        if(numero[i] === "1"){
            resultado+=Math.pow(2,aux);
        }
        aux--;
    }
    console.log(resultado);
}
//Decimal_binario("1101");

/*      PROBLEMA 16     */
const problema16 = (monto,porcentaje)=>{
    if(typeof(monto) != 'number' || typeof(porcentaje) != 'number'){
        console.error("Los argumentos ingresados no son del tipo number");
        return;
    }
    if(monto < 0 && porcentaje < 0){
        console.error("Las cantidades ingresadas son incorrectas -_-");
        return;
    }
    let descuento = (monto * porcentaje) / 100;
    console.log("El monto final es: "+(monto - descuento));
}
//problema16(200,40);


//      MANEJO DE FECHAS EN JS
//en fechas se trabaja con formato año,mes,dia 
/*NOTA: Para crear un dato de tipo Date en JS, lo podemos
hacer a partir de una cadena con el formato 
YYYY/MM/DD o YYYY-MM-DD

OJO: Al hacer unas pruebas en como meter las fechas con
los formatos anteriores se observó que hay diferencia
en el resultado al meter los meses en formato de dos digitos

Ejemplo: si metemos 2023-3-17 el resultado arroja
        Friday Mar 17 2023 (que seria a como viene en 
        el calendario para nosotros, es decir, el Mexicano en CDMX) aqui marca las 0:00 horas
    
        si metemos 2023-03-17, el resultado es
        Thursday Mar 16 2023,con la hora marcada en las 18:00
        
        Entonces hay que tener cuidado, por ahora se observa
        que lo mas recomendable es meter los meses con un 
        solo dígito.

Otra forma de ingresar la fecha es con el formato 
MM/DD/2023 o MM-DD-YYYY, en este caso al probar meter
los meses con dos dígitos como en el jemplo explicado 
anteriormente, no hay problema en diferencia de horas

este formato de fecha es el de US

JS tambien acepta la abreviatura de años en dos digitos YY
*/
// let fecha_en_string = "3/17/2023";
// let fecha = new Date(fecha_en_string);
// console.log(fecha.getFullYear());


/*      PROBLEMA 17     */
const problema17 = (fecha)=>{
    
    let date = new Date(fecha);
    let anio = date.getFullYear(),ahora = new Date().getFullYear();
    if(ahora < anio){
        console.error("Error en la fecha ingresada");
        return;
    }
    else
        console.log(ahora - anio);
}
//problema17("2/26/2025");

/*      PROBLEMA 18     */
const problema18 = (cadena)=>{
    if(typeof(cadena) != 'string'){
        console.error("La cadena ingresada no es una string");
        return;
    }
    /*Crearemos dos arreglos donde guardaremos los
    caracteres correspondientes a las vocales y a las
    consonantes
    */
    let vocales = ['a','e','i','o','u','A'];
    let consonates = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    let minusculas = cadena.toLocaleLowerCase();
    let vocal = 0, consonante = 0;
    for(let i in minusculas){
        if(vocales.includes(minusculas[i])){vocal++;}
        else if(consonates.includes(minusculas[i])){
            consonante++;
        }
    }
    console.log("El numero de vocales es: "+vocal+"\nEl numero de consonantes es: "+consonante);
}
//problema18("a");

/*      PROBLEMA 19     */
/*Validacion de un nombre
Para este ejercicio se esta tomando en cuenta 
los posibles nombres en español, considerando
las vocales con acentos, tanto en mayúsculas
como en minusculas, asi como la letra ñ

Ejemplo valido para la mayoria de los nombres
mexicanos
*/
const problema19 = (nombre)=>{
    if(typeof(nombre) != 'string'){
        console.error("El nombre no es de tipo string -_-\n");
        return;
    }
    let regex_nombre = /^[a-zA-Z\sáéíóúÁÉÍÓÚÑñ.]+$/;
    regex_nombre.test(nombre)
    ?console.log("Nombre Válido")
    :console.error("Nombre Inválido -_-");
}
//problema19("Cualquier nombre :v");

/*      PROBLEMA 20     */
/*Validacion de correo
al menos fuciona para los más comunes que
se pueden llegar a encontrar. sin caracteres
raros o de otro idioma. Enfocado a los
correos que puede haber en español y en ingles
*/
const problema20 = (correo)=>{
    if(typeof(correo) != 'string'){
        console.error("El correo no es una string -_-");
        return;
    }
    let regex_correo = /^[a-zA-Z0-9.\s-_]+@+[a-zA-Z0-9]+[a-z.]+$/;
    regex_correo.test(correo)
    ?console.log("Correo Válido 7u7r")
    :console.error("Correo Inválido -_-");
}
//problema20("erick_hazel-96@fdsfnbdsmf.com.mx");
//PUREBAS DE REGEX
//let regex = /^[a-zA-Z0-9.\s-_]+@+[a-zA-Z0-9]+[a-z.]+$/
//console.log(regex.test("erick_hazel-96@dominio.com.mx"));
/*Video de explicacion sobre regrex
https://www.youtube.com/watch?v=wfogZfIS03U
*/


//PROBLEMAS CON ARREGLOS
/*      PROBLEMA 21     */
function problema21(arreglo){
    if(!Array.isArray(arreglo)){
        console.error("El argumento no es un arreglo -_-");
        return;
    }
    let bandera = 0;
    //Validacion del tipo numerico de los elementos
    arreglo.forEach(elemento =>{
        if(typeof(elemento) != 'number'){
            console.error("Los elementos del arreglo no son numericos -_-");
            bandera = 1;
        }
    });
    if(bandera === 0){
         //Arreglo auxiliar
        let alCuadrado = [];
        arreglo.forEach(elemento => alCuadrado.push(Math.pow(elemento,2)
        ));
        console.log(alCuadrado);
    }
}

//let arreglo = [2,4,8,50];
//problema21(arreglo);

/*      PROBLEMA 22     */
const problema22 = (arreglo)=>{
    if(!Array.isArray(arreglo)){
        console.error("El argumento no es un arreglo -_-");
        return;
    }
    let bandera = 0;
    //Validacion del tipo numerico de los elementos
    arreglo.forEach(elemento =>{
        if(typeof(elemento) != 'number'){
            console.error("Los elementos del arreglo no son numericos -_-");
            bandera = 1;
        }
    });
    if(bandera === 0){
        let minimo = arreglo[0], maximo = arreglo[0];
        //CICLO PARA ENCONTRAR EL NUMERO MENOR
        arreglo.forEach(elemento =>{
            if(minimo > elemento){minimo = elemento}
            if(maximo < elemento){maximo = elemento}
        });
        console.log("El numero minimo es: "+minimo+"\nEl numero máximo es: "+maximo);
    }
}
//let arreglo = [1,-2,3,-4,5,-6,7,-8,9.4,10.5];
//problema22(arreglo);

/*      PROBLEMA 23     */
const problema23 = (arreglo)=>{
    if(!Array.isArray(arreglo)){
        console.error("El argumento no es un arreglo -_-");
        return;
    }
    let bandera = 0;
    //Validacion del tipo numerico de los elementos
    arreglo.forEach(elemento =>{
        if(typeof(elemento) != 'number'){
            console.error("Los elementos del arreglo no son numericos -_-");
            bandera = 1;
        }
    });
    if(bandera === 0){
        let pares = [], impares= [];
        arreglo.forEach(elemento =>{
            if(elemento%2 === 0){pares.push(elemento)}
            else{impares.push(elemento)}
        });
        console.log("Arreglo de pares: "+pares+"\nArreglo de impares: "+impares);
    }
}
//let arreglo = [1,-2,3,-4,5,-6,7,-8,9.4,10.5];
//problema23(arreglo);

/*      PROBLEMA 24     */
//      PROBLEMA DE ORDENACION
/*Para ver los resultados de la ordenacion quicksort
es importante descomentar la impresion del arreglo
que viene abajo de las funciones quicksort
ya que dichas funciones solo hacen el ordenamiento
no imprimen el arreglo
*/
function problema24(arreglo){
    if(!Array.isArray(arreglo)){
        console.error("El argumento no es un arreglo -_-");
        return;
    }
    let bandera = 0;
    //Validacion del tipo numerico de los elementos
    arreglo.forEach(elemento =>{
        if(typeof(elemento) != 'number'){
            console.error("Los elementos del arreglo no son numericos -_-");
            bandera = 1;
        }
    });
    
    if(bandera === 0){
        //ORDENAMIENTO BURBUJA
        //burbuja_ascendente(arreglo);
        //burbuja_descendente(arreglo);
        
        //ORDENAMIENTO QUICKSORT
        //quickSort_ascendente(arreglo,0,arreglo.length-1);
        //quickSort_descendente(arreglo,0,arreglo.length-1);
        //console.log(arreglo);
    }
}
/*      BURBUJA --> O(n^2)      */
function burbuja_ascendente(arreglo){
    let i,j,aux = 0;
    for(i = 0; i < arreglo.length; i++){
        for(j = 0; j < arreglo.length-1-i; j++){
            if(arreglo[j] > arreglo[j+1]){
                aux = arreglo[j+1];
                arreglo[j+1] = arreglo[j];
                arreglo[j] = aux;
            }
        }
    }
    console.log(arreglo);
}//fin burbuja_ascendente()

function burbuja_descendente(arreglo){
    let i,j,aux = 0;
    for(i = 0; i < arreglo.length; i++){
        for(j = 0; j < arreglo.length-1-i; j++){
            if(arreglo[j] < arreglo[j+1]){
                aux = arreglo[j+1];
                arreglo[j+1] = arreglo[j];
                arreglo[j] = aux;
            }
        }
    }
    console.log(arreglo);
}//fin burbuja_descendente


/*      QUICK SORT --> O(n^2) Peor caso
                   --> O(nlogn) Promedio de los casos

    Para implementar quicksort, se implementa con recursion
    y un modulo extra el cual es "ubicarPivote", este 
    modulo es el más importante del algoritmo, en él
    podemos definir si deseamos el ordenamiento ascendente
    o descendente.
*/

function quickSort_ascendente(arreglo,ini,fin){
    if((fin - ini) > 0){
        let pivote = ubicarPivote_ascendente(arreglo,ini,fin);
        //Quicsort izquierdo
        quickSort_ascendente(arreglo,ini,pivote-1);
        //Quicksort derecho
        quickSort_ascendente(arreglo,pivote+1,fin);
    }
}//fin quickSort_ascendente

function quickSort_descendente(arreglo,ini,fin){
    if((fin-ini) > 0){
        let pivote = ubicarPivote_descendente(arreglo,ini,fin);
        //QuicSort izquierdo
        quickSort_descendente(arreglo,ini,pivote-1);
        //QuickSort derecho
        quickSort_descendente(arreglo,pivote+1,fin);

    }
}//fin quickSort_descendente

/*      UBICACION DE PIVOTE     */
//ascendente
function ubicarPivote_ascendente(arreglo,ini,fin){
    // let ini = 0, fin = arreglo.length-1,aux = 0;
    let aux = 0;
    while(ini < fin){
        //Verificacion derecha pivote = arreglo[ini]
        while(arreglo[ini] <= arreglo[fin] && ini < fin){
            fin--;
        }
        //Primer cambio
        aux = arreglo[fin];
        arreglo[fin] = arreglo[ini];
        arreglo[ini] = aux;
        //Verificacion izquierda pivote = arreglo[fin]
        while(arreglo[fin] >= arreglo[ini] && ini < fin){
            ini++;
        }
        //Segundo cambio
        aux = arreglo[fin];
        arreglo[fin] = arreglo[ini];
        arreglo[ini] = aux;
    } 
    //console.log(arreglo);
    return ini;
}

//descendente
function ubicarPivote_descendente(arreglo,ini,fin){
    let aux = 0;
    while(ini < fin){
        //Verificacion derecha pivote = arreglo[ini]
        while(arreglo[ini] >= arreglo[fin] && ini < fin){
            fin--;
        }
        //Primer cambio
        aux = arreglo[fin];
        arreglo[fin] = arreglo[ini];
        arreglo[ini] = aux;
        //Verificacion izquierda pivote = arreglo[fin]
        while(arreglo[fin] <= arreglo[ini] && ini < fin){
            ini++;
        }
        //Segundo cambio
        aux = arreglo[fin];
        arreglo[fin] = arreglo[ini];
        arreglo[ini] = aux;
    } 
    return ini;
}

// let prueba = [6,5,3,1,8,6,7,2,4];
// problema24(prueba);





/*      PROBLEMA 25     */
const problema25 = (arreglo) =>{
    if(!Array.isArray(arreglo)){
        console.error("El argumento no es un arreglo -_-");
        return;
    }
    let sinDuplicados = [];
    arreglo.forEach(elemento => {
        if(!sinDuplicados.includes(elemento)){
            sinDuplicados.push(elemento);
        }
    });
    
    console.log(sinDuplicados);
}
//let arreglo = ['a','c','a','b','b','c','d','a',1,2,1,20];
//problema25(arreglo);


/*      PROBLEMA 26     */
const problema26 = (arreglo)=>{
    if(!Array.isArray(arreglo)){
        console.error("El argumento no es un arreglo -_-");
        return;
    }
    let bandera = 0;
    //Validacion del tipo numerico de los elementos
    arreglo.forEach(elemento =>{
        if(typeof(elemento) != 'number'){
            console.error("Los elementos del arreglo no son numericos -_-");
            bandera = 1;
        }
    });
    if(bandera === 0){
        let suma = 0, resultado=0;
        arreglo.forEach(elemento => suma+=elemento);
        resultado = suma / (arreglo.length);
        console.log("El promedio es: "+resultado);
    }
}
//let calificaciones = [8,10,6.2,10,10];
//problema26(calificaciones);



/*      PROBLEMA 27     */
/*Funciones auxiliares para la resolucion del problema*/
function validarTiro(tiro){
    /*En caso de que tenga alguna mayuscula la cadena, la pasaremos a 
    minusculas para proceder a conocer el tiro.
    */
    let minusculas = tiro.toLowerCase();
    switch(minusculas){
        case "paper":
            return "p";
        break;
        case "scissors":
            return "s";
        case "rock":
            return "r";
        default:
            return -1;            
    }
}//fin validarTiro();

function PiedraPapelTijeras(p1,p2){
    if(p1 === p2){
        console.log("Draw!!!!");
        return;
    }
    switch(p1){
        case "p":
            (p2 === "r")
            ?console.log("Player 1 won!!!!")
            :console.log("Player 2 Won!!!");
            break;

        case "s":
            (p2 === "p")
            ?console.log("Player 1 won!!!!")
            :console.log("Player 2 Won!!!");
            break;

        case "r":
            (p2 === "s")
            ?console.log("Player 1 won!!!!")
            :console.log("Player 2 Won!!!");
            break;
    }
}//fin PiedraPapelTijeras()

function problema27 (jugador1,jugador2){
    if(typeof(jugador1) != 'string' || typeof(jugador2) != 'string'){
        console.error("Los argumentos recibidos no son de tipo string -_-");
        return;
    }
    let player1 = validarTiro(jugador1),player2 = validarTiro(jugador2);
    if(player1 === -1 || player2 === -1){
        console.error("Uno de los jugadores ha realizado un tiro invalido -_-");
        return;
    }
    PiedraPapelTijeras(player1,player2);
}//fin problema27();

// problema27("scissors","paper");
// problema27("scissors","rock");
// problema27("paper","paper");

/*      PROBLEMA 28     */
//FUNCIONES AUXILIARES
function invertir2(cadena){
    if(typeof(cadena) != 'string'){
        console.error("La cadena no es una string -_-");
        return;
    }
    let resultado="";
    for(let i = cadena.length-1; i >-1;i--){
        resultado+=cadena[i];
    }
    // console.log(resultado);
    return resultado;
}//fin

function busquedaIzquierda(cadena,cadena2){
    let bandera=false;
    let nueva,tam = cadena.length-1;
    while(bandera != true && tam != 0){
        //quitamos una letra
        nueva = cadena.substring(0,tam);
        //Creamos una nueva Regex
        let regex = new RegExp(nueva);
        //Probamos
        bandera = regex.test(cadena2);
        //Actualizamos el valor de tam
        tam--;
    }
    if(bandera === false){return -1;}
    else{return nueva;}
}

//console.log(busquedaIzquierda("b","b"));

function busquedaDerecha(cadena,cadena2){
    let bandera = false;
    let nueva,invertida,aux,tam = cadena.length-1;
    while(bandera != true && tam != 0){
        //Primero invertimos
        invertida = invertir2(cadena);
        //Quitamos el ultimo caracter
        aux = invertida.substring(0,tam);
        //Volvemos a invertir
        nueva = invertir2(aux);
        //Creamos una nueva regex
        let regex = new RegExp(nueva);
        //comprobamos
        bandera = regex.test(cadena2);
        tam--;
    }
    if(bandera === false){return -1;}
    else{return nueva;}
}

//console.log(busquedaDerecha("b","b"));

function busquedaPatron(cadena1,cadena2){
    let coincidencia;
    if(cadena1.length <= cadena2.length){
        /*Si cadena 1 es menor en longuitud que cadena 2
        entonces hay que ver si toda la cadena 1 asi como esta
        es un patron de coincidencia dentro de la cadena 2
        y es por eso que realizamos una primer prueba con RegExp
        */
        let regex = new RegExp(cadena1);
        coincidencia = regex.test(cadena2);
        if(coincidencia === true){return cadena1;}
        else{
            //Iniciamos busqueda por izquierda
            coincidencia = busquedaIzquierda(cadena1,cadena2);
            if(coincidencia !== -1){return coincidencia;}
            else{
                //Iniciamos busqueda por derecha
                coincidencia = busquedaDerecha(cadena1,cadena2);
                if(coincidencia !==-1){return coincidencia;}
                else{return false;}
            }
        }
    }//fin if(cadena1.length <= cadena2.length)
    else{
        /*Aplicamos lo mismo que arriba, solo que invirtiendo el orden
        en los argumentos*/
        let regex = new RegExp(cadena2);
        coincidencia = regex.test(cadena1);
        
        if(coincidencia === true){return cadena2;}
        else{
            //Iniciamos busqueda por izquierda
            coincidencia = busquedaIzquierda(cadena2,cadena1);
            if(coincidencia !== -1){return coincidencia}
            else{
                //Iniciamos busqueda por derecha
                coincidencia = busquedaDerecha(cadena2,cadena1);
                if(coincidencia !==-1){return coincidencia;}
                else{return false;}
            }
        }
    }//fin else

    /*Nota: AUN FALTA UNA FORMA DE BUSCAR UN PATRON
    Y ES INTERCALANDO LA FORMA EN COMO QUITAMOS UNA 
    LETRA DE LA CADENA, ES DECIR, PRIMERO QUITAMOS UNA DE 
    LA IZQUIERDA, PREGUNTAMOS, QUITAMOS UNA LETRA DE LA DERECHA
    esto es debido a que en ocasiones, el patron se encuentra
    JUSTAMENTE, enmedio de la cadena más chica quitando
    caraccteres tanto de la izquierda como de la derecha
    */
}

//console.log(busquedaPatron("abcTUV","xyabcwf"));
//console.log(busquedaPatron("a","b"));


/*.Tengo que retornar los caracteres que van antes, despues o ambos
a partir del patron recibido en la cadena igualmente recibida
*/
function rescateCaracteres(patron,cadena){
    let indice = cadena.indexOf(patron);
    let aux1;
    /*Si el patron esta al inicio de la cadena*/
    if(indice === 0){
        aux1 = cadena.substring(patron.length,cadena.length);
        return aux1;
    }

    /*Si el patron ESTA enmedio de la cadena.*/
    //Obtengo la parte de la izquierda primero.

    aux1 = cadena.substring(0,indice);
    /*Tengo que validar si el patron no estaba en la parte final de la
    cadena original, para eso tengo que ver si la suma de la 
    longuitud del patron + longuitud de aux es igual a la
    longuitud de la cadena original
    Si son iguales SIGNIFICA que el patron estuvo al final de la cadena
    y solo se rescato la parte izquierda.

    SI ES MENOR, tengo ahora que rescatar los caracteres a la derecha
    del patron, puesto que aun hay letras en la cadena.
    */
    if((aux1.length + patron.length) === cadena.length){
        return aux1;
    }
    //Obtengo el resto de los caracteres
    let aux2 = cadena.substring((indice + patron.length),cadena.length);

    return aux1+aux2;
}//fin rescateCaracteres();

/*Caso 1 --> patron al inicio*/
// let patron = "abc";
// let cadena = "abcexyz";
// console.log(rescateCaracteres(patron,cadena));

/*Caso 2 --> patron al final de la cadena*/
// let patron = "abc";
// let cadena = "XYZGFabc";
// console.log(rescateCaracteres(patron,cadena));


/*Caso 2 --> patron al final de la cadena*/
// let patron = "abc";
// let cadena = "XYZQWabcGF123";
// console.log(rescateCaracteres(patron,cadena));

function problema28(cadena1,cadena2){
    /*Este problema se dividira en varios modulos*/

    //Modulo 1 --> busqueda de patron
    let patron = busquedaPatron(cadena1,cadena2);
    
    /*Si no hay coincidencia entre las cadenas, solo las concatenamos
    de forma sencilla.
    */
    if(patron === false){
        //Concatenamos.
        console.log("No hubo patron encontrado");
        console.log("El resultado es "+cadena1.concat(cadena2));
        return;
    }

    /*Si el patron encontrado es lo mismo en cadena 1
    y en cadena 2 solo regresamos el patron*/
    if(patron === cadena1 && patron === cadena2){
        console.log("El resultado es "+patron);
        return;
    }

    //Modulo 2 --> rescate de caracteres sobrantes de cada cadena
    //Caracteres sobrantes de cadena1
    let sobrante_cadena1 = rescateCaracteres(patron,cadena1);
    let sobrante_cadena2 = rescateCaracteres(patron,cadena2);


    //Modulo 3 --> concatenacion de los sobrantes
    console.log("El patron es: "+patron);
    console.log("El resultado de la mezcla es "+(sobrante_cadena1+patron+sobrante_cadena2));
}

// problema28("abcde","cdefgh");
// problema28("abaab","aabab");
// problema28("abc","def");
// problema28("abc","abc");

/*      PROBLEMA 29     */
//Snake case --> hola_a_todos
//lowerCamelCase --> holaComoEstan;
function splitPropio(cadena,caracter){
    let inicio,fin = 0;
    let cadenas = [];
    let aux;
    if(cadena.includes(caracter)){
        for(let indice = 0; indice < cadena.length; indice ++){
            if(cadena[indice] === caracter){
                //separamos la cadena hasta donde esta el guion bajo
                fin = indice;
                aux = cadena.substring(inicio,fin);
                inicio = indice+1;
    
                //la cadena aux la agregamos al arreglo cadenas[]
                cadenas.push(aux);
            }
        }
        aux = cadena.substring(inicio,cadena.length);
        cadenas.push(aux);
        return cadenas;
    }
    console.error(`No se puede separar la cadena con el caracter ${caracter} porque no se encuentra en la cadena`);
    return;
}

function problema29(cadena){
    if(typeof(cadena) != 'string'){
        console.error("La cadena ingresada no es de tipo strng -_-");
        return;
    }
    //Primero debemos saber en que formato viene, entonces
    //preguntamos si tiene "_" la cadena haciendo alucion 
    //a snake case
    if(cadena.includes("_")){
        //proceso de cambio a lowerCamelCase
        let cadenas = cadena.split("_");
        let resultado = cadenas[0];
        for(let indice = 1; indice < cadenas.length; indice++){
            resultado+= (cadenas[indice][0].toUpperCase() + cadenas[indice].substring(1));
        }
        //console.log(resultado);
        return resultado;
    }
    //Verificamos si tiene mayusculas
    let regex = /[A-Z]/;
    if(regex.test(cadena)){
        //Verificamos si la primer letra de la cadena es mayuscula
        //porque en este caso, significaria que solo es una palabra
        //asi que si se cumple, solo regresamos la cadena en minusculas
        if(regex.test(cadena[0])){return cadena.toLowerCase()}

        //proceso a snake case
        //Separacion de palabras
        let cadenas = [],aux = "";
        let inicio,fin = 0,bandera = false;
        for(let indice = 0; indice < cadena.length; indice++){
            if(regex.test(cadena[indice])){
                fin = indice;
                aux = cadena.substring(inicio,fin);
                inicio=fin;
                //Agregamos la cadena extraida al arreglo
                cadenas.push(aux);
            }
        }
        //Recuperamos la ultima cadena
        aux = cadena.substring(inicio,cadena.length);
        cadenas.push(aux);
        //console.log(cadenas); //Visualizacion del arreglo con las palabras separadas

        //conversion a snakecase
        let resultado = cadenas[0];
        for(let i = 1; i < cadenas.length;i++){
            resultado+= "_"+(cadenas[i][0].toLowerCase() + cadenas[i].substring(1));
        }
        //console.log(resultado);
        return resultado;
    }
    console.log("No la podemos convertir ya que no viene en ningun formato -_-");
    return cadena;
}//fin problema29()
// let prueba1 = "hola_a_todos";
// let prueba2 = "documentoVersionErick";
// let prueba3 = "Marzo";

// console.log(problema29(prueba1));
// console.log(problema29(prueba2));
// console.log(problema29(prueba3));

