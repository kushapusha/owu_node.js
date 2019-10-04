const express = require('express');
const handlebar = require('express-handlebars');
const path = require('path');

const app = express();
app.listen(3000, ()=>{});

const users = [];
const houses = [];

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('.hbs', handlebar({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));


app.get('/', (req, res) => {
    res.render('main', {layout: false})
});
app.get('/login', (req, res) => {
    res.render('login', {layout: false})
});
app.get('/regist', (req, res) => {
    res.render('regist', {layout: false})
});
app.get('/house', (req, res) => {
    res.render('house', {layout: false})
});


app.post('/regist', (req, res) => {
    let body = req.body;
    body.id = users.length + 1;
    users.push(body);
    res.render('regist', {layout: false});
});

app.get('/user/:id', (req,res) => {
    let ThisUser = users.find(user => +req.params.id === user.id);
    res.json(ThisUser);
});

app.post('/login', (req, res) => {
    let body = req.body;
    let CurUser = users.find(user => user.email === body.email && user.password === body.password);
    CurUser ? res.json(CurUser) : res.redirect('regist')
});

app.post('/house', (req, res) => {
    let body = req.body;
    body.id = houses.length + 1;
    houses.push(body);
    res.render('house', {layout: false});
});
app.get('/house/:id', (req,res) => {
    let ThisHouse = houses.find(house => +req.params.id === house.id);
    res.json(ThisHouse);
});


app.all('*', (req, res)  => {
    res.render('404', {layout: false});
});