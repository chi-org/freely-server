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



mongoose.connect(
    process.env.DBURL ? process.env.DBURL : "mongodb://localhost/freely",
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            console.log("Error: " + err);
        } else {
            console.log("Connected to database");
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
    secret: "Express is awesome",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());


// ALL ROUTES BELOW PLEASE


app.use('/API/auth', require('./router/auth_routes'));
app.use('/API', require('./router/activity_router'));

// TEST ROUTE
app.get('/', (req, res) => {
    console.log('get on /');
    console.log('req.session', req.session)
    console.log('req.user', req.user)
    res.send('got your request');
})


app.listen(PORT, () => {
    console.log('App is running on port: ' + PORT)
});
