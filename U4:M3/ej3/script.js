// array de objetos "alumnos"
let alumnos = [
    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];

// ahora recorrer el array y formar un array nuevo con todos los alumnos "aprobados"

const alumnosAprobados = alumnos.map((alumnos) => {
    if (alumnos.nota >= 7){

        console.log(`El alumno ${alumnos.nombre} aprobó el examen con ${alumnos.nota}`)
        // document.write(`El alumno ${alumnos.nombre} aprobó el examen \n`)

    }
})

// alumnosAprobados()
// const aprobados = [alumnosAprobados];
// console.log(aprobados);
// console.log(alumnosAprobados);