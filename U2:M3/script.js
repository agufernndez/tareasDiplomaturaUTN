// Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

// 0 a 1000 metros = pie

// 1000 a 10000 metros = bicicleta

// 10000 a 30000 metros = colectivo

// 30000 a 100000 metros = auto

// +100000 = avion

let distancia = parseInt(prompt("Indiquenos cuántos mt tiene que recorrer para recomendarle el medio de transporte"));
console.log(distancia)

if (distancia <= 1000) {
    console.log(`Si la distancia es ${distancia}, le recomendamos ir a pie`);
    document.write(`Si la distancia es ${distancia}, le recomendamos ir a pie`)

    } else if (distancia <= 10000) {
    console.log(`Si la distancia es ${distancia}, le recomendamos ir en bicicleta`);
    document.write(`Si la distancia es ${distancia}, le recomendamos ir en bicicleta`)
    } else if (distancia <= 30000) {
    console.log(`Si la distancia es ${distancia}, le recomendamos ir en colectivo`);
    document.write(`Si la distancia es ${distancia}, le recomendamos ir en colectivo`)

    } else if (distancia <= 100000) {
        console.log(`Si la distancia es ${distancia}, le recomendamos ir en auto`);
        document.write(`Si la distancia es ${distancia}, le recomendamos ir en auto`)

    } else {
        console.log(`Si la distancia es ${distancia}, le recomendamos ir en avión`);
        document.write(`Si la distancia es ${distancia}, le recomendamos ir en avión`)

}