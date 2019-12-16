const router = require('express').Router();
import * as controller from "../controllers/activity_controller";


router.get("/getActivitiesByUser", controller.getActivitiesByUser);
router.get("/getAllActivities", controller.getAllActivities);
router.get("/getActivitiesById", controller.getActivitiesById);

module.exports = router;
