var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//set up template Engine
app.set('view engine' , 'ejs');

//static files
app.use(express.static('./public')); // This will be used on every page

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('server at port 3000');
