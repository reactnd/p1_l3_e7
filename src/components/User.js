import React, { Component } from 'react'

export default class User extends Component {
  render() {
      const username = this.props.username;
      const numGamesPlayed = this.props.numGamesPlayed;
      const showGamesPlayed = this.props.showGamesPlayed;
    return (
      <li>
          <span style={{color:'black'}}>{username}</span> played <span style={{color:'black'}}>{ showGamesPlayed ? numGamesPlayed : '*'}</span> games           
      </li>
    )
  }
}
