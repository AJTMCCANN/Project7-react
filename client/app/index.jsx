import React from 'react';
import ReactDOM from 'react-dom';

var TWEETS = [
  {
    _id: 1,
    timestamp: 4,
    author_name: "Jill Spore",
    author_id: "@jillspore",
    avatar_img: "images/m-spore.png",
    text: "It's time I come clean about a few things: The pretzel is my favorite chip.",
    retweet_count: 75,
    like_count: 12,
  },
  {
    _id: 2,
    timestamp: 4,
    author_name: "Jill Spore",
    author_id: "@jillspore",
    avatar_img: "images/f-spore.png",
    text: "It's time I come clean about a few things: The pretzel is my favorite chip.",
    retweet_count: 75,
    like_count: 12,
  },
  {
    _id: 3,
    timestamp: 4,
    author_name: "Jill Spore",
    author_id: "@jillspore",
    avatar_img: "images/f-spore.png",
    text: "It's time I come clean about a few things: The pretzel is my favorite chip.",
    retweet_count: 75,
    like_count: 12,
  }
]

var FOLLOWED = [
  {
    _id: 1,
    user_name: "Jill Spore",
    user_id: "@jillspore",
    avatar_img: "images/f-spore.png",
  },
  {
    _id: 2,
    user_name: "Jimbob Magoo",
    user_id: "@jillspore",
    avatar_img: "images/f-spore.png",
  },
  {
    _id: 3,
    user_name: "Jill Spore",
    user_id: "@jillspore",
    avatar_img: "images/m-spore.png",
  }
]

var MESSAGES = [
  {
    _id: 1,
    avatar_img: "images/f-spore.png",
    text: "Wazzzup",
    timestamp: 3,
    origin: "app--message--me"
  },
  {
    _id: 2,
    avatar_img: "images/m-spore.png",
    text: "How are things?",
    timestamp: 3,
    origin: "app--message"
  },
  {
    _id: 3,
    avatar_img: "images/f-spore.png",
    text: "How are things?",
    timestamp: 9,
    origin: "app--message--me"
  }
]

var NUMBER_FOLLOWED = 42

var THIS_ACCOUNT = '@memyselfandI'

function PageHeader(pageheader_props) {
  return (
    <header className="circle--header">
      <div className="bounds">
        <div className="circle--fluid">
          <div className="circle--fluid--cell">
            <a className="logo" href="index.html">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 180 146" xmlSpace="preserve">
                <path d="M180,17.3c-6.6,2.9-13.7,4.9-21.2,5.8c7.6-4.6,13.5-11.8,16.2-20.4c-7.1,4.2-15,7.3-23.5,8.9C144.8,4.5,135.2,0,124.6,0
                c-20.4,0-36.9,16.5-36.9,36.9c0,2.9,0.3,5.7,1,8.4C58,43.7,30.8,29,12.5,6.7c-3.2,5.4-5,11.8-5,18.5C7.5,38.1,14.1,49.3,24,56
                c-6.1-0.2-11.7-1.8-16.7-4.6c0,0.2,0,0.3,0,0.5C7.2,69.7,20,84.6,36.9,88c-3.1,0.8-6.4,1.3-9.7,1.3c-2.4,0-4.7-0.2-6.9-0.7
                c4.7,14.6,18.3,25.3,34.5,25.6C42,124.1,26.1,130,8.8,130c-3,0-5.9-0.2-8.8-0.5C16.3,139.9,35.8,146,56.6,146
                c67.9,0,105.1-56.2,105.1-104.9c0-1.6,0-3.2-0.1-4.8C168.8,31.2,175,24.7,180,17.3z"/>
              </svg>
              <h1>{pageheader_props.this_account}</h1>
            </a>
          </div>
          <div className="circle--fluid--cell align-right">
            <nav>
              <ul className="circle--inline">
                <li><a>Sign Out</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

var MakeTweet = React.createClass({

  propTypes: {
  },

  handleChange: function() {
    this.setState({
      remaining_chars: 140 - document.getElementById('tweet-textarea').value.length
    })
  },

  getInitialState: function() {
    return {
      remaining_chars: 140
    }
  },

  handleClick: function() {
    console.log(document.getElementById('tweet-textarea').value)
  },

  render: function() {
    return(
      <div className="app--tweet">
        <form>
          <div className="circle--fluid">
            <div className="circle--fluid--cell circle--fluid--primary align-bottom app--tweet--post">
              <div className="app--avatar" style={{backgroundImage: 'url(images/m-spore.png)'}}>
                <img src="images/m-spore.png" />
              </div>

              <textarea className="circle--textarea--input" maxLength="140" placeholder="What's happening?" id="tweet-textarea" onChange={this.handleChange}></textarea>
              <strong className="app--tweet--char" id="tweet-char">{this.state.remaining_chars}</strong>
            </div>
            <div className="circle--fluid--cell align-bottom">
              <button className="button-primary" id="send-tweet-btn" onClick={this.handleClick}>Tweet</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
})

function AppHeader(appheader_props) {
  return(
    <div className="app--section--header">
      <div className="grid-33">
        <div className="app--section--heading">
          <h2>Timeline</h2>
        </div>

      </div>
      <div className="grid-33">
        <div className="app--section--heading">
          <strong>{appheader_props.number_followed}</strong>
          <h2>Following</h2>
        </div>
      </div>
      <div className="grid-33">
        <div className="app--section--heading">
          <h2>Direct Messages</h2>
        </div>
      </div>
    </div>
  )
}

AppHeader.propTypes = {
  number_followed: React.PropTypes.number
}

function Tweet(tweet_props) {

  return(
    <li>
      <strong className="app--tweet--timestamp">{tweet_props.timestamp + "h"}</strong>
      <a className="app--tweet--author">
        <div className="app--avatar" style={{backgroundImage: `url(${tweet_props.avatar_img})`}}>
          <img src={tweet_props.avatar_img} />
        </div>
        <h4>{tweet_props.author_name}</h4> {tweet_props.author_id}
      </a>
      <p>{tweet_props.text}</p>
      <ul className="app--tweet--actions circle--list--inline">
        <li>
          <a className="app--reply">
            <span className="tooltip">Reply</span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 38 28" xmlSpace="preserve">
              <path d="M24.9,10.5h-8.2V2.8c0-1.1-0.7-2.2-1.7-2.6c-1-0.4-2.2-0.2-3,0.6L0.8,12c-1.1,1.1-1.1,2.9,0,4L12,27.2
              c0.5,0.5,1.2,0.8,2,0.8c0.4,0,0.7-0.1,1.1-0.2c1-0.4,1.7-1.5,1.7-2.6v-7.7h8.2c3.3,0,6,2.5,6,5.6v1.3c0,2,1.6,3.5,3.5,3.5
              s3.5-1.6,3.5-3.5v-1.3C38,16.2,32.1,10.5,24.9,10.5z"/>
            </svg>
          </a>
        </li>
        <li>
          <a className="app--retweet">
            <span className="tooltip">Retweet</span>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 28" xmlSpace="preserve">
              <path d="M25.2,22.4H13.1v-9.3h4.7c1.1,0,2.2-0.7,2.6-1.7c0.4-1,0.2-2.3-0.6-3.1l-7.5-7.5c-1.1-1.1-2.9-1.1-4,0L0.8,8.3
              c-0.8,0.8-1,2-0.6,3.1c0.4,1,1.5,1.7,2.6,1.7h4.7v12.1c0,1.5,1.3,2.8,2.8,2.8h14.9c1.5,0,2.8-1.3,2.8-2.8
              C28,23.7,26.7,22.4,25.2,22.4z"/>
              <path d="M49.8,16.7c-0.4-1-1.5-1.7-2.6-1.7h-4.7V2.8c0-1.5-1.3-2.8-2.8-2.8H24.8C23.3,0,22,1.3,22,2.8s1.3,2.8,2.8,2.8h12.1v9.3
              h-4.7c-1.1,0-2.2,0.7-2.6,1.7c-0.4,1-0.2,2.3,0.6,3.1l7.5,7.5c0.5,0.5,1.3,0.8,2,0.8c0.7,0,1.4-0.3,2-0.8l7.5-7.5
              C50,18.9,50.2,17.7,49.8,16.7z"/>
            </svg>
            <strong>{tweet_props.retweet_count}</strong>
          </a>
        </li>
        <li>
          <a className="app--like">
            <span className="tooltip">Like</span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 28" xmlSpace="preserve">
              <path className="st0" d="M25.8,0c-3.6,0-6.8,2.1-8.3,5.1C16,2.1,12.9,0,9.2,0C4.1,0,0,4.1,0,9.2C0,21.4,17.3,28,17.3,28S35,21.3,35,9.2
              C35,4.1,30.9,0,25.8,0L25.8,0z"/>
            </svg>
            <strong>{tweet_props.like_count}</strong>
          </a>
        </li>
      </ul>
    </li>
  )
}

Tweet.propTypes = {
  _id: React.PropTypes.number,
  timestamp: React.PropTypes.number,
  author_name: React.PropTypes.string,
  author_id: React.PropTypes.string,
  avatar_img: React.PropTypes.string,
  text: React.PropTypes.string,
  retweet_count: React.PropTypes.number,
  like_count: React.PropTypes.number,
}

function TweetList(tweetlist_props) {
  return(
    <ul className="app--tweet--list">
      {tweetlist_props.tweets.map( function(tweet) {
        return <Tweet key={tweet._id} timestamp={tweet.timestamp}
          author_name={tweet.author_name} author_id={tweet.author_id}
          avatar_img={tweet.avatar_img} text={tweet.text} retweet_count={tweet.retweet_count}
          like_count={tweet.like_count} />
      })}
    </ul>
  )
}

TweetList.propTypes = {
  tweets: React.PropTypes.array
}

function User(user_props) {

  return(
    <li>
      <div className="circle--fluid">
        <div className="circle--fluid--cell circle--fluid--primary">
          <a className="app--tweet--author">
            <div className="app--avatar" style={{backgroundImage: `url(${user_props.avatar_img})`}}>
              <img src="images/f-spore.png" />
            </div>
            <h4>{user_props.user_name}</h4>
            <p>{user_props.user_id}</p>
          </a>
        </div>
        <div className="circle--fluid--cell">
          <a className="button button-text">Unfollow</a>
        </div>
      </div>
    </li>
  )
}

User.propTypes = {
  _id: React.PropTypes.number,
  user_name: React.PropTypes.string,
  user_id: React.PropTypes.string,
  avatar_img: React.PropTypes.string,
}

function UserList(userlist_props) {
  return(
    <ul className="app--user--list">
    {userlist_props.followed.map( function(user) {
      return <User key={user._id} user_name={user.user_name} user_id={user.user_id} avatar_img={user.avatar_img} />
    })}
    </ul>
  )
}

UserList.propTypes = {
  followed: React.PropTypes.array,
}

function Message(message_props) {
  return(
    <li className={message_props.origin}>
      <div className="app--avatar" style={{backgroundImage: `url(${message_props.avatar_img})`}}>
        <img src={message_props.avatar_img} />
      </div>
      <p className="app--message--text">{message_props.text}</p>
      <p className="app--message--timestamp">{message_props.timestamp} hours ago</p>
    </li>
  )
}

Message.propTypes = {
  _id: React.PropTypes.number,
  text: React.PropTypes.string,
  timestamp: React.PropTypes.number,
  avatar_img: React.PropTypes.string,
  origin: React.PropTypes.string
}

function MessageList(messagelist_props) {
  return(
    <ul className="app--message--list">
      <li>
        <h3>Conversation with <a>Jill Spore</a></h3>
        <ul className="app--message--conversation">
          {messagelist_props.messages.map( function(message) {
            return <Message key={message._id} text={message.text} timestamp={message.timestamp} avatar_img={message.avatar_img} origin={message.origin} />
          })}
        </ul>
      </li>

    </ul>
  )
}

MessageList.propTypes = {
  messages: React.PropTypes.array
}

function MainApp(main_app_props) {
  return (
    <div className="bounds app--body">
      <div className="grid-33">
        <div className="app--section">
          <TweetList tweets={main_app_props.tweets}/>
        </div>
      </div>
      <div className="grid-33">
        <div className="app--section">
          <UserList followed={main_app_props.followed}/>
        </div>
      </div>
      <div className="grid-33">
        <div className="app--section">
          <MessageList messages={main_app_props.messages}/>
        </div>
      </div>
    </div>
  )
}

MainApp.propTypes = {
  tweets: React.PropTypes.array,
  followed: React.PropTypes.array,
  messages: React.PropTypes.array
}

 function Application(app_props) {
  return (
    <div id="wrapper">

      <PageHeader this_account={app_props.this_account}/>

      <MakeTweet />

      <AppHeader number_followed={app_props.number_followed}/>

      <MainApp tweets={app_props.tweets} followed={app_props.followed} messages={app_props.messages}/>

  </div>
  )
}

Application.propTypes = {
  tweets: React.PropTypes.array,
  followed: React.PropTypes.array,
  messages: React.PropTypes.array,
  number_followed: React.PropTypes.number,
  this_account: React.PropTypes.string
}

ReactDOM.render(<Application tweets={TWEETS} followed={FOLLOWED} messages={MESSAGES} number_followed={NUMBER_FOLLOWED} this_account={THIS_ACCOUNT}/>, document.getElementById('app'))
