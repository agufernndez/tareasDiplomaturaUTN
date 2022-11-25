// cuando se presione una tecla dentro del textarea, sumar 1 (++)
const textarea = document.getElementById("textarea")
const cantidad = document.getElementById("cantidad")
let caracteres = 0

textarea.onkeydown = () => {
    caracteres++
    console.log(`Cantidad de caracteres: ${caracteres}`);
    cantidad.innerText = `Cantidad de caracteres: ${caracteres}`
}

// DUDA: COMO HACER PARA QUE SOLO CUENTE CARACTERES? PORQUE SI BORRO O PONGO ENTER ME CUENTA +1.