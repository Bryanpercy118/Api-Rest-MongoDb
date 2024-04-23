const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
    name:{type: string},
    email:{type: string},
    password:{type: string}
},
{
    timestamps: true,
    versionKey:false,
}
)

const ModelUser = mongoose.model("users", userSchema);
module.exports = ModelUser;