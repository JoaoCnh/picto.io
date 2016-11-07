export default function reducer(state = {
    canvas: null,
    context: null,
    paint: false,
    clickX: new Array(),
    clickY: new Array(),
    clickDrag: new Array(),
    clickColor: new Array(),
    clickSize: new Array(),
    currentColor: "#000",
    currentSize: "normal",
    availableColors: [
        "#000000",
        "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3",
        "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39",
        "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b",
    ],
}, action) {
    switch (action.type) {
        case "INIT": {
          return {...state, canvas: action.payload.canvas, context: action.payload.context};
        }

        case "RESET_CANVAS": {
            return {...state, clickX: [], clickY: [], clickDrag: [], clickColor: [], clickSize: []};
        }

        case "SET_COLOR": {
            return {...state, currentColor: action.payload};
        }

        case "DRAG":
        case "PRESS": {
            return {...state, paint: true,
                clickX: [...state.clickX, action.payload.mouseX],
                clickY: [...state.clickY, action.payload.mouseY],
                clickDrag: [...state.clickDrag, action.payload.dragging],
                clickColor: [...state.clickColor, state.currentColor],
                clickSize: [...state.clickSize, state.currentSize],
            };
        }

        case "CANCEL":
        case "RELEASE": {
            return {...state, paint: action.payload};
        }
    }

    return state;
}
