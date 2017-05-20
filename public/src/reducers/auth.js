const initialState = {
  uid: null,
  displayName: null
}

const auth = (state=initialState, action) => {
  switch (action.type) {
    case "LOGIN_OK": {
      return Object.assign({}, state, {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        email: action.payload.email
      })
    }

    case 'LOGOUT': {
      return Object.assign({}, state, {
        uid: null,
        displayName: null,
        email: null
      })
    }

    default: {
      return state
    }
  }
}

export default auth
