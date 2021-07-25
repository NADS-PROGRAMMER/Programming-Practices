"use strict";

// Constructor syntax
function PersonalInfo(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
}

function Tweet(tweet) {

    this.tweet = tweet;
    this.retweets = 0;
    this.likes = 0;
    this.comments = [];
}

function TwitterAccount(PersonalInfo, username, password) {

    this.PersonalInfo = PersonalInfo;
    this.username = username;
    this.password = password;
    this.following = [];
    this.followers = [];
    this.tweets = [];
    this.follow = (Following) => {

        // Check if this account currently following the another account.
        if (this.following.includes(Following, 0))
            return;

        this.following.push(Following.PersonalInfo['firstName']);
    }
    // This is the method for liking a tweet.
    this.likeTweet = (Tweet) => {

        Tweet.likes++;
    }
    // This is the method for retweeting a tweet.
    this.retweet = (Tweet) => {

        Tweet.retweets++;
    }
    // This is the method for commenting to a specific tweet.
    this.comment = (Tweet, yourComment, from) => {

        if (String(yourComment).length > 0)
            Tweet['comments'].push(from['username'] + ": " + yourComment);
    }
}

// Here is the creation of user and twiter accounts.
const user = new PersonalInfo('Adrian', 'Marcelo');
const twitter1 = new TwitterAccount(user, "@nads", "*********");
const user2 = new PersonalInfo('Mikaela', 'Dizon');
const twitter2 = new TwitterAccount(user2, "@miks", "**********");

// Tweets for first twitter account.
const tweet1 = new Tweet("My First Tweet");
const tweet2 = new Tweet('Javascript Objects!');

twitter1.tweets.push(tweet1); // this is my first tweet.
twitter1.tweets.push(tweet2);

// Second twitter account like and comment the tweets of first twitter account.
twitter2.likeTweet(tweet1);
twitter2.comment(tweet1, "Hello! Welcome to Twitter", twitter2);

// Output
console.log("Username: " + twitter1.username);
console.log('Tweets: ', twitter1.tweets);
console.log('First Tweet Info: ', "\nTWEET: " + twitter1.tweets[0]['tweet'] , "\nLIKES: " + twitter1.tweets[0]['likes'], "\nRETWEETS: " + twitter1.tweets[0]['retweets'], "\nCOMMENTS: " + twitter1.tweets[0]['comments']);
