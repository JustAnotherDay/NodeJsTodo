const express = require("express");
const { getTodos, createTodo, updateTodo } = require("../controllers/todoController");
const router = express.Router();
const validator = require("../validators/todoValidator");

router.get("/todo", getTodos);
router.get("/todo/:id", getTodos);
router.post("/todo", validator.createTodoValidator, createOrUpdateTodo);
//router.post("/todo/update", updateTodo);


module.exports = router;
