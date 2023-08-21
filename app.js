const express = require("express");
const morgan = require('morgan');
const router = require('./routes/routes');
const app = express();

app.use(express.json());
app.use('/', router);
app.use(morgan('tiny'));


app.listen(3000, () => {
    console.log(`Server is running`);
})
