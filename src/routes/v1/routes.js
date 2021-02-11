const express = require("express"); // Making Object Of Express
const router = express.Router(); // Using Routing Function of Express
var UserController = require("../../controllers/UserController");
var BetController = require("../../controllers/BetController");

//user routes
router.route("/getUserDetails").post(UserController.getUserDetails);
router.route("/getAllUserDetails").get(UserController.getAllUserDetails);

//bet routes
router.route("/getBetDetails").post(BetController.getBetDetails);
router.route("/getAllBetDetails").get(BetController.getAllBetDetails);
router.route("/getBestBetPerUser").post(BetController.getBestBetPerUser);
router.route("/createBet").post(BetController.createBet);

module.exports = router; //Exports all Routes