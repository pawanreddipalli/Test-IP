

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({ 'status': 'Connection successful' });   
});

router.get('/Error', (req, res, next) => {
    res.status(500).send({ 'status': 'Connection unsuccessful' });   
    process.exit(1); // Exit the process after sending the response
}); 

module.exports = router;
