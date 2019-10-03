const http = require('http');
const url = require('url');
const fs = require('fs');


const  server = http.createServer((req, res) => {

    let parseUrl = url.parse(req.url)

    switch (parseUrl.pathname) {

        case "/":
            fs.readFile('./home.html', (err, data) => {
                res.end(data)
            })
            break;

        case '/login':
            fs.readFile('./login.html', (err, data) => {
                res.end(data)
            })
            break;

        case '/registr':
            fs.readFile('./registr.html', (err, data) => {
                res.end(data)
            })
            break;

        default:
            fs.readFile('./404.html', (err, data) => {
                res.end(data)
            })
    }
})

server.listen(3000, (err) => {
    if (!err) {
        console.log('OK')
    }
});