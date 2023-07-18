const Ticket = require('../models/Ticket');

const router = require('express').Router()



// Ticket router start 
router.use('/api/v1/tickets', require('../routes/ticket'))




router.get('/health', (_req, res) => {
    // const error = new Error('hello Error')
    // error.status = 400
    // throw error;
    res.status(200).json({message: "Success"})
})

// app.get('/health2', (_req, res) => {
//     throw new Error('Error')
//     res.status(200).json({message: "Success"})
// })


module.exports = router;