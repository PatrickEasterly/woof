const express = require('express');
const router = express.router();
const bodyParser = require('body-parser');
const parseForm = bodyParser.urlencoded({
    extended: true
});


module.exports = router;