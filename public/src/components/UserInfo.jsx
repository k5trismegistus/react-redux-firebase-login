import React, { Component } from 'react'

export default class UserInfo extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Hello, {this.props.displayName}
        <button onClick={this.props.doLogout}>Logout</button>
      </div>
    )
  }
}
