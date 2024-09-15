const express =  require('express');
const connect = require('./config/database');
const app = express();

//const HashtagRepository = require('./repository/hashtag-repository');
const {TweetRepository} = require('./repository/index');
const TweetService = require('./services/tweet-service');

app.listen(3000,async() => {
    console.log('Server started');
    await connect();
    console.log('Mongodb started');
});