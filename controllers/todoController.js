const Todo = require("../models/todoModel");

exports.getTodos = (req, res) => {
  const id = req.body.id;
  if (id) {
    //if ID is provided find by id
    const todo = Todo.findById(id)
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
    const todo = Todo.find()
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
