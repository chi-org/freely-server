const mongoose = require('mongoose');
const User = require('../models/User');


export let getStudents = (req, res) => {
    User.findOne({_id: req.user._id}, (err, doc) => {
        if (err) {
            res.json({error: err});
        } else {
            res.json(doc.students)
        }
    })
};

export let newStudent = (req, res) => {
    if (req.body.name) {
        User.updateOne({_id: req.user._id}, { $push: { students: {_id: mongoose.Types.ObjectId(), name: req.body.name, color: req.body.color}}}, (err, doc) => {
            if (err) {
                res.json({error: err})
            } else {
                res.json(doc)
            }
        })
    } else {
        res.status(500);
        res.json({error: "NO NAME"});
    }
};

// Update student

// Delete student

export let deleteStudent = (req, res) => {
    if (req.body.deleteId) {
        User.updateOne({_id: req.user._id}, { $pull: {students: {_id: req.body.deleteId}}}, {safe: true}, (err, doc) => {
            if (err) {
                res.json({error: err})
            } else {
                res.json(doc)
            }
        })
    } else {
        res.status(500);
        res.json({error: "ID"});
    }
}
