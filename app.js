const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
const sampleRoutes = require('./routes/sampleRoutes.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/', sampleRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});