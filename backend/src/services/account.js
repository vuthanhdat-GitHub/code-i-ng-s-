const db = require('../untils/db')
const security = require('../untils/security')

const getAllAccount = async({ limit, offset }) => {
    const sql = `SELECT username, password, role, display, email, phone, address, birthday, avatar, status, created_at, updated_at
                FROM account
                WHERE isDelete = 0
                LIMIT ?
                OFFSET ?;`;
    const countSql = `SELECT COUNT(username) AS total
                    FROM account
                    WHERE isDelete = 0;`;
    const params = [limit, offset];
    const data = await db.queryMulti(sql, params);
    const { total } = await db.queryOne(countSql);
    return {
        data,
        metadata: {
            length: data.length,
            total
        }
    };
}

const getAllAccountById = async(username) => {
    const sql = `SELECT password, role, display, email, phone, address, birthday, avatar, status, created_at, updated_at
                FROM account
                WHERE username = ?
                    AND isDelete = 0
                LIMIT 1;`;
    const data = await db.queryOne(sql, username);
    return {
        data
    };
}

const createAccount = async (newAccount) => {
    const checkExistedSQL = `
    SELECT count(username) 
    FROM account 
    WHERE username = ?
    `;
    const exist = await db.queryOne(checkExistedSQL, [newAccount.username]);
    if (exist.c > 0) {
        return "tai khoan da ton tai";
    } else {
        const encrytedPassword = await security.generatePassword(newAccount.password);
        console.log(encrytedPassword);
        const insertSQL = `
    INSERT INTO account(username, password) VALUES (?,?);
    `;
        await db.query(insertSQL, [
            newAccount.username,
            encrytedPassword
        ]);
        return "tao tai khoan thanh cong";
    }
}

module.exports = {
    getAllAccount,
    getAllAccountById,
    createAccount

}