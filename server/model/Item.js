const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    icon: { //图片路径
        type: String
    },
    title: { //谁的演唱会
        type: String
    },
    id: {
        type: Number
    },
    price: {
        type: String
    },
    logicAddress: { //市区
        type: String
    },
    showTime: { //时间
        type: String
    },
    venueName: { //举办地址
        type: String
    },
    img: {
        type: String
    },
    button: {
        type: String
    },
    p: {
        type: String
    }
})

module.exports = mongoose.model("Item", schema)