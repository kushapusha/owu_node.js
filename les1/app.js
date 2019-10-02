const {CreateGroup, CreateStudent, AddingPhoto} = require('./students');



CreateGroup('jscx-1800');
CreateStudent('jscx-1800', 'Vika Kushnir', 'Name: Vika; Age: 26');
AddingPhoto('./jscx-1800/Vika Kushnir/me.jpg', './photos/me.jpg');

CreateGroup('jscx-2000');
CreateStudent('jscx-2000', 'Tom Kruz', 'Name: Tom; Age: 55');
AddingPhoto('./jscx-2000/Tom Kruz/tom.jpg', './photos/tom.jpg');
