const jwt = require("jsonwebtoken");
const JWT_SECRET = "thisisasecretkey";

const fetchUser = (req, res, next) => {
  // get user from JWT Token and add id to request (req)
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).json({ error: "please authenticate using valid cred" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).json({ error: "please authenticate using valid cred" });
  }
};
module.exports = fetchUser;
