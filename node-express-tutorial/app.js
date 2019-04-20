var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contacts');
});

app.get('/profile/:id', function(req, res){
  res.send('You requested profile with id ' + req.params.id);
});

app.get('/profile/name/:name', function(req, res){
  var data = {age: 29, job: 'Sotware Engineer', hobbies:['Reading','Coding', 'Travelling']};
  res.render('profile',{person: req.params.name, data: data});
});
app.listen(3000);
