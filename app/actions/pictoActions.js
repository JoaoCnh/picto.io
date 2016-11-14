export function reset(additional) {
    return function (dispatch) {
        dispatch({type: "RESET_CANVAS"});

        if (additional && additional.socket) {
            additional.socket.emit('clear canvas');
        }
    }
}

export function setColor(color, additional) {
    return function (dispatch) {
        dispatch({type: "SET_COLOR", payload: color});

        if (additional && additional.socket) {
            additional.socket.emit('color update', color);
        }
    }
}

export function press(event, canvas, additional) {
    return function (dispatch) {
        let rect = canvas.getBoundingClientRect();

        let mouseCoords = {
            mouseX: event.clientX - rect.left,
            mouseY: event.clientY - rect.top,
        };

        dispatch({type: "PRESS", payload: mouseCoords});

        if (additional && additional.socket) {
            additional.socket.emit('press', additional.picto);
        }
    }
}

export function drag(event, canvas, additional) {
    return function (dispatch) {
        let rect = canvas.getBoundingClientRect();

        dispatch({type: "DRAG", payload: {
            mouseX: event.clientX - rect.left,
            mouseY: event.clientY - rect.top,
            dragging: true,
        }});
    }
}

export function release(additional) {
    return function (dispatch) {
        dispatch({type: "RELEASE", payload: false});

        if (additional && additional.socket) {
            additional.socket.emit('release', additional.picto);
        }
    }
}

export function cancel() {
    return function (dispatch) {
        dispatch({type: "CANCEL", payload: false});
    }
}

export function changeTool(tool, additional) {
    return function (dispatch) {
        dispatch({type: "CHANGE_TOOL", payload: tool});

        if (additional && additional.socket) {
            additional.socket.emit('tool update', tool);
        }
    }
}

export function changeSize(size, additional) {
    return function (dispatch) {
        dispatch({type: "CHANGE_SIZE", payload: size});

        if (additional && additional.socket) {
            additional.socket.emit('size update', size);
        }
    }
}