import * as controller from "../controllers/activity_controller";
var assert = require('assert');
const mongoose = require('mongoose');




const req = {
    user: {
        _id: "5e264f0d1f81032e3028b298"
    }
}

const res = {}


describe('Testing', function() {
    before(() => {
        const DB = process.env.DBURL ? process.env.DBURL : "mongodb://localhost/freely";
        mongoose.connect(
            DB,
            { useNewUrlParser: true, useUnifiedTopology: true },
            err => {
                if (err) {
                    console.log("Error: " + err);
                } else {
                    console.log("Connected to database: " + DB);
                }
            }
        );
    })
    describe('Activities', function() {
        it('should return log a callback', function() {
            res.json = data => {

            }
            controller.getActivitiesByUser(req, res)
        });
    });
});
