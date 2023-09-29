
const autos = require("./autos")

const concesionaria = {
    autos: autos,
    buscarAuto(patenteDada) {
        for (let i = 0; i < autos.length; i++) {
            // const element = autos[i];
            if (autos[i].patente === patenteDada) {
                console.log("El auto se encuentra en la base de datos")
                return autos[i];
            } else {
                console.log("No se econtró ningún auto con esa patente")
            }
        }
    },
    venderAuto(patenteDada) {
    if (this.buscarAuto(patenteDada) !== null ){
        let index = autos.indexOf(this.buscarAuto(patenteDada))
    
        // console.log(index)
        
        autos[index].vendido="Vendido"
        
        return console.log(autos[index])
    }
    },
    autosParaLaVenta(){ 
        let autosEnVenta = autos.filter(element => element.vendido !== "Vendido") 
        return autosEnVenta 
    },
    listaDeVentas(){
        let autosVendidos = autos.filter(element => element.vendido === "Vendido") 
        // return autosVendidos
        let listaDePrecios = []
        for (let index = 0; index < autosVendidos.length; index++) {
            listaDePrecios.push(autosVendidos[index].precio);            
        }
        return listaDePrecios
    },
    totalDeVentas(){
        let autosVendidos = autos.filter(element => element.vendido === "Vendido")
        let totalVendido = []
        
        totalVendido = autosVendidos.reduce((total, element) => total + element.precio,0)
        return totalVendido
    }
}
// console.log(concesionaria.autos[0].patente)
// console.log(concesionaria.venderAuto("APL123"))
// console.log(autos[0])
console.log(concesionaria.totalDeVentas())