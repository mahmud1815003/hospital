//External 
const express = require('express');

const router = express.Router();

//internal 
const {doctorControler} = require('../controller/doctorController');

//indexRouter
router.get('/', doctorControler);

module.exports = router;