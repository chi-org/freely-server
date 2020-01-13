const mongoose = require('mongoose');
const User = require('../models/User');

export let getActivitiesByUser = (req, res) => {
  console.log("Get Activities By User");
  User.findById({_id: req.body.id}).exec((error, data) => {
    if (error) {
      console.error(error)
      res.status(500)
      res.send(error)
    } else {
      res.json(data.activities)
    }
  })
};


export let getActivitiesById = (req, res) => {
  console.log("Get Activities By Id");
  User.findById({_id: req.body.userId}).exec((error, data) => {
    let activities = null;
    data.activities.forEach(activity => {
      if (activity._id === req.body.activityId) {
        activities = activity;
      }
    });
    res.json(activities)
  })
}


export let createActivity = (req, res) => {
  console.log('Creating a new Activity')
  // console.log(req.body)
  User.findById({_id: req.body.userId}, (err, doc) => {
    console.log(doc)
    if (err) {
      res.send({error: err})
    } else {
      let activities = doc.activities
      let {name, textContent, date, students, assets, completed} = req.body
      let newActivity = {
        name: name,
        textContent: textContent,
        date: date,
        dateCreated: new Date(),
        dateCompleted: completed ? new Date() : null,
        students: students,
        assets: assets
      }
      doc.activities = [...activities, newActivity]
      doc.save((err, data) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({error: false, data: {...data}})
        }
      })
    }
  })
}


export let deleteActivity = (req, res) => {

}
