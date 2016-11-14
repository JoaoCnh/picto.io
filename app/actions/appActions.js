import NotificationAPI from '../util/notifications';
import DrawAPI from '../util/draw';

export function init() {
    return function (dispatch) {
        let username = localStorage.getItem('__pictoUser');

        dispatch({type: "INIT", payload: {
            username: username,
            socket: initSocket(dispatch, {username: username}),
        }});
    }
}

export function setUsername(username) {
    return function (dispatch) {
        localStorage.setItem('__pictoUser', username);
        dispatch({type: "SET_USERNAME", payload: {
            username: username,
            socket: initSocket(dispatch, {username: username}),
        }});
    }
}

function initSocket(dispatch, params) {
    let socket = io.connect('', {query: `username=${params.username}`});

    socket.on('new user', (username) => {
        NotificationAPI.notify('New User', `${username} has entered the lobby`);
        dispatch({type: "NEW_USER", payload: username});
    });

    socket.on('user left', (username) => {
        dispatch({type: "USER_LEFT", payload: username});
    });

    socket.on('clear canvas', () => {
        dispatch({type: "RESET_CANVAS"});
    });

    socket.on('color update', (color) => {
        dispatch({type: "SET_COLOR", payload: color});
    });

    socket.on('tool update', (tool) => {
        dispatch({type: "CHANGE_TOOL", payload: tool});
    });

    socket.on('size update', (size) => {
        dispatch({type: "CHANGE_SIZE", payload: size});
    });

    socket.on('press', (picto) => {
        dispatch({type: "BROAD_UPDATE", payload: picto});
        DrawAPI.reDraw({
            clickX: picto.clickX,
            clickY: picto.clickY,
            clickSize: picto.clickSize,
            clickDrag: picto.clickDrag,
            clickColor: picto.clickColor,
        });
    });

    socket.on('release', (picto) => {
        dispatch({type: "BROAD_UPDATE", payload: false});
        DrawAPI.reDraw({
            clickX: picto.clickX,
            clickY: picto.clickY,
            clickSize: picto.clickSize,
            clickDrag: picto.clickDrag,
            clickColor: picto.clickColor,
        });
    });

    socket.on('chat message', (message) => {
        dispatch({type: "NEW_MESSAGE", payload: message});
    });

    return socket;
}