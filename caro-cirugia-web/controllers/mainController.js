const animal = [{
    nombre: "señor gato",
    raza: "común europeo",
    edad: "4 años",
    color: "negro"
    },
    {
    nombre: "señor perro",
    raza: "mestizo",
    edad: "2 años",
    color: "blanco"
    }
]

const controlador = {
    index: (req, res) => {
        res.render("index",{animal})
    }
};
module.exports = controlador