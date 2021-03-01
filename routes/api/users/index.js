const router = require("express").Router();
const users = require("./api");

router.route("/register").post(users.register);
router.route("/login").post(users.login);
router.route("/").get(users.user);

module.exports = router;
