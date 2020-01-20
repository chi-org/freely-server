const router = require('express').Router();
import * as controller from "../controllers/student_controller";
import {userAuthenticated} from "../middleware/userAuthenticated";

router.get("/getStudents", userAuthenticated,controller.getStudents);
router.post("/newStudent", userAuthenticated, controller.newStudent);
// update student
router.delete("/deleteStudent", userAuthenticated, controller.deleteStudent)

module.exports = router;
