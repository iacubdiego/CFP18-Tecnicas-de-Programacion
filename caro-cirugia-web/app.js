const path = require('path');
const express = require('express');
const app = express();
const multer = require('multer');


const PORT = process.env.PORT || 3000; //variable dinamica de puerto
const HOST = process.env.HOST || 'localhost';

const rutaMain = require("./routes/mainRoutes")
const rutaAdmin = require("./routes/adminRoutes")

const methodOverride = require('method-override');

// configuarcion de public static
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', rutaMain )
app.use('/about', rutaMain )
app.use('/gallery', rutaMain )
app.use('/admin', rutaAdmin )


app.listen(PORT, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
