import express from 'express';

const app = express();
import routes from './routes/index.routes';

import './database';

app.use(routes);

export default app;