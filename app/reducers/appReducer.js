export default function reducer(state = {
      username: localStorage.getItem('__pictoUser'),
      currentUsers: [],
      currentPlayingUser: null,
}, action) {
    switch (action.type) {
        case "SET_USERNAME": {
          return {...state, username: action.payload};
        }
    }

    return state;
}
