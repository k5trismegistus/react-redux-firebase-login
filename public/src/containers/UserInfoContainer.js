import firebase from 'firebase'
import { connect } from 'react-redux'
import UserInfo from '../components/UserInfo'

const mapStateToProps = (state) => {
  return {
    uid: state.auth.uid,
    displayName: state.auth.displayName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doLogout: () => {
      dispatch({type: 'LOGOUT'})
    }
  }
}

const UserInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo)

export default UserInfoContainer
