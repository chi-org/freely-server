const mongoose = require('mongoose');
const User = require('../models/User');

let getAllActivates = (req, res) => {
  console.log('====================================');
  console.log("Get All Activity's");
  console.log('====================================');
  User.findById({_id: req.query.id}).exec((error, data) => {
    if (error) {
      console.error(error)
      res.status(500)
      res.send(error)
    } else {
      res.json(data.activities)
    }
  })
};

let getAllUsers = (req, res) => {
  console.log('====================================');
  console.log("Get All Users");
  console.log('====================================');
  User.find({}).exec((error, data) => {
    if (error) {
      console.error(error)
      res.status(500)
      res.send(error)
    } else {
      res.json(data)
    }
  })
}

module.exports = {getAllActivates, getAllUsers};
