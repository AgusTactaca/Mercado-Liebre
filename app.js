const express = require('express');
const app = express();
const path = require('node:path');

app.get('/',( req, res ) =>{
    res.sendFile(path.join(__dirname, '/views/home.html'));
} );

app.get('/register',( req, res ) =>{
    res.sendFile(path.join(__dirname, '/views/register.html'));
} );

app.post('/', (req, res) => {
    res.redirect('/');
  });

app.get('/login',( req, res ) =>{
    res.sendFile(path.join(__dirname, '/views/login.html'));
} );

app.use(express.static('public'));


const PORT = process.env.PORT || 3000;
// app.listen(PORT,()=>console.log(`Servidor corriendo en el puerto ${PORT}`));
app.listen( PORT, () => console.log(`Server up: http://localhost:${PORT}`));

