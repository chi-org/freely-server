const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json());


const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log('App is running on port: ' + PORT)
});
