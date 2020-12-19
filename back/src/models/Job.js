const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
}, {
    toJSON: {
        virtuals: true
    }
})

JobSchema.virtual('image_url').get(function() {
    return `http://localhost:3333/files/${this.img}`
})

const Job = mongoose.model("Job", JobSchema)
module.exports = { Job }