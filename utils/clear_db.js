const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect(
  "mongodb://localhost/freely",
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
      if (err) {
          console.log("Error: " + err);
      } else {
          console.log("Connected to database");
      }
  }
);


User.deleteMany().exec((err, res) => {
  if (!err) {
    console.log(res)
    process.exit(0)
  }
});
