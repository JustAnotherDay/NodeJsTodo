const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

exports.loginUser = (req, res) => {
  const user = {
    username: "test",
    password: "test"
  };

  jwt.sign({ user }, secretKey, (err, token) => {
    res.json({
      token
    });
  });
};
