
function calculadora (){

    let opcion = prompt ('selecciona una opcion \n 1.Sumar \n 2.Restar \n 3.Multiplicar \n 4.Dividir');
    let numero1 = parseFloat(prompt('Introduzca el primero numero'));
    let numero2 = parseFloat(prompt('Introduzca el segundo numero'));

    if (opcion == 1){
        console.log(numero1+numero2);
    } else if(opcion == 2){
        console.log(numero1-numero2);
    } else if(opcion ==3) {
        console.log(numero1*numero2);
    } else if(opcion == 4){
      console.log(numero1/numero2);
    }
}

function raiz(){
    let numero = parseInt(prompt('Introduzca el numero para saber su raiz cuadrada'));

   console.log (Math.sqrt(numero));

}

function cadena(){

    let opcion = prompt ('selecciona una opcion \n 1.Longitud de la cadena de texto \n 2. Invertir la cadena de texto \n 3. Repetir el texto');
    let cadena = prompt('Introduzca su cadena de texto');

    if (opcion == 1){

        let longitud = cadena.length;
        console.log( longitud);
    } else if(opcion == 2){

        let cadenaReverse = cadena.split('').reverse().join('');
        console.log(cadenaReverse);      
    } else if(opcion ==3) {
        let cadenaRepetida = cadena.repeat(3);

        console.log(cadenaRepetida);
    }

function arreglo(){

    let saludos  = ['Hola', 'juan'];

    let opcion = prompt ('selecciona una opcion \n 1.Agregar los valores al principio del array\n 2. Invertir los valores que tenga el array \n 3. Sumar todos los numeros del array');

    let palabra = prompt ('Introduzca su nueva palabra');


    if (opcion == 1){

        saludos.unshift(palabra);
        console.log(saludos);

    } else if(opcion == 2){

        saludos.reverse();
           
    } else if(opcion ==3) {
        let cadenaRepetida = cadena.repeat(3);

        console.log(cadenaRepetida);
    }




   

    
}


}