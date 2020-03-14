// ejercicio 0
function convertirCadenaMay(palabras)
{
    return palabras.split(' ')
            .map( v => v[0].toUpperCase() + v.substr(1) )
            .join(' ');  
}
  console.log("Ejercicio 0: ",convertirCadenaMay("BUENOS días primer ejercicio de la segunda semana 02"));
// ejercicio 1

function palabraLarga(text) {
    const palabras = text.split(" ");
    let palabramax = palabras[0];
    
    palabras.map((palabra) => {
      if(palabra.length > palabramax.length) {
        palabramax = palabra;
      }
    });
    return palabramax;
  }
  console.log("Ejercicio 01, esta es la palabra mas larga: ",palabraLarga("buenos días primer ejercicio de la segunda semana 02"));

// ejercicio 2
function par(n){
    if(n==0) {
    return "par";
    }
    else {
    return impar(n-1);
    }
    }
    
    function impar(n){
    if(n==0) {
    return "impar";
    }
    else {
    return par(n-1);
    }
    } 
console.log("Ejercicio 02",par(5));
// ejercicio 3

function palabraCorta(text) {
    const palabras = text.split(" ");
    let palabramin = palabras[0];
    
    palabras.map((palabra) => {
      if(palabra.length < palabramin.length) {
        palabramin = palabra;
      }
    });
    return palabramin;
  }
  console.log("Ejercicio 03, esta es la palabra mas corta: ",palabraCorta("buenos días primer ejercicio de las segundas semanas 002"));

// ejercicio 4

function contarVocales(palabras)
{
    var numeroVocales = palabras.match(/[aeiouáéíóú]/gi).length;
        return numeroVocales;
}
  console.log("Ejercicio 04: ",contarVocales("buenos días cuatO fInalizAciÓn" ));

// ejercicio 5

function miles_separador(numero)
{

if(!isNaN(numero)){
    numero = numero.toString().split("").reverse().join("").replace(/(?=\d*\,?)(\d{3})/g,"$1,");
    numero = numero.split("").reverse().join("").replace(/^[\,]/,"");

}

else{ return "Ingrese numero";
}
return numero;
}
console.log ("Ejercicio 05 -1",miles_separador("dd"));
console.log ("Ejercicio 05 -2",miles_separador(1000));
console.log ("Ejercicio 05 -3",miles_separador(10000.23));
console.log ("Ejercicio 05 -4",miles_separador(100000));
