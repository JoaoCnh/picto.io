export default function reducer(state = {
      username: localStorage.getItem('__pictoUser'),
      currentUsers: [],
      //languages: {
        //byRepo: {},
      //},
      currentPlayingUser: null,
}, action) {
    switch (action.type) {
        case "SET_USERNAME": {
          return {...state, username: action.payload};
        }
    }

    return state;
}
