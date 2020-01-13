const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect(
    process.env.DBURL ? process.env.DBURL : "mongodb://localhost/freely",
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
      if (err) {
          console.log("Error: " + err);
      } else {
          console.log("Connected to database");
      }
  }
);

let randomNum = () => {return Math.floor(Math.random() * 100)};

let user = {
  name: {
  first: "Cap" + randomNum(),
  last: "Lala" + randomNum()
},
  username: "Testuser" + randomNum(),
dateJoined: new Date(),
students: [{
  _id: mongoose.Types.ObjectId(),
  name: "Bob",
  color: null
},{
  _id: mongoose.Types.ObjectId(),
  name: "Ben",
  color: null
}],
activities: [{
  _id: mongoose.Types.ObjectId(),
  name: "Clean House" + randomNum(),
  textContent: "This is the house you need to clean :}",
  date: new Date(),
  dateCreated: new Date(),
  dateCompleted: new Date(),
  students: ["Ben", "Bob"],
  assets: ["https://img.com", "https://img.com/2"]
},{
  _id: mongoose.Types.ObjectId(),
  name: "House" + randomNum(),
  textContent: "This is the house you need to clean :}",
  date: new Date(),
  dateCreated: new Date(),
  dateCompleted: new Date(),
  students: ["Bob", "Ben"],
  assets: ["https://img.com", "https://img.com/2"]
}]
}


new User(user).save(err => {if (!err) {
  process.exit()
}});
