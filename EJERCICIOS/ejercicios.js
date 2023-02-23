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
partirCadena("Mozilla",3);

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
problema2("ya no quiero estar aqui",8);