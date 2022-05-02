const express = require('express');

const app = express();
const routes = require('./routes/index.routes');

require('./database');

app.use(routes);

app.listen(3000);
console.log('Server on port ', 3000);
