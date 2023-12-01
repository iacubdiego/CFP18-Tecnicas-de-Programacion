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
        let cirugiasMostrar = []
        for (let i = 0; i < userList.length; i++) {
            const element = userList[i];
            if (element.categoria==="publicar") {
                cirugiasMostrar.push(element)
            }
        }
        res.render("gallery",{cirugiasMostrar})
    }
};

module.exports = controlador