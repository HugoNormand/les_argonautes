const mongoose = require('mongoose');

const crewSchema = mongoose.Schema({
    crewname: { type: String, require: true },   
}, {
    timestamps: true
})

module.exports = mongoose.model('crewModel', crewSchema)