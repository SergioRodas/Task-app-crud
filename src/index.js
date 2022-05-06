import express from 'express';

const app = express();
import routes from './routes/index.routes';

import './database';

app.use(routes);

app.listen(3000);
console.log('Server on port ', 3000);
