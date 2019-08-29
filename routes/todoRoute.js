const express = require("express");
const { getTodos, createTodo, updateTodo } = require("../controllers/todoController");
const router = express.Router();
const validator = require("../validators/todoValidator");

router.get("/todo", getTodos);
router.post("/todo/create", validator.createTodoValidator, createTodo);
router.post("/todo/update", updateTodo);


module.exports = router;
