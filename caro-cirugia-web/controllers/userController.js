const fs = require('fs');
const path = require('path');

const userListPath = path.resolve(__dirname, '../models/users.json');
const userList = JSON.parse(fs.readFileSync(userListPath, 'utf8'));

const userController = {
    getCirugiaById: (req, res) => {
        let id = req.params.id;

        res.send('Get product by id: ' + id);
    },
    // getAllCirugias: (req, res) => {
    //     res.render("admin")
    // },
    createCirugias: (req, res) => {
        res.render('admin', {userList});
    },
    storeCirugias: (req, res) => {
        let user = req.body;

        userList.push(user);

        fs.writeFileSync(userListPath, JSON.stringify(userList, null, 2));

        res.redirect('/admin');
    }
};



module.exports = userController