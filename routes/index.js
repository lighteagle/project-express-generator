var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send(`<h1>Welcome to my API </h1>
  <p>content:</p>
  <p>.get("/users", getUser);</p>
  <p>.get("/users/logout", logout);</p>
  <p>.post("/users/register", register);</p>
  <p>.post("/users/authentication", authentication);</p>
  `);
});

module.exports = router;
