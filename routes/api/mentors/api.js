const User = require("../../../models/user");

module.exports = {
  all: (req, res) => {
    User.find({ mentor: true }).then((result) => res.send(result));
  },
};
