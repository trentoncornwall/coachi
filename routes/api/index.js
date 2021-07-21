const router = require("express").Router();

const userAPI = require("./users");
const mentorAPI = require("./mentors");
const conversationAPI = require("./conversations");
const messageAPI = require("./messages");

router.use("/users", userAPI);
router.use("/mentors", mentorAPI);
router.use("/conversation", conversationAPI);
router.use("/message", messageAPI);

module.exports = router;
