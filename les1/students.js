// Зробити функцію, яка буде робити профайли стуентів по групах.
//     Створити папка jscx-1800 та jscx-2000
// В конжній папці має бути ще одна пака з імям студента а-ля Viktor Okten. В той файл потрібно записати інфу про студента. ЙОго данні. Довільні.
//     Також на компі мають знаходитьсь фотки. ФОто потрібно скопіювати в папку з профіайлом студента стрімами.

const fs = require('fs');


exports.CreateGroup = function (groupFolder) {
    fs.mkdir(`./${groupFolder}`, err => {
        if (!err) {
        console.log(`Group ${groupFolder} was created`)}
    })}

exports.CreateStudent = function (group, student, info) {
    fs.mkdir(`./${group}/${student}`, err => {
        if (!err) {
        console.log(`Folder for ${student} was created`)}
    })

    fs.writeFile(`./${group}/${student}/${student}.txt`, JSON.stringify(info), err => {
        if (!err) {
            console.log(`Info about ${student} was added`)}
    })
}

exports.AddingPhoto = function (wreheTo, whereFrom) {
    fs.createReadStream(whereFrom).pipe(fs.createWriteStream(wreheTo));
    console.log('You just added the photo, thanks')
}


