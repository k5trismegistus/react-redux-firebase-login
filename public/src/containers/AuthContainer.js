import firebase from 'firebase'
import { connect } from 'react-redux'
import Auth from '../components/Auth'

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: () => {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
    },
    refLogin: () => {
      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          return
        }
        dispatch({
          type: "AUTH_OK",
          payload: {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid
          }
        })
      })
    }
  }
}

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)

export default AuthContainer
