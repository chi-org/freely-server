const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const passport = require('passport')
const authRouter = require('./router/auth_routes');


mongoose.connect(
    "mongodb://localhost/freely",
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            console.log("Error: " + err);
        } else {
            console.log("Connected to database");
        }
    }
);


app.use(cookieParser());
app.use(bodyParser.json());


app.use('/API', require('./router/activity_router'));

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 3030;


app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log('App is running on port: ' + PORT)
});
