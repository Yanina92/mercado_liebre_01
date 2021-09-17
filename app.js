const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => res.send("Hola Mundo!"));

app.get('/html', (req, res) => res.sendFile(path.join(__dirname, "/views/index.html")));

app.listen(PORT, () => {
    console.log('App listening on http://localhost:3000');
});
