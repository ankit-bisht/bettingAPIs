/**
 * @description Has queries related to user_details Table
 */

exports.getSingleUserDetails = async (id) => {
    try {
        let sql = "select * from user where id = ?";
        let result = await con.query(sql, [id]);
        return result;
    } catch (err) {
        throw err;
    }
}

exports.getAllUserDetails = async () => {
    try {
        let sql = "select * from user";
        let result = await con.query(sql, []);
        return result;
    } catch (err) {
        throw err;
    }
}