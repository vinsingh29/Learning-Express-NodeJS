var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://test:welcome123@ds261828.mlab.com:61828/todo929');

//create a schema
var todoSchema = new mongoose.Schema({
  item: String
});

//Create a todo model
var Todo = mongoose.model('Todo', todoSchema);


//var data = [{item: 'get milk'},{item: 'coding'},{item: 'read'},{item: 'study'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

app.get('/todo', function(req,res){
  //get data from mongo
    Todo.find({}, function(err, data){
    if(err) throw err;
    res.render('todo',{todos:data});
  });
});

app.post('/todo',urlencodedParser ,function(req,res){
  //get data from view and add it to mongodb
  var newTodo = Todo(req.body).save(function(err,data){
    if(err) throw err;
    res.json(data);
  });
});

app.delete('/todo/:item', function(req,res){
  //delet the Item
  Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err, data){
    if(err) throw err;
    res.json(data);

  });
});

};
