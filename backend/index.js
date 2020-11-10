const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
// const passport = require('passport');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
// app.use(passport.initialize());
// app.use(passport.session());
// require('./server/passport') (app);

app.listen(3000);
