const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
    name:{type: String},
    email:{type: String},
    password:{type: String}
},
{
    timestamps: true,
    versionKey:false,
}
)

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;