const Todo = require("../models/todoModel");

exports.getTodos = (req, res) => {
  const id = req.body.id;
  const queryFilters = req.query;

  if (id) {
    //if ID is provided find by id
    const todo = Todo.find({id})
      .then(todos => {
        res.json({
          todos
        });
      })
      .catch(err => {
        console.log("err");
        return res.err;
      });
  } else {
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
  }
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
