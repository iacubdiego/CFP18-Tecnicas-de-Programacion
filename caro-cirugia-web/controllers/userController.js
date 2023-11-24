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
        let id = req.body.id;
        for (let i = 0; i < userList.length; i++) {
            const element = userList[i];
            if (element.id===id) {
                element.imagen= req.body.imagen,
                element.descripcion= req.body.descripcion
                
                let newUser = element
            
            }
        }
        fs.writeFileSync(userListPath, JSON.stringify(userList, null, 2));

        res.redirect('/admin');
    },
    deleteCirugias: (req, res) => {
        let id = req.params.id;


    },
};



module.exports = userController