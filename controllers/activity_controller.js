const mongoose = require('mongoose');
const User = require('../models/User');

export let getActivitiesByUser = (req, res) => {
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

export let getAllActivities = (req, res) => {
  console.log('====================================');
  console.log("Get All Activities");
  console.log('====================================');
  User.find({}).exec((error, data) => {
    if (error) {
      console.error(error)
      res.status(500)
      res.send(error)
    } else {
      console.log(data)
      let activities = data.map(user => {
        return {
          user_id: user.id,
          activities: user.activities
        }
      })[0]
      console.log(activities)
      res.json(activities)
    }
  })
}

export let getActivitiesById = (req, res) => {
  console.log('====================================');
  console.log("Get Activitie Bt Id");
  console.log('====================================');
  User.findById({_id: req.query.id}).exec((error, data) => {
    let activities = null;
    data.activities.forEach(activitie => {
      if (activitie._id == req.query.activitieID) {
        activities = activitie;
      }
    });
    res.json(activities)
  })
}

