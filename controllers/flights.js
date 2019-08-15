// Flight controller 
const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newflight,
    create,
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', {
            flights
        });
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('flights/show', {flight})
    });
}

function newflight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    let flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new')
        console.log(flight);
        res.redirect('flights');
    });
}