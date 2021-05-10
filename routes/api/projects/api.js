const User = require("../../../models/user");
const Project = require("../../../models/project");

module.exports = {
  create: (req, res) => {
    console.log(req.body);
  },
};

// createPlan: (req, res) => {
//   db.Plan.create(req.body.data)
//     .then(dbPlan => {
//       return db.User.findOneAndUpdate(
//         { _id: req.params.id },
//         { $push: { plans: dbPlan._id } },
//         { new: true }
//       );
//     })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       console.log(err);
//       res.json(err);
//     });
// },s
