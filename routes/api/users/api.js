const { User } = require("../../../models");

module.exports = {
  create: (req, res) => {
    console.log("/api/users/create...");
    console.log(req.body);
    // User.create(req.body)
    //   .then((user) => {
    //     res.sendStatus(200);
    //   })
    //   .catch((err) => console.log(err));
  },

  find: (req, res) => {
    console.log("/api/users/find...");
    console.log(req.body);
    User.findOne(req.body)
      .then((user) => res.send(user))
      .catch((err) => {
        throw err;
      });
  },
};
