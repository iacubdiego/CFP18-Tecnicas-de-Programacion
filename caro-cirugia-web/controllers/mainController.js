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
const fs = require('fs');
const path = require('path');

const userListPath = path.resolve(__dirname, '../models/users.json');
const userList = JSON.parse(fs.readFileSync(userListPath, 'utf8'));

const controlador = {
    index: (req, res) => {
        res.render("index",{animal})
    },
    about: (req, res) => {
        res.render("about")
    },
    gallery: (req, res) => {
        res.render("gallery",{userList})
    }
};

module.exports = controlador