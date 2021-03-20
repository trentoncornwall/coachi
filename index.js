const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

//passport
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");

//middleware
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
