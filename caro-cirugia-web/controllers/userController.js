const fs = require('fs');
const path = require('path');

const userListPath = path.resolve(__dirname, '../models/users.json');
const userList = JSON.parse(fs.readFileSync(userListPath, 'utf8'));

const userController = {
    getCirugiaById: (req, res) => {
        let id = req.params.id;

        res.send('Es la Cirugia: ' + id);
    },
    createCirugias: (req, res) => {
        res.render('admin', {userList});
    },
    storeCirugias: (req, res) => {
        let user = req.body
        let image = req.image

        userList.push(user);

        fs.writeFileSync(userListPath, JSON.stringify(userList, null, 2));

        res.redirect('/admin');
    },
    editCirugias: (req, res) => {
        let id = req.params.id;
        let user =
        {
            imagen: req.body.imagen,
            descripcion: req.body.descripcion,
        }
        fs.writeFileSync(userListPath, JSON.stringify(userList, null, 2));

        res.redirect('/admin');
    },
    deleteCirugias: (req, res) => {
        let id = req.params.id;


    },
};



module.exports = userController