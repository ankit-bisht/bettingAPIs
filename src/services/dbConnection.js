//Libraries
const mysql = require("mysql");
const util = require("util");

//Configs
const dbConfig = require("../configs/dbConfig");
const connection = dbConfig[process.env.NODE_ENV || "LOCAL"];

/**
 * @description This function is responsible to create a connection to Oracle DB
 */

exports.createConnection = () => {
  try {
    let pool = mysql.createPool(dbConfig[process.env.NODE_ENV || "LOCAL"]);
    // Checks for exception
    pool.getConnection((err, connection) => {
      if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
          console.error("Database connection was closed.");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
          console.error("Database has too many connections.");
        }
        if (err.code === "ECONNREFUSED") {
          console.error("Database connection was refused.");
        }
        if (err.code === "ER_ACCESS_DENIED_ERROR") {
          console.error(err.sqlMessage);
        }
      }
      if (connection) connection.release();
      return;
    });
    pool.query = util.promisify(pool.query);
    return pool;

  } catch (e) {
    console.log("error", e);
  }
};
