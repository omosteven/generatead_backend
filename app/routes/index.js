const { register } = require("../controllers/AuthController");

const router = require("express").Router();

router.post("/register", register);

module.exports = router;
