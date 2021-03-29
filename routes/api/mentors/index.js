const router = require("express").Router();
const mentor = require("./api");

router.route("/").get(mentor.all);
module.exports = router;
