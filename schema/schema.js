const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    dateYears: Date

})

const userModel = model("User",userSchema)

module.exports = user