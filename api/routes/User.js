
const express = require('express');
const request = require('request');
const router = express.Router();
router.get('/', (req, res, next) => {
    let user=[
        {
            "id":1,
            "Name":"Pawan",
            "Address":"Hyderabad"
        },
        {
            "id":2,
            "Name":"Yesho",
            "Address":"delhi"
        }
    ];
    res.status(200).send(user);   
});
router.get('/Error', (req, res, next) => {
    process.exit(1)
    res.status(200).send({ 'status': 'Connection unsuccessful' });   
});
module.exports = router;