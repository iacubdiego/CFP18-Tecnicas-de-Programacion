function arbolUtopico(ciclos) {
    var altura = 1
    for (let i = 1; i <= ciclos; i++) {
        if ((i % 2) === 0 ) {
            altura = altura + 1     // Ciclo VERANO   
        }
        else if ((i % 2) !== 0 ) {
            altura = altura * 2     // Ciclo PRIMAVERA
        }
    }
    return altura   
}
console.log(arbolUtopico(4))