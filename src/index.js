import express from 'express';
import bodyParser from 'body-parser';
import  Passport  from 'passport';

import {connect} from './config/database.js';
import { passportAuth } from './config/jwt-middleware.js';

import apiRoutes from './routes/index.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(Passport.initialize());
passportAuth(Passport);

app.use('/api',apiRoutes);


app.listen(3000,async() => {
    console.log('Server started');
    await connect();
    console.log('Mongodb started');
});