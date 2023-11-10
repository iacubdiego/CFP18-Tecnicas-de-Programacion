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
    }
};
module.exports = userController