const router = require('express').Router();
import * as controller from "../controllers/activity_controller";
import {userAuthenticated} from "../middleware/userAuthenticated";

router.get("/getActivitiesByUser", userAuthenticated, controller.getActivitiesByUser);
router.get("/getActivityById", userAuthenticated, controller.getActivityById);
router.post("/createActivity", userAuthenticated, controller.createActivity);
router.delete("/deleteActivity", userAuthenticated, controller.deleteActivity);
router.get("/findUser", userAuthenticated, controller.findUser);
router.post("/updateActivity", userAuthenticated, controller.updateActivity);
module.exports = router;
