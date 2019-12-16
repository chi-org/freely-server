const router = require('express').Router();
const {getAllActivates, getAllUsers} = require('../controllers/activity_controller');


router.get("/all", getAllActivates);
router.get("/allusers", getAllUsers);


module.exports = router;
