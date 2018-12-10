import React, { Component } from 'react';
import User from './User';

export default class UserList extends Component {
  state = {
    showGamesPlayed: false
  };

  toggleShowGamesPlayed = () => {
    this.setState(prevState => ({
      showGamesPlayed: !prevState.showGamesPlayed
    }));
  };

  render() {
    const users = this.props.users;
    const showGamesPlayed = this.state.showGamesPlayed;
    const toggleShowGamesPlayed = this.toggleShowGamesPlayed;

    return (
      <div>
        <h1>User List</h1>
        <div>
            <button
            className='showGamesButton'
            onClick={toggleShowGamesPlayed}>
          {showGamesPlayed
            ? `Hide the number of games played`
            : `Show the number of games played`}
        </button>
        </div>
        <ol>
          {users.map(user => (
            <User
              key={user.username}
              username={user.username}
              numGamesPlayed={user.numGamesPlayed}
              showGamesPlayed={showGamesPlayed}
            />
          ))}
        </ol>
      </div>
    );
  }
}
