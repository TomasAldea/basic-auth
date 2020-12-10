const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    hashPassword: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model("User", UserSchema)