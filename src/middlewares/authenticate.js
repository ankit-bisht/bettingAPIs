//Utilities
const response = require("../utilities/response");

/**
 * @description Handles routes that are not found
 */

exports.routeNotFound = (req, res, next) => {
  response.onError(res, '', 404, "Route not found.");
  return;
 }

