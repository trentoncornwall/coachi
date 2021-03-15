const router = require("express").Router();
const users = require("./api");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.route("/register").post(users.register);
router.route("/login").post(users.login);
router.route("/logout").get(users.logout);
router.route("/").get(users.user).put(upload.single("image"), users.update);

module.exports = router;
