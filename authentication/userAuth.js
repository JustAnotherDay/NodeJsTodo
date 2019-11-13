const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
function authenticate(req, res, next) {
  const { authorization } = req.headers;

  if (authorization) {
    const bearer = authorization.split(" ");
    const bearerToken = bearer[1];
    jwt.verify(bearerToken, SECRET_KEY, (err, decodedToken) => {
      if (err) {
        return res.status(401).json("Authentication error");
      } else {
        req.decoded = decodedToken;
        next();
      }
    });
  } else {
    return res.status(403).json("No token provided");
  }
}

module.exports = { authenticate };
