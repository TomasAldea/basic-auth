const { Router } = require("express");
const {
  login,
  signup,
  checkCredentials,
} = require("../controllers/auth.controllers");
const router = Router();

router
  .post("/login", checkCredentials, login)
  .post("/signup", checkCredentials, signup);

module.exports = router;
