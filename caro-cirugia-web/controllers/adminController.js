const fs = require('fs');
const path = require('path');

const userListPath = path.resolve(__dirname, '../models/users.json');
const userList = JSON.parse(fs.readFileSync(userListPath, 'utf8'));

const adminController = {
    getCirugiaById: (req, res) => {
        let id = req.params.id;

        res.render('admin/adminByid', {userList, id});

        // res.send('Es la Cirugia: ' + id);
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
        let getCirugiaById = userList.find(getCirugiaById => getCirugiaById.id == id);
        res.render('admin/adminEdit', {getCirugiaById});
    },

    uploadCirugias: (req, res) => {
        let id = req.params.id;

        let newCirugia = req.body;
        newCirugia.id = id;
        
        for (let i = 0; i < userList.length; i++) {
            const element = userList[i];
            if (element.id===id) {
                userList[i] = newCirugia           
            }
        }

        fs.writeFileSync(userListPath, JSON.stringify(userList, null, 2));

        res.redirect('/admin');
    },
    deleteCirugias: (req, res) => {
        let id = req.params.id;


    },
};



module.exports = adminController