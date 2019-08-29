const Todo = require("../models/todoModel");

exports.getTodos = (req, res) => {
  console.log("RETRIEVING TODO", req.body);
  var queryFilters = req.query;
  const id = req.params.id;
  console.log(queryFilters);

  if(id)
    queryFilters._id = id;

  Todo.find({...queryFilters})
  .then(todos => {
    res.json({
      todos
    });
  })
  .catch(err => {
    console.log("err");
    return res.err;
  });

};

exports.createOrUpdateTodo = (req, res) => {
  const id = req.body.id;
  if(id){
    //update
    console.log("UPDATING TODO", req.body);
    const newTodo = req.body;
    console.log(newTodo);
    Todo
    .findOneAndUpdate(
      id,
      { todo : newTodo.todo,
        isDone : newTodo.isDone, 
        hasAttachement : newTodo.hasAttachement
      },
      { upsert: true, new: true },
      (err, doc) =>{
        return res.json({
        todo: doc
      });
    });

  }else{
    //insert
    const todo = new Todo(req.body);
    console.log("CREATING TODO", req.body);
    todo.save().then(result => {
      return res.json({
        todo: result
      });
    });
  }
};