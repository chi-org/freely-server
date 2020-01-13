const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');




mongoose.connect(
    process.env.NODE_ENV ? process.env.DBURL : "mongodb://localhost/freely",
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



const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log('App is running on port: ' + PORT)
});
