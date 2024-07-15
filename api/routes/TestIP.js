const express = require('express');
const router = express.Router();
var ec2 = require("ec2-publicip");
router.get('/', (req, res, next) => {
    let data1;   
     ec2.getPublicIP(function (error, ip) {
        if (error) {
                console.log(error);
        }
        //console.log("Instance Public IP: ", ip);
        res.status(200).send("Public IP address is "+ip);
    });
});
module.exports = router;
