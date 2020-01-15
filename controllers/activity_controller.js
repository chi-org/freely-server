const mongoose = require('mongoose');
const User = require('../models/User');

export let getActivitiesByUser = (req, res) => {
  console.log("Get Activities By User");
  // console.log(req.user)
  User.findOne({_id: req.user._id}).exec((error, data) => {
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
  User.findOne({_id: req.user._id}).exec((error, data) => {
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
  User.findOne({_id: req.user._id}, (err, doc) => {
    console.log(doc)
    if (err) {
      res.send({error: err})
    } else {
      let activities = doc.activities
      let {name, textContent, date, students, assets, completed} = req.body
      let newActivity = {
        _id: mongoose.Types.ObjectId(),
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
          res.json({error: false, data: data})
        }
      })
    }
  })
}


export let deleteActivity = (req, res) => {
  console.log('Delete Activity')
  // console.log(req.body)
  User.updateOne(
      { _id: req.user._id },
      { $pull: { activities : { _id : req.body.deleteId } } },
      { safe: true }, (err, doc) => {
        if (err) {
          console.log(err)
          res.json({error: err})
        } else {
          res.json({error: false, data: doc})
        }
      });
}


export let findUser = (req, res) => {
  User.findOne({username: req.user.username}, (err, doc) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({error: false, data: doc})
    }
  })
}

