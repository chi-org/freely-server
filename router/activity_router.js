const router = require('express').Router();
import * as controller from "../controllers/activity_controller";


router.get("/getActivitiesByUser", controller.getActivitiesByUser);
router.get("/getActivitiesById", controller.getActivitiesById);
router.post("/createActivity", controller.createActivity);
module.exports = router;
