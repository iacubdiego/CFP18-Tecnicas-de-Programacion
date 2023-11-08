const path = require('path');
const express = require('express');
const app = express();

const rutaMain = require("./routes/mainRoutes")
const rutaResenias = require("./routes/resenias")

const PORT = process.env.PORT || 3000; //variable dinamica de puerto
const HOST = process.env.HOST || 'localhost';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// app.get('/', function (req, res) {
// 	res.sendFile(path.join(__dirname, './index.html'));
// });
app.use('/', rutaMain )
app.use('/resenias', rutaResenias )

// configuarcion de public static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
