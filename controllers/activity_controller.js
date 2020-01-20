const mongoose = require('mongoose');
const User = require('../models/User');

export let getActivitiesByUser = (req, res) => {
  console.log("Get Activities By User");
  User.findOne({_id: req.user._id}, (err, doc) => {
    if (err) {
      res.json({error: err})
    } res.json(doc.activities)
  })
};


export let getActivityById = (req, res) => {
  console.log("Get Activity By Id");
  User.findOne({_id: req.user._id}, (err, doc) => {
    if (err) {
      res.json({error: err})
    } else {
      let activities = null;
      doc.activities.forEach(activity => {
        if (activity._id === req.body.activityId) {
          activities = activity;
        }
      });
      res.json(activities)
    }
  })
}


export let createActivity = (req, res) => {
  console.log('Creating a new Activity');
  // console.log(req.body)
  User.findOne({_id: req.user._id}, (err, doc) => {
    console.log(doc);
    if (err) {
      res.send({error: err})
    } else {
      let activities = doc.activities;
      let {name, textContent, date, students, assets, completed} = req.body;
      let newActivity = {
        _id: mongoose.Types.ObjectId(),
        name: name,
        textContent: textContent,
        date: date,
        dateCreated: new Date(),
        dateCompleted: completed ? new Date() : null,
        students: students,
        assets: assets
      };
      doc.activities = [...activities, newActivity];
      doc.save((err, data) => {
        if (err) {
          res.json({error: err})
        } else {
            res.json({ error: false, data: data })
        }
      })
    }
  })
};


// TODO: Fix update function
export let updateActivity = (req, res) => {

  User.findOne({_id: req.user._id}, (err, doc) => {
    console.log(doc)
    if (err) {
      res.json({error: err})
    } else {
      doc.activities.map(act => {
        if (act._id === req.body.activity_Id) {
          return {
            ...req.body.activity
          }
        } else {
          return act
        }

      })
    }
  })
}


export let deleteActivity = (req, res) => {
  console.log('Delete Activity');
  User.updateOne(
      {_id: req.user._id},
      {$pull: {activities: {_id: req.body.deleteId}}},
      {safe: true}, (err, doc) => {
        if (err) {
          console.log(err);
          res.json({error: err})
        } else {
          res.json({error: false, data: doc})
        }
      });
};



export let findUser = (req, res) => {
  User.findOne({username: req.user.username}, (err, doc) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({data: doc})
    }
  })
};

