const router = require("express").Router();
const message = require("./api");

router.route("/new").post(message.new);

module.exports = router;
