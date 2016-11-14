export function updateMessage(message) {
    return function (dispatch) {
        dispatch({type: "UPDATE_MESSAGE", payload: message});
    }
}

export function sendingMessage() {
    return function (dispatch) {
        dispatch({type: "SENDING_MESSAGE"});
    }
}

export function sendMessage(message, additional) {
    return function (dispatch) {
        dispatch({type: "SEND_MESSAGE", payload: message});
    }
}

export function messageError() {
    return function (dispatch) {
        dispatch({type: "MESSAGE_ERROR"});
    }
}