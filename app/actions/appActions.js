export function setUsername(username) {
    return function (dispatch) {
        localStorage.setItem('__pictoUser', username);
        dispatch({type: "SET_USERNAME", payload: username});
    }
}
