const express = require("express");
const { getTodos, createTodo } = require("../controllers/todoController");
const router = express.Router();
const validator = require("../validators/todoValidator");

router.get("/todo", getTodos);
router.post("/todo/create", validator.createTodoValidator, createTodo);
router.post("/todo/update", validator.createTodoValidator, updateTodo);


module.exports = router;
