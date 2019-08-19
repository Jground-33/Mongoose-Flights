// Flight controller 
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newflight,
    create,
}

function index(req, res) {
    Flight.find({}).sort({
        departs: 'asc'
    }).exec(function (err, flights) {
        res.render('flights/index', {
            title: "Flights Overview",
            flights
        });
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        // sorts destination by arrival date
        flight.destinations.sort((a, b) => {
            if (a.arrival < b.arrival) return -1;
            if (a.arrival > b.arrival) return 1;
            return 0;
        });
        //
        Ticket.find({flight: flight._id}, (err, tickets) => {
            res.render('flights/show', {
                title: "Flight Details",
                airports: ['AUS', 'DAL', 'LAX', 'SEA'],
                flight,
                tickets,
            });
        });
    });
}

function newflight(req, res) {
    res.render('flights/new', {
        title: "Enter a New Flight",
    });
}

function create(req, res) {
    let flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new')
        console.log(flight);
        res.redirect('flights');
    });
}