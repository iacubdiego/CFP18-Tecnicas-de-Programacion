class Biblioteca {

}
class Libro {
   stock = "En stock"
   //titulo = this.titulo;// "harry potter";
   //autor = ""; // " J.K. Rowling";
   //genero = ""; // "Fantasía";
   constructor(titulo,autor,genero){
       this.titulo = titulo;// "harry potter";
       this.autor = autor; // " J.K. Rowling";
       this.genero = genero; // "Fantasía";
    //    this.stock = "En stock"
}
    mostrarse(titulo){
        return console.log(`EL título de su libro es ${this.titulo}, autor ${this.autor}, y su género es ${this.genero}(${this.stock})`)
    
    }
}
const libro1 = new Libro("Harry Potter", "J.K. Rowling", "Fantasía")
const libro2 = new Libro("El viejo y el mar", "Ernest Hemingway", "Aventura")
//libro1.mostrarse(titulo,autor,genero);
libro1.mostrarse();
libro2.mostrarse();
console.log(libro1)
//console.log(libro1.mostrarse(titulo,autor,genero))