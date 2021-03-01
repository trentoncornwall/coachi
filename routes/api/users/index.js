const router = require("express").Router();
const users = require("./api");

router.route("/").post(users.create).get(users.find);

module.exports = router;
