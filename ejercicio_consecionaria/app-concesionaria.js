
const autos = require("./autos")

const concesionaria = {
    autos: autos,
    buscarAuto(patenteDada) {
        for (let i = 0; i < autos.length; i++) {
            // const element = autos[i];
            if (autos[i].patente === patenteDada ) {
                return console.log("El auto existe en nuestra base de datos")
            } else {
                console.log("No se econtró ningún auto con esa patente")
            }
        }
    } 
}
// console.log(concesionaria.autos[0].patente)
console.log(concesionaria.buscarAuto("APL123"))