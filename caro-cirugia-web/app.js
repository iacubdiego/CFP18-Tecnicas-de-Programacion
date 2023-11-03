const path = require('path');
const express = require('express');
const app = express();

const rutaResenias = require("./routes/resenias")

const PORT = process.env.PORT || 3000; //variable dinamica de puerto
const HOST = process.env.HOST || 'localhost';

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.use('/resenias', rutaResenias )

// configuarcion de public static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
