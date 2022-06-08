//External 
const express = require('express');

const router = express.Router();

//internal 
const {patientControler} = require('../controller/patientController');

//indexRouter
router.get('/', patientControler);

module.exports = router;