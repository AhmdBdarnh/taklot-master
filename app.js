require('dotenv').config();
const express = require('express');
const userRout = require('./router/usersRouter/users');
const rqeRout = require('./router/requestsRouter/request');
const TechRout = require('./router/technicalRouter/technical');
const offerRout = require('./router/offerRouter/offer');
const homeRout = require('./router/homePageRouter/home')
const feedbackRout = require('./router/feedbackRouter/feedback');
// const session = require('express-session');


const { connectDB } = require('./db/dbconnect');


const path = require('path');
 
// Constants
const app = express();
const port = process.env.PORT || 3000;
 
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;


app.set('view engine', 'ejs');


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
app.use(userRout);
app.use(rqeRout);
app.use(TechRout);
app.use(offerRout);
app.use(feedbackRout);
app.use(homeRout);




// connect to db
connectDB();



// // Use express-session middleware
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: true
// }));


app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});