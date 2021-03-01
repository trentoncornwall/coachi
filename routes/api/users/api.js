const User = require("../../../models/user");
const passport = require("passport");
const bcrypt = require("bcryptjs");

module.exports = {
  register: (req, res) => {
    console.log("POST -> /api/users/register/...");
    console.log(req.body);

    User.findOne({ username: req.body.username })
      .then(async (user) => {
        // user already exists
        if (user) {
          return res.send("user alredy exists");
        }

        //user setup
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
          username: username,
          password: hashedPassword,
        };

        User.create(newUser)
          .then((user) => res.send(user))
          .catch((err) => res.send(err));
      })
      .catch((err) => res.send(err));
  },

  login: (req, res, next) => {
    console.log("/api/users/login...");
    console.log(req.body);

    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  },

  user: (req, res) => {
    console.log(req.user);
    res.send(req.user);
  },
};
