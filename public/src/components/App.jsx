import React, { Component } from 'react'

import UserInfoContainer from '../containers/UserInfoContainer'
import AuthContainer from '../containers/AuthContainer'
import { firebaseApp } from '../firebase'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        { this.props.uid ? <UserInfoContainer /> : <AuthContainer /> }
      </div>
    )
  }
}
