const User = require("../../../models/user");
const passport = require("passport");
const bcrypt = require("bcryptjs");

module.exports = {
  register: (req, res) => {
    console.log(req.body);

    User.findOne({ username: req.body.username })
      .then(async (user) => {
        // user already exists
        if (user) {
          return res.send("Username already taken.");
        }

        //user setup
        const { username, password, first, last } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
          username: username,
          password: hashedPassword,
          first: first,
          last: last,
        };

        User.create(newUser)
          .then((user) => res.send("Success"))
          .catch((err) => res.send(err));
      })
      .catch((err) => res.send(err));
  },

  login: (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.sendStatus(204);
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          const { first, last, username, _id } = user;
          res.send({ first, last, username, _id });
          // console.log(req.user);
        });
      }
    })(req, res, next);
  },

  logout: (req, res) => {
    req.logout();
    res.sendStatus(200);
  },

  user: (req, res) => {
    res.send(req.user);
  },
};
