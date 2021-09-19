const express = require('express');
const app = express();
const cors = require('cors');
const operationRoute = require('./routes/OperationsRoutes.js');

const corsOptions = {
    origin: '*',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const myLogger = function (req, res, next) {
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    next();
};

app.use(myLogger);

app.get('/', function (req, res, next) {
    res.send({ version: 1.0 });
});

app.use('/', operationRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('app listening on port 5000');
});