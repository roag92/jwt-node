const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(bodyParser.json());

app.use(require('./middleware/auth'));

app.use(require('./routes/home'));
app.use(require('./routes/login'));
app.use(require('./routes/refresh'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
