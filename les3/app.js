const express = require('express');
const {resolve} = require('path');
const fileupload = require('express-fileupload');

const app = express();
const db = require('./database').getInstance();
db.setModels();

app.use(express.static(resolve(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileupload({}));

global.appRoot = __dirname;

const {workPages} = require('./controllers');
const {userRouter, houseRouter, authRouter} = require('./router');

app.get('/', workPages.mainPage);
app.get('/auth', workPages.loginPage);
app.get('/users_register', workPages.registPage);
app.get('/houses_register', workPages.housePage);

app.use('/users', userRouter);
app.use('/houses', houseRouter);
app.use('/auth', authRouter);

app.all('*', (req, res) => {
    res.status(404);
});

app.listen(3000, () => {
});


