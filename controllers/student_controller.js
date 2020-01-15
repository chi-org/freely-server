const mongoose = require('mongoose');
const User = require('../models/User');


export let MyStudents = (req, res) => {
    User.findById({_id: req.user._id}, (err, doc) => {
        if (err) {
            res.status(500);
            res.json({error: err});
        } else {
            res.json(doc.students)
        }
    })
};

export let NewStudent = (req, res) => {
    User.updateOne({_id: req.user._id}, { $push: { students: {_id: mongoose.Types.ObjectId(), name: req.body.name, color: req.body.color}}}, (err, doc) => {
        if (err) {
            res.status(500);
            res.json({error: err})
        } else {
            res.json(doc)
        }
    })
};
