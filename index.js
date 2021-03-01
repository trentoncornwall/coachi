const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const passportLocal = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const session = require("express-session");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000", // <-- location of the react app were connecting to
//     credentials: true,
//   })
// );
app.use(
  session({
    secret: "abcd123!!",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("abcd123!!"));
app.use(passport.initialize());
app.use(passport.session());
require("./services/passport")(passport);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

//connection to DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/coachi", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
