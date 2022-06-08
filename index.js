//External Imports

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

//Internal Imports
const indexRouter = require('./router/indexRouter');
const adminRouter = require('./router/adminRouter');
const doctorRouter = require('./router/doctorRouter');
const patientRouter = require('./router/patientRouter');
const {notFoundHandler, errorHandler} = require('./middlewares/common/errorHandler');

//Database Connections
mongoose.connect(process.env.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database Connected')).catch((error) => console.log("Database Error" + error));


//requst Parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//view engine
app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));

//set static folder
app.use('/public',express.static('public'));
app.use('/dist', express.static('dist'));
app.use('/js', express.static('js'));
app.use('/stylesheets', express.static('stylesheets'));
// app.use(express.static(path.join(__dirname, "js")));
// app.use(express.static(path.join(__dirname, "stylesheets")));

//parse cooke
app.use(cookieParser(process.env.cookie_secret));

//Routes
app.use('/', indexRouter);
app.use('/doctor', doctorRouter);
app.use('/admin', adminRouter);
app.use('/patient', patientRouter);

//404 not found
app.use(notFoundHandler);

//Errors
app.use(errorHandler);



//Server Connections
app.listen(process.env.port, ()=> {
    console.log(`Listening on Port ${process.env.port}`);
});
