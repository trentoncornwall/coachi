const router = require("express").Router();

const userAPI = require("./users");

router.use("/users", userAPI);
module.exports = router;
