const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');


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

app.use(cors({
    credentials: true,
    origin: function (origin, callback) {
        callback (null, true)
    }
}));
app.use(cookieParser());
app.use(bodyParser.json());


app.use('/API', require('./router/activity_router'));

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log('App is running on port: ' + PORT)
});
