const Todo = require("../models/todoModel");

exports.getTodos = (req, res) => {
  console.log("RETRIEVING TODO", req.body);
  const queryFilters = req.query;
  const todo = Todo.find({...queryFilters})
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

exports.createTodo = (req, res) => {
  const todo = new Todo(req.body);
  console.log("CREATING TODO", req.body);
  todo.save().then(result => {
    return res.json({
      todo: result
    });
  });
};

exports.updateTodo = (req, res) => {
  const todo = req.body;
  console.log(req);
  console.log("UPDATING TODO", req.body);
  todo.save()
    .then(result => {
    return res.json({
      todo: result
    })
    .catch(err => {
      console.log("err");
      return res.err;
    });
  });
};
