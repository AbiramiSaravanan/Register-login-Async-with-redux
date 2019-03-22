const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');
//const cookieparser = require('cookie-parser');
const users = require('./route/api/users');
//app.use(cookieparser());

app.use(bodyParser.urlencoded({ extended:false}));

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true }, (err, database) => {
    if(err)
        return console.error(err);

    const port = 5000;

    app.listen(port, () => console.log(`Listening on port ${port}`));

});

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);




