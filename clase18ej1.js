/*
 Escribir un algoritmo que permita leer los valores de un conjunto de diez (30) datos 
 numéricos enteros, que calcule y muestre: 
• El promedio de los valores mayores que cero (positivos). 
• La cantidad de valores leídos que son iguales a cero (0). 
• La suma (acumulación) de los valores menores que cero (negativos). 

TD
1) Declarar variables POSITIVOS, NEGATIVOS, IGUALES_0
2) Con un FOR tope 30 leer los valores 
3) Con IF anidado verificar condiciones (>0 , =0 , <0)
4) Realizar una funcion para el promedio de los valores positivos y otra para 
la suma de los valores negativos.
5) Mostrar por pantalla los resultados.
*/


var POSITIVOS = 0;
var CONTADOR_POSITIVOS =0;
var NEGATIVOS = 0;
var IGUALES_0 = 0;
var NUM = 0;

for(let i=0; i<=29;i++){
NUM = parseInt(prompt("Ingrese un numero entero: "));
    if(NUM>0){
    POSITIVOS++;
    CONTADOR_POSITIVOS = CONTADOR_POSITIVOS + NUM;
}else{
    if(NUM<0){
        NEGATIVOS = NEGATIVOS + NUM;
    }else{
        
            IGUALES_0 ++;
        }
    }
}

alert("El promedio de los valores positivos es de: " + PROM(CONTADOR_POSITIVOS,POSITIVOS));
alert("La suma de los valores negativos es de: " + SUMA_NEGATIVOS(NEGATIVOS));
alert("LOS VALORES =0 SON: " + IGUALES_0);




// --------------------------------------- //
function PROM(CONTADOR_POSITIVOS, POSITIVOS){
        return (CONTADOR_POSITIVOS/POSITIVOS);
}

function SUMA_NEGATIVOS(NEGATIVOS){
    return (NEGATIVOS);
}
// -------------------------------------- //