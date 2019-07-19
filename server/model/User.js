const mongoose = require("mongoose")

//创建模型
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        }

    }
})

module.exports = mongoose.model('User', UserSchema);