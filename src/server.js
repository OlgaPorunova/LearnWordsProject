import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import indexRouter from './routes/indexRouter';
import userRouter from './routes/userRouter';
import jsxRender from './utils/jsxRender';
import progRouter from './routes/progRouter';
import newRouter from './routes/newRouter';
import thems from './routes/thems';
import cardsRouter from './routes/cardsRouter';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use(express.json({ extended: true }));

app.use('/lk', progRouter);
app.use('/newForm', newRouter);

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.email = req.session?.user?.email;
  res.locals.name = req.session?.user?.name;
  next();
});

app.use(express.json({ extended: true }));

app.use('/user', userRouter);
app.use('/', indexRouter);
app.use('/cards', cardsRouter);
app.use('/thems', thems);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
