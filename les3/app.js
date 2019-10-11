const express = require('express');
const handlebar = require('express-handlebars');
const path = require('path');

const app = express();
const db = require('./database').getInstance();
db.setModels();

app.listen(3000, ()=>{});

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('.hbs', handlebar({
    extname: '.hbs',
    defaultLayout: null
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const { workPages } = require('./controllers');
const { userRouter, houseRouter } = require('./router');

app.get('/', workPages.mainPage);
app.get('/auth', workPages.loginPage);
app.get('/users_register', workPages.registPage);
app.get('/houses_register', workPages.housePage);
app.get('/users_update', workPages.userUpdatingPage);
app.get('/houses_update', workPages.houseUpdatingPage);

app.use('/users', userRouter);
app.use('/users_auth', userRouter);
app.use('/users_update', userRouter);

app.use('/houses', houseRouter);
app.use('/houses_auth', houseRouter);
app.use('/houses_update', houseRouter);

app.all('*', (req, res)  => {
    res.render('404');
});

