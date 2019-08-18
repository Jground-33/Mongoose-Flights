// Tickets Router
const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketCtrl.new); 
router.post('/flights/:id/tickets', ticketCtrl.create);
router.delete('/flights/:fid/tickets/:tid', ticketCtrl.delete)
module.exports = router;