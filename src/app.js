import express from 'express';
import { create } from 'express-handlebars';
import routes from './routes/index.routes';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// app.set('views', path.join(__dirname, 'views'));

// const exphbs = create({
//     layoutsDir: path.join(app.get('views'), 'layouts'),
//     partialsDir: path.join(app.get('views'), 'partials'),
//     defaultLayout: 'main',
//     extname: '.hbs',
// });

// app.engine('.hbs', exphbs.engine);
// app.set('view engine', '.hbs');

import './database';

app.use(routes);

export default app;