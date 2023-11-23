const fs = require('fs');
const path = require('path');

const userListPath = path.resolve(__dirname, '../models/users.json');
const userList = JSON.parse(fs.readFileSync(userListPath, 'utf8'));

const controlador = {
    index: (req, res) => {
        res.render("index")
    },
    about: (req, res) => {
        res.render("about")
    },
    gallery: (req, res) => {
        res.render("gallery",{userList})
    }
};

module.exports = controlador