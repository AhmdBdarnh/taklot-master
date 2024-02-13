require('dotenv').config();
const express = require('express');
const rout = require('./router/usersRouter/usersRouter');
const { connectDB } = require('./db/dbconnect');
const ejs = require('ejs');


// constans
const app = express();
const port = process.env.PORT || 3000;

module.exports = app;


app.set('view engine', 'ejs');


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
app.use(rout);

//



// connect to db
connectDB();

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});