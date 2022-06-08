//External 
const express = require('express');

const router = express.Router();

//internal 
const {indexControler} = require('../controller/indexController');

//indexRouter
router.get('/', indexControler);

module.exports = router;