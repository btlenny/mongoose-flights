const express = require('express');
const router = express.Router();
const ticketsCtlr = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/'

// GET /performers/new (new functionality)
router.get('/tickets/new', ticketsCtlr.new);
// POST /performers (create functionality)
router.post('/tickets', ticketsCtlr.create);

// POST localhost.3000/movies/:id/performers
router.post('/flights/:id/tickets', ticketsCtlr.addToFlight); 

module.exports = router; 