// flight Model /// needs edits 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Ticket = require('./ticket');

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: Date
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'SEA'
    },
    destinations: [destinationSchema],
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function () {
            return new Date().setFullYear(2020);
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema)

