const mongoose = require('mongoose');

//테이블의 스키마를 정의 하고 exports함

const UserSchema = new mongoose.Schema({
    userid: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model("User", UserSchema);
