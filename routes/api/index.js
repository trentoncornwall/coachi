const router = require("express").Router();

const userAPI = require("./users");
const mentorAPI = require("./mentors");
const projectAPI = require("./projects");

router.use("/users", userAPI);
router.use("/mentors", mentorAPI);
router.use("/project", projectAPI);
module.exports = router;
