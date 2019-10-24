const express = require('express');
const handlebar = require('express-handlebars');
const {resolve} = require('path');
const fileupload = require('express-fileupload');

const app = express();
const db = require('./database').getInstance();
db.setModels();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
    socket.on('joinroom', data => {
        socket.join(data.room_id);
    });

    socket.on('message', (name, data) => {
        io.to('Support').emit('chat', name, data);
    })
});

app.use(express.static(resolve(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileupload({}));

app.engine('.hbs', handlebar({
    extname: '.hbs',
    defaultLayout: null
}));
app.set('view engine', '.hbs');
app.set('views', resolve(__dirname, 'public'));

global.appRoot = __dirname;

const {userRouter, houseRouter, authRouter} = require('./router');

app.get('/support', (req, res) => {
    res.render('support')
});
app.use('/users', userRouter);
app.use('/houses', houseRouter);
app.use('/auth', authRouter);

app.all('*', (req, res) => {
    res.status(404);
});

http.listen(3000, () => {
    console.log(3000);
});


