//Libraries
const response = require('../utilities/response');

//Configs
const apiConfig = require('../configs/apiConfig');

//Models
const betModel = require('../models/betModel');

/**
 * @type POST
 * @description  get Bet data based on id
 * @inputHeader -
 * @input id
 * @author Ankit Bisht
 */

exports.getBetDetails = async (req, res) => {
    try {
        let id = req.body.id;
        var userData = await betModel.getSingleBetDetails(id);
        if (userData[0]) {
            response.onSuccess(res, userData[0], 'Bet data fetched successfully!.', 200);
        } else {
            response.onSuccess(res, '', 'No Bet Found!.', 200);
        }
    } catch (err) {
        response.onError(res, '', 404, 'Something went wrong! Please try again later!');
    }
}

/**
 * @type GET
 * @description  get ALL Bets DAta
 * @inputHeader -
 * @input -
 * @author Ankit Bisht
 */

exports.getAllBetDetails = async (req, res) => {
    try {
        let id = req.body.id;
        var userData = await betModel.getAllBetDetails();
        if (userData[0]) {
            response.onSuccess(res, userData, 'All Bets data fetched successfully!.', 200);
        } else {
            response.onSuccess(res, '', 'No Bet Found!.', 200);
        }
    } catch (err) {
        response.onError(res, '', 404, 'Something went wrong! Please try again later!');
    }
}


/**
 * @type POST
 * @description  return a distinct list of the best bet each user has made. Allow limiting the result set
 * @inputHeader limit
 * @input -
 * @author Ankit Bisht
 */

exports.getBestBetPerUser = async (req, res) => {
    try {
        let limit = req.body.limit;
        var userData = await betModel.getBestBets(limit);
        if (userData[0]) {
            response.onSuccess(res, userData, 'All Users data fetched successfully!.', 200);
        } else {
            response.onSuccess(res, '', 'No User Found!.', 200);
        }
    } catch (err) {
        response.onError(res, '', 404, 'Something went wrong! Please try again later!');
    }
}

/**
 * @type POST
 * @description  create a Bet
 * @inputHeader userId, betAmount,chance
 * @input -
 * @author Ankit Bisht
 */

exports.createBet = async (req, res) => {
    try {
        let { userId, betAmount, chance } = req.body;
        let payout = 0;
        let win = 0;
        if(chance == 100){
            win = 1;
        }
        await betModel.createBet(userId, betAmount, chance, payout, win);
        response.onSuccess(res, userData, 'Bet Created successfully!.', 200);

    } catch (err) {
        response.onError(res, '', 404, 'Something went wrong! Please try again later!');
    }
}

