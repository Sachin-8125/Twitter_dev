const express =  require('express');
const connect = require('./config/database');

const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000,async() => {
    console.log('Server started');
    await connect();
    console.log('Mongodb started');
    // const tweet = await Tweet.create({
    //     content: 'Third tweet'
    // });
    //const tweets = await Tweet.find({userEmail:'sachin@1.com'});
   const tweetRepo = new TweetRepository();
   const tweet  =await tweetRepo.getWithComments('66e55247b75c47572df94ac4');
   console.log(tweet);

});