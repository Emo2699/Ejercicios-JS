/**
 * Author:              Ramirez Morales Erick Hazel
 * Date:                23-02-23
 * Description:         Solucion a problemas propuestos dentro del PDF
 */


/*          PROBLEMA 1          */
//version sencilla
function contarCaracteres(cadena){
    if(typeof(cadena)!= 'string'){
        console.log("el argumento no es una String");
        return;
    }
    console.log(cadena.length);
}
//contarCaracteres("50");

//version 2 en arrow function
const contar = (cadena2)=>{
    if(typeof(cadena2)!= 'string'){
        console.log("el argumento no es una String");
        return;
    }
    let conteo = 0;
    for(let i in cadena2){
        conteo+=1;
    }
    console.log(conteo);
}
//contar(50);


/*      PROBLEMA 2      */
//version sencilla
function partirCadena(cadena,n){
    if(typeof(cadena) != 'string'){
        console.log("la cadena no es una String");
        return;
    }
    console.log(cadena.substring(0,n));
}
//partirCadena("Mozilla",3);

//version 2 en arrow function
const problema2 = (cadena,n) =>{
    if(typeof(cadena) != 'string'){
        console.log("la cadena no es una String");
        return;
    }
    let resultado="",i;
    for(i = 0; i < n; i++){
        resultado+=cadena[i];
    }
    console.log(resultado);
}
//problema2("ya no quiero estar aqui",8);

/*      PROBLEMA 3      */
//version sencilla
function separarCadena(cadena,caracter){
    if(typeof(cadena) != 'string' || typeof(caracter) != 'string'){
        console.log("Los parametros no son String -_-");
        return;
    }
    console.log(cadena.split(caracter));
}
//separarCadena("hola que tal"," ");
    

//version en arrow function
const problema3 = (cadena,caracter)=>{
    if(typeof(cadena) != 'string' || typeof(caracter) != 'string'){
        console.log("Los parametros no son String -_-");
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
}
//roblema3("hola que tal","o");


/*      PROBLEMA 4      */
//version sencilla
function repeticion(cadena,veces){
    if(typeof(cadena) != 'string' || typeof(veces) != 'number'){
        console.log("El tipo de datos de los argumentos es incorrecto -_-");
        return;
    }
    console.log(cadena.repeat(veces));
}
//repeticion("hola ",4);

//version en arrow function
const problema4 = (cadena, n)=>{
    if(typeof(cadena) != 'string' || typeof(n) != 'number'){
        console.log("El tipo de datos de los argumentos es incorrecto -_-");
        return;
    }
    let i,resultado="";
    for(i = 0; i < n; i++){
        resultado+=cadena;
    }
    console.log(resultado);
}
//problema4("hola",10);


/*      PROBLEMA 5      */
//version sencilla
function invertir(cadena){
    if(typeof(cadena) != 'string'){
        console.log("La cadena no es una string -_-");
        return;
    }
    let resultado="";
    for(let i = cadena.length-1; i >-1;i--){
        resultado+=cadena[i];
    }
    console.log(resultado);
}
//invertir("hola");

/*      PROBLEMA 6      */


/*      PROBLEMA 7      */
const problema7 = (cadena)=>{
    if(typeof(cadena) != 'string'){
        console.log("La cadena no es una string -_-");
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
}
//problema7("hola");
