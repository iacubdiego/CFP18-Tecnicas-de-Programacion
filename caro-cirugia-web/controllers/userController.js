const fs = require('fs');
const path = require('path');

const userListPath = path.resolve(__dirname, '../models/users.json');
const userList = JSON.parse(fs.readFileSync(userListPath, 'utf8'));

console.log(userList)

const userController = {
    login: (req, res) => {
        res.render("login", {
            users: userList
        })
    },
    storeUser: (req, res) => {
        let user = req.body;

        userList.push(user);

        fs.writeFileSync(userListPath, JSON.stringify(userList, null, 2));

        res.redirect('/panel');
    }
};



module.exports = userController