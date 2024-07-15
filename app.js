
const express = require('express');
const cfenv = require('cfenv');
const app = express();
const cors = require('cors');
const TestIP = require('./api/routes/TestIP');
const GetIP = require('./api/routes/GetIP');
const Health = require('./api/routes/Health');
const User = require('./api/routes/User');
var appEnv = cfenv.getAppEnv();
app.use(cors()); // allow cross origin request

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use('/api1/GetIP',GetIP);
app.use('/api1/TestIP',TestIP);
app.use('/api1/health',Health);
app.use('/api1/User',User);
module.exports =app;
app.listen(8080, '0.0.0.0', function () {
    console.log("server starting on " + 8080);    
 });
