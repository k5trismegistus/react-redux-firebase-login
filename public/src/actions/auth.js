export const LOGIN_OK = 'LOGIN_OK'

export const loginOk = (user) => {
  return {
    type: LOGIN_OK,
    payload: {
      uid: user.uid,
      displayName: user.displayName,
    }
  }
}
