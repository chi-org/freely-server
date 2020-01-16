const router = require('express').Router();
import * as controller from "../controllers/student_controller";
import {userAuthenticated} from "../middleware/userAuthenticated";

router.get("/my", userAuthenticated,controller.MyStudents);
router.post('/new', userAuthenticated, controller.NewStudent);

module.exports = router;
