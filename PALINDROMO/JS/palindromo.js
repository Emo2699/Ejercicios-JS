function get(id){
    return document.getElementById(id).value;
}

/**
 * function palindromo
 * Solo sirve para palabras sin espacios y si sus letras son mayusculas
 * o minusculas, si estan alternadas no funciona
 */
function palindromo(){
    let palabra = get("caja");
    let bandera = 0;
    if(palabra == null){
        alert("Debe de ingresar una palabra :'v");
    }//fin if
    else{
        let tam = palabra.length;
        let i,j;
        j = tam-1;
        for(i = 0; j >= i; i++,j--){
            if(palabra[i] != palabra[j]){
                bandera = 1;
                break;
            }
        }
        if(bandera == 1){
            alert("NO ES PALINDROMO");
        }
        else{
            alert("ES PALINDROMO");
        }
    }//fin else
}//fin function palindromo