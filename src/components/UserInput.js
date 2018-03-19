import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      hometown: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleHometownChange = this.handleHometownChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(ev){
    this.setState({
      username: ev.target.value
    })
  }

  handleSubmit(ev){
    ev.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER', user: {username: this.state.username, hometown: this.state.hometown}})
  }

  handleHometownChange(ev){
    this.setState({
      hometown: ev.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input name="username" onChange={this.handleUsernameChange} value={this.state.username}/>
        <input name="hometown" onChange={this.handleHometownChange} value={this.state.hometown} type="text"/>
        <button></button>
      </form>
    );
  }
};

export default UserInput;
