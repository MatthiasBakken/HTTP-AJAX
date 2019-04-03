import React, { Component } from 'react';
import axios from 'axios';

import './Friends.css';

class Friends extends Component {
  state = {
    friends: [],
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        console.log(res.data)
        this.setState({
          friends: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.friends)
    const { friends } = this.state
    return (
      <div className="friend-container" >
        {friends.map(friend => (
          <div key={friend.id} className="friend-card">
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <h2>{friend.email}</h2>
          </div>
        ))}
      </div>
    )
  }

}

export default Friends;