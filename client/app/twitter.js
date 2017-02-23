var Twit = require('twit')

var T = new Twit({
  consumer_key: 'ErItWq3KhzTEmqvnYDxiBTJ7g',
  consumer_secret: 'm1ax8apQAqBNe1vjFk4AlaI0ZNwyDarJ4upMN5s5S1rPjagVWd',
  access_token: '15727386-6i1rIosOyq8lGYmTWDitTU6Y51yFfdjlHxeeG8qdd',
  access_token_secret: 'CgDtN0Qw15TVxGrACTcSGZO8cOmegYAwIIkoeO4jpl9u7'
});

function get_friends_count() {
  T.get('users/show', {user_id: 15727386}, function(error, user, response) {
    if (error) {console.error(error)}
    console.log(user.friends_count)
    return user.friends_count
  });
}

// get_friends_count()

function get_direct_messages_to_me() {
  T.get('direct_messages', {count: 5}, function(error, messages, response) {
    if (error) {console.error(error)}
    var msgs = messages.map( function(message, index) {
      var new_msg = {}
      new_msg._id = index
      new_msg.avatar_img = message.sender.profile_image_url
      new_msg.text = message.text
      new_msg.timestamp = message.created_at
      new_msg.origin = "app--message"
      return new_msg
    })
    console.log(msgs)
    return msgs
  })
}

// get_direct_messages_to_me()

function get_direct_messages_from_me() {
    T.get('direct_messages/sent', {count: 5}, function(error, messages, response) {
      if (error) {console.error(error)}
      var msgs = messages.map( function(message, index) {
        var new_msg = {}
        new_msg._id = index
        new_msg.avatar_img = message.sender.profile_image_url
        new_msg.text = message.text
        new_msg.timestamp = message.created_at
        new_msg.origin = "app--message--me"
        return new_msg
      })
      console.log(msgs)
      return msgs
    })
}

// get_direct_messages_from_me()

function get_friends() {
  T.get('friends/list', {count: 5}, function(error, friends, response) {
    if (error) {console.error(error)}
    var frnds = friends.users.map( function(friend, index) {
      var new_friend = {}
      new_friend._id = index
      new_friend.user_name = friend.name
      new_friend.user_id = "@" + friend.screen_name
      new_friend.avatar_img = friend.profile_image_url
      return new_friend
    })
    console.log(frnds)
    return frnds
  })
}

// get_friends()

function get_tweets() {
  T.get('statuses/user_timeline', {count: 5}, function(error, tweets, response) {
    if (error) {console.error(error)}
    var twts = tweets.map( function(tweet, index) {
      var new_tweet = {}
      new_tweet._id = index
      new_tweet.timestamp = tweet.created_at
      new_tweet.author_name = tweet.user.name
      new_tweet.user_id = "@" + tweet.user.screen_name
      new_tweet.avatar_img = tweet.user.profile_image_url
      new_tweet.text = tweet.text
      new_tweet.retweet_count = tweet.retweet_count
      new_tweet.like_count = tweet.favorite_count
      return new_tweet
    })
    console.log(twts)
    return twts
  })
}


// get_tweets()
