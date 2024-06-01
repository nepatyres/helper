const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/images', express.static(path.join(__dirname, 'src', 'assets', 'images')));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cs2', (req, res) => {
    res.render('cs2');
});

app.get('/dota', (req, res) => {
    res.render('dota');
});


app.listen(3000, () => {
    console.log('serving on port 3000');
});