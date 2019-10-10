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
/*changes for git*/
app.engine('.hbs', handlebar({
    extname: '.hbs',
    defaultLayout: null
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const { user, house, workPages } = require('./controllers');
const { userMiddleware, houseMiddleware } = require('./middleware');
const { userRouter, houseRouter } = require('./router');

app.get('/', workPages.mainPage);
app.get('/login', workPages.loginPage);
app.get('/regist', workPages.registPage);
app.get('/house', workPages.housePage);
app.get('/userUpdate', workPages.userUpdatingPage);
app.get('/houseUpdate', workPages.houseUpdatingPage);


app.use('/users', userRouter);
app.post('/loginUser', userMiddleware.findUserLogMiddleware, user.loginUser);
app.post('/updateUser', userMiddleware.checkUserValidMiddleware, userMiddleware.isIDinDbPresentMiddleware, user.updateUser);


app.use('/houses', houseRouter);
app.post('/loginHouse', houseMiddleware.findHouseLogMiddleware, house.loginHouse);
app.post('/updateHouse', houseMiddleware.checkHouseValidMiddleware, houseMiddleware.isHouseIdInDbPresentMiddleware, house.updateHouse);


app.all('*', (req, res)  => {
    res.render('404');
});

