//Packages
const Joi = require('@hapi/joi');

//Utilities
const response = require("../utilities/response");

/**
 * @description Handles parameters and body sanitization
 */

exports.validator = (req, res, next) => {
    try {
        switch (req.params[0].split("/")[3]) {
            case '': {
                
            }
                break;

            default:
                next();
                break;

        }
    } catch (err) {
        response.onError(res, '', 404, err.message);
    }
}
