const express = require('express');
const app = express();
const path = require('path');
const logEvents = require('./logEvents')

const PORT = process.env.PORT || 3500;


app.use(express.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname)));

app.use(express.json());

app.use(( req, res, next ) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
    console.log(`${req.method}\t${req.path}`);
    next();
});







app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));