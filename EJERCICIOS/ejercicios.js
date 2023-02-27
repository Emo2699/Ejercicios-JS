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




/*      PROBLEMA 9      */
function aleatorio(minimo,maximo){
    return (Math.random() * (maximo-minimo) + minimo);
}
// let res = aleatorio(501,600);
// console.log(Math.round(res));

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
const problema15 = (monto,porcentaje)=>{
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
//problema15(200,40);
