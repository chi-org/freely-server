const router = require('express').Router();
import * as controller from "../controllers/activity_controller";


router.get("/getActivitiesByUser", controller.getActivitiesByUser);
router.get("/getActivitiesById", controller.getActivitiesById);
router.post("/createActivity", controller.createActivity);
router.delete("/deleteActivity", controller.deleteActivity)
router.get("/findUser", controller.findUser)
module.exports = router;
