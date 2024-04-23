const UserModel = require('../Models/userModel');

exports.createUser = async (userData) => {
    try {
        return await UserModel.create(userData);
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getAllUsers = async () => {
    try {
        return await UserModel.find();
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getUserById = async (userId) => {
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateUser = async (userId, userData) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(userId, userData, { new: true });
        if (!updatedUser) {
            throw new Error('Usuario no encontrado');
        }
        return updatedUser;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.deleteUser = async (userId) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new Error('Usuario no encontrado');
        }
        return { message: 'Usuario eliminado exitosamente' };
    } catch (error) {
        throw new Error(error.message);
    }
};
