const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
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


app.use(cookieParser());
app.use(bodyParser.json());
app.use(CORS())


app.use('/API', require('./router/activity_router'));



const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log('App is running on port: ' + PORT)
});
