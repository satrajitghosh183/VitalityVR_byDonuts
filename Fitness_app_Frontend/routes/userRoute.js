const express = require("express");
const router = express.Router();
const {createUser,loginUser,logoutUser,connect_Strava,authorize} = require("../funcs/userFunc");
const {authentication} = require("../middlewares/auth");

router.route('/createUser').post(createUser);
router.route('/loginUser').post(loginUser);
router.route('/logout').post(logoutUser);
router.route('/connect').get(connect_Strava);
router.route('/authorize').get(authentication);
router.route('/strava_authorize').post(authorize);

module.exports = router;