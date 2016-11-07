export function init(username) {
    return function (dispatch) {
        let canvas = document.getElementById('picto');
        dispatch({type: "INIT", payload: {
            canvas: canvas,
            context: canvas.getContext('2d'),
        }});
    }
}

export function reset() {
    return function (dispatch) {
        dispatch({type: "RESET_CANVAS"});
    }
}

export function setColor(color) {
    return function (dispatch) {
        dispatch({type: "SET_COLOR", payload: color});
    }
}

export function press(event, canvas, additional) {
    return function (dispatch) {
        dispatch({type: "PRESS", payload: {
            mouseX: event.pageX - canvas.offsetLeft,
            mouseY: event.pageY - canvas.offsetTop,
        }});
    }
}

export function drag(event, canvas, additional) {
    return function (dispatch) {
        dispatch({type: "DRAG", payload: {
            mouseX: event.pageX - canvas.offsetLeft,
            mouseY: event.pageY - canvas.offsetTop,
            dragging: true,
        }});
    }
}

export function release() {
    return function (dispatch) {
        dispatch({type: "RELEASE", payload: false});
    }
}

export function cancel() {
    return function (dispatch) {
        dispatch({type: "CANCEL", payload: false});
    }
}