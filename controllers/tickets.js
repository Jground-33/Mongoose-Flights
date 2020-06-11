// Ticket Controller

const Ticket = require('../models/ticket');
const Flight = require("../models/flight");

module.exports = {
    new: newTicketPage,
    create,
    delete: deleteTicket
}


function newTicketPage(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('tickets/new', {
            title: "Enter a New Ticket",
            flight
        }) 
    })
}


function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
        console.log(ticket)
        res.redirect(`/flights/${req.params.id}`); // create new ticket.
    });
}

function deleteTicket(req, res) {
    Ticket.deleteOne({_id: req.params.tid}, function (err) {
        res.redirect(`/flights/${req.params.fid}`)
    })
}