class Biblioteca {

}
class Libro {
    constructor(titulo,autor,genero){
    titulo=this.titulo;// "jarri pote";
    autor=this.autor; // " J.K Rowling";
    genero=this.genero; // "Fantasía";
}
    mostrarse(){
        return console.log(`EL título de su libro es ${this.titulo}, autor ${this.autor}, y su género es ${this.genero}`)
    
    }
}
const libro1 = new Libro("Harry Potter", "J.K. Rowling", "Fantasía")
const libro2 = new Libro("El viejo y el mar", "Ernst Heminghway", "Aventura")
//libro1.mostrarse(titulo,autor,genero);
libro2.mostrarse();
//console.log(libro1.mostrarse(titulo,autor,genero))