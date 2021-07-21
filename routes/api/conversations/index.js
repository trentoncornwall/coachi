const router = require("express").Router();
const conversation = require("./api");

router.route("/new").post(conversation.new);

module.exports = router;
