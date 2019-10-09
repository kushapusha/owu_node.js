const express = require('express');
const handlebar = require('express-handlebars');
const path = require('path');

const app = express();
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


let { user, house, workPages } = require('./controllers');
let { userMiddleware, houseMiddleware } = require('./middleware');


app.get('/', workPages.mainPage);
app.get('/login', workPages.loginPage);
app.get('/regist', workPages.registPage);
app.get('/house', workPages.housePage);
app.get('/userUpdate', workPages.userUpdatingPage);
app.get('/houseUpdate', workPages.houseUpdatingPage);


app.post('/registUser', userMiddleware.checkUserValidMiddleware, user.createUser);
app.get('/users/:id', userMiddleware.isUserPresentMiddleware, user.getByID);
app.get('/users', userMiddleware.findAllUsersMiddleware ,user.findAll);
app.post('/loginUser', userMiddleware.findUserLogMiddleware, user.loginUser);
app.post('/updateUser', userMiddleware.checkUserValidMiddleware, userMiddleware.isIDinDbPresentMiddleware, user.updateUser);



app.post('/registHouse', houseMiddleware.checkHouseValidMiddleware, house.createHouse);
app.get('/houses/:id', houseMiddleware.isHousePresentMiddleware, house.getByID);
app.get('/houses', houseMiddleware.findAllHousesMiddleware,house.findAll);
app.post('/loginHouse', houseMiddleware.findHouseLogMiddleware, house.loginHouse);
app.post('/updateHouse', houseMiddleware.checkHouseValidMiddleware, houseMiddleware.isHouseIdInDbPresentMiddleware, house.updateHouse);



app.all('*', (req, res)  => {
    res.render('404');
});
