const router = require('express').Router();
import * as controller from "../controllers/activity_controller";
import {userAuthenticated} from "../middleware/userAuthenticated";

router.get("/getActivitiesByUser", userAuthenticated, controller.getActivitiesByUser);
router.get("/getActivitiesById", userAuthenticated, controller.getActivitiesById);
router.post("/createActivity", userAuthenticated, controller.createActivity);
router.delete("/deleteActivity", userAuthenticated, controller.deleteActivity);
router.get("/findUser", userAuthenticated, controller.findUser);
module.exports = router;
