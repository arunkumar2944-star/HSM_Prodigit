import user from "../models/user.js";
const db = require("../config/db");


exports.register = async (userData) => {
    // Business logic

    const existingUser = await authModel.findByEmail(userData.email);

    if (existingUser) {
        throw new Error("Email already exists");
    }

    // Hash password...

    return await authModel.createUser(userData);
};

exports.getUserList = async () => {
    return await authModel.findUsers();
};

module.exports = {
    register,
    getUserList,
};