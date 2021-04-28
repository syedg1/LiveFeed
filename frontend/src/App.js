import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import LiveFeed from './LiveFeed.js';
import Analytics from './Analytics.js';
import './App.css';

// Install the socket io client using:
//    npm install socket.io
//
// Then import socket io and create a socket:
//
import io from 'socket.io-client';
console.log(process.env.NODE_ENV);
var API = process.env.NODE_ENV === 'production' ? 'https://live-updates-feed-backend.herokuapp.com' : 'http://localhost:3001';
const socket = io(API);
//
// See: https://socket.io/get-started/chat
//      https://www.npmjs.com/package/socket.io-client


class App extends React.Component {

  constructor(props) {
    super(props);

    // An array of social media posts messages, and we'll increment nextID
    // to maintain a unique ID for each post in our array
    this.state = {posts: [],nextID: 0};

    // We can setup the event handlers for the messages in the constructor...
    socket.on('connect', function(){

      console.log("Connect....");

      // When we receive a social media message, call setState and insert 
      // it into the array of posts
      socket.on('post', 

        function(data) {

          // Can uncomment this to see the raw data coming in...
          // console.log("post: " + JSON.stringify(data));

          // increment the next unique ID, and put post data into the list of 
          // posts... use the '...' syntax to make this insertion easier:
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
          this.setState( 
            {posts: [...this.state.posts,
                     {name: data.name, 
                      image: data.image, 
                      content: data.content, 
                      problem: data.problem,
                      priority: data.priority,
                      id: this.state.nextID}]
            ,nextID: this.state.nextID + 1} );
        }.bind(this));
        // ^^ Like other event handlers, we bind the callback function to the 
        // component so we can use setState        

    }.bind(this));
    // ^^ ... And same with the callback function for when a connection is made

  }

  
  // Output all the posts into a table
  render() {
    return (
      <div>      
        <Router>
          <Switch>
            <Route path='/livefeed'>
              <LiveFeed posts={this.state.posts} />
            </Route>
            <Route path='/analytics'>
              <Analytics posts={this.state.posts} />
            </Route>
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>          
        </Router>
      </div>
    );
  }
}

export default App;
