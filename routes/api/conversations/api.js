const Conversation = require("../../../models/conversation");

module.exports = {
  new: (req, res) => {
    /**
     * TODO add check for user log in !req.user
     * TODO add check for previous conversations
     * TODO prevent sending message to yourself?
     * @param req.user - logged && sender
     * @param req.body.recipient
     * @param req.body.content - for the first message
     */

    const sender = req.user._id;
    const recipient = req.body.recipient;
    console.log([sender, recipient]);
    // console.log("req: ", req.user, req.body)
    Conversation.create([{ $push: { User: sender } }]).then((result) => {
      console.log(result);
      res.send("new conversation");
    });
  },
};
