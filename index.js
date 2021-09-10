//selecciono elemento del dom

const grilla = document.querySelector(".grilla");

//fuciones auxiliares

const arrayEmojis = ["🍇","🍑","🍌","🍓","🍐"]

const numeroAlAzar = (arrayEmojis) => {
   return  Math.floor(Math.random() * arrayEmojis.length)
}

//genera un nuemro al azar de 0 a 5 que es la longitud del array

//funcion generar grilla
//recibe cantidad de filas , columnas, y una array
//el primer for recorre hasta la cantidad de filas, el 2° for recorre hasta cantidadd e columnas y usando la 
//funcion numeroAlAzar pusheamos a resultado la posicion al azar al array resultado y luego pusheamos a matriz
// ese array , generando la matriz al azar

const generarGrillaAlAzar = (filas, columnas, array) => {
    let matriz = []

    for (let i = 0; i < filas; i++) {
       let resultado = []

       for (let j = 0; j < columnas; j++) {
           const numero = numeroAlAzar(array)
           resultado.push(array[numero])
       }
        matriz.push(resultado)
    }
    return matriz
}

//console.log(generarGrillaAlAzar(10,10,arrayEmojis))


//grilla en html
let matriz = generarGrillaAlAzar(7,7,arrayEmojis)
//<div class="icono"></div>

const convertirAString = (matrizAleatoria) => {
  let resultado = []
    for (let i = 0; i < matrizAleatoria.length; i++) {
        for (let j = 0; j < matrizAleatoria[i].length; j++) {
            resultado.push(`<div class="icono">${matrizAleatoria[i][j]}</div>`)
            
        }
        
    }
    return resultado.join("")
}
const grillaEnHtml = convertirAString(matriz)

grilla.innerHTML = grillaEnHtml

