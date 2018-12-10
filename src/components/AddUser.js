import React, { Component } from 'react'

export default class AddUser extends Component {

    state = {
        firstName: '',
        lastName: '',
        username: '',
        userExists: false,
    }

    checkUserExist = (currUsername) => {
        const users=this.props.users;
        for (let user of users) {
            if (user.username === currUsername) {
              return true;
            }
          }
          return false;
    }



    handleOnChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        })
    }
  
    clearInputs = () => {
        this.setState({
            firstName: '',
            lastName: '',
            username: ''
    })
    }

    fieldsEmpty = () => {
        const { firstName, lastName, username } = this.state
        if (
            firstName === '' || lastName === '' || username === ''
        ) return true
        else return false
    }

    addUser = event => {
        event.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
        }
        const userExists = this.checkUserExist(this.state.username);

        if (!userExists) {
            this.props.onAddUser(user);
            this.clearInputs();
          }
      
          this.setState(() => ({
            userExists,
          }));


        }

  render() {

    const { firstName, lastName, username, userExists} = this.state;


    return (
      <div>
        <h2>Add New User</h2>


        <form onSubmit={this.addUser}>

        <input
        name='firstName'
        type='text'
        placeholder='First Name'
        value={firstName}
        onChange={this.handleOnChange}
        />
        <input
        name='lastName'
        type='text'
        placeholder='Last Name'
        value={lastName}
        onChange={this.handleOnChange}
        />
        <input
        name='username'
        type='text'
        placeholder='Username'
        value={username}
        onChange={this.handleOnChange}
        />

        <button disabled={this.fieldsEmpty()}>Add User</button>
        { userExists ? <p style={{color: 'red'}}>Username Exist!</p> : ''}
        </form>

      </div>
    )
  }
}
