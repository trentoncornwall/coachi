const router = require("express").Router();

const userAPI = require("./users");
const mentorAPI = require("./mentors");

router.use("/users", userAPI);
router.use("/mentors", mentorAPI);

module.exports = router;
