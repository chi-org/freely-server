import * as controller from "../controllers/activity_controller";
const mongoose = require('mongoose');
import chai from "chai";


let req = {};
let res = {};


describe('Testing', function() {
    beforeEach(() => {
        res = {}
        req = {
            user: {
                _id: "5e264f0d1f81032e3028b298"
            },
            body: {}
        }
    })
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
    after(() => {
        process.exit(0)
    })


    describe('Activities', function() {
        it('Should get a array of activities', function() {
            res.json = data => {
                chai.assert.typeOf(data, 'array');
            }
            controller.getActivitiesByUser(req, res)
        });

        it("Should find one activities", () => {
            res.json = data => {
                chai.expect(data).to.be.a('object');
            }
            req.body.activityId = "5e264f201f81032e3028b29a"
            controller.getActivitiesById(req, res)
        });

        it("Create a activity", async () => {
            req.body = {
                "name": "",
                "textContent": "this is a ac123tivity231213",
                "date": "2020-01-20T01:13:48.857Z",
                "students": [],
                "assets": [],
                "completed": false
            };
            res.json = ({error, data}) => {
                chai.expect(error).to.equal(false);
                // chai.expect(data).to.be.a('object');
            }
            controller.createActivity(req, res)
        });
    });
});
