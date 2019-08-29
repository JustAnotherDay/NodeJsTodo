exports.createTodoValidator = (req, res, next) => {
  //title
  req.check("username", "username should not be empty").notEmpty();
  //body
  req.check("todo", "Todo description should not be empty").notEmpty();
  req.check("todo", "Todo must be between 4 to 150 characters").isLength({
    min: 4,
    max: 150
  });

  //check for errors
  const errors = req.validationErrors();

  if (errors)
    return res.status(400).json({
      error: errors
    });

  next();
};
