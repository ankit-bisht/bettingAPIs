//Libraries
const response = require('../utilities/response');
const moment = require('moment');

//Configs
const apiConfig = require('../configs/apiConfig');

//Models
const userDetails = require('../models/userModel');

/**
 * @type POST
 * @description  get User's data based on id
 * @inputHeader -
 * @input id
 * @author Ankit Bisht
 */

exports.getUserDetails = async (req, res) => {
    try {
        let id = req.body.id;
        var userData = await userDetails.getSingleUserDetails(id);
        if(userData[0]) {
            response.onSuccess(res, userData[0], 'User data fetched successfully!.', 200);
        } else {
            response.onSuccess(res, '', 'No User Found!.', 200);
        }
    } catch (err) {
        response.onError(res, '', 404, 'Something went wrong! Please try again later!');
    }
}

/**
 * @type GET
 * @description  get ALL Users DAta
 * @inputHeader -
 * @input -
 * @author Ankit Bisht
 */

exports.getAllUserDetails = async (req, res) => {
    try {
        let id = req.body.id;
        var userData = await userDetails.getAllUserDetails();
        if(userData[0]) {
            response.onSuccess(res, userData, 'All Users data fetched successfully!.', 200);
        } else {
            response.onSuccess(res, '', 'No User Found!.', 200);
        }
    } catch (err) {
        response.onError(res, '', 404, 'Something went wrong! Please try again later!');
    }
}
