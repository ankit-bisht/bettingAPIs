/**
 * @description Has queries related to user_details Table
 */

exports.getSingleBetDetails = async (id) => {
    try {
        let sql = "select * from bet where id = ?";
        let result = await con.query(sql, [id]);
        return result;
    } catch (err) {
        throw err;
    }
}

exports.getBestBets = async (limit) => {
    try {
        let sql = "select userId,max(chance) from bet GROUP by userId limit ?";
        let result = await con.query(sql, [limit]);
        return result;
    } catch (err) {
        throw err;
    }
}

exports.getAllBetDetails = async () => {
    try {
        let sql = "select * from bet";
        let result = await con.query(sql, []);
        return result;
    } catch (err) {
        throw err;
    }
}

exports.createBet = async (userId,betAmount,chance,payout,win) => {
    try {
        let sql = "INSERT into bet (userId,betAmount,chance,payout,win) values (?,?,?,?,?)";
        let result = await con.query(sql, [userId,betAmount,chance,payout,win]);
        return result;
    } catch (err) {
        throw err;
    }
}