exports.register = async (userData) => {
    // Business logic

    const existingUser = await authModel.findByEmail(userData.email);

    if (existingUser) {
        throw new Error("Email already exists");
    }

    // Hash password...

    return await authModel.createUser(userData);
};