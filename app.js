const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const PORT = process.env.PORT || 3030;
const CORS = require('cors');


const DB = process.env.DBURL ? process.env.DBURL : "mongodb://localhost/freely"

mongoose.connect(
    DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            console.log("Error: " + err);
        } else {
            console.log("Connected to database: " + DB);
        }
    }
);

app.use(CORS({
    credentials: true,
    origin: function (origin, callback) {
        callback (null, true)
    }
}));

app.use(cookieParser());
app.use(bodyParser.json());

app.use(session({
    secret: "freely auth",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

// Passport / Auth

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());


// Routes

app.use('/API/auth', require('./router/auth_routes'));
app.use('/API/activities', require('./router/activity_router'));
app.use("/API/students", require('./router/student_router'));


app.listen(PORT, () => {
    console.log('App is running on port: ' + PORT)
});
