const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sary", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

//Sary's passport code is bellow.

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactnews",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );

app.use(passport.initialize());
app.use(passport.session());

// Use apiRoutes
app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
