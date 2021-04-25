const express = require("express");
const {
  getTodos,
  createOrUpdateTodo
} = require("../controllers/todoController");
const router = express.Router();

const validator = require("../validators/todoValidator");
const authenticator = require("../authentication/userAuth");

router.get("/todo", authenticator.authenticate, getTodos);
router.get("/todo/:id", getTodos);
router.post("/todo", validator.createTodoValidator, createOrUpdateTodo);
//router.post("/todo/update", updateTodo);

module.exports = router;
