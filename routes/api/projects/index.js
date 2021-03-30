const router = require("express").Router();
const project = require("./api");

router.route("/").post(project.create);
module.exports = router;
