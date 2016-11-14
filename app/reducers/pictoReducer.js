export default function reducer(state = {
    paint: false,
    clickX: new Array(),
    clickY: new Array(),
    clickDrag: new Array(),
    clickColor: new Array(),
    clickSize: new Array(),
    currentColor: "#000",
    currentSize: "normal",
    currentTool: "pen",
    availableColors: [
        "#000000",
        "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3",
        "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39",
        "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b",
    ],
}, action) {
    switch (action.type) {
        case "RESET_CANVAS": {
            return {...state, clickX: [], clickY: [], clickDrag: [], clickColor: [], clickSize: []};
        }

        case "SET_COLOR": {
            return {...state, currentColor: action.payload, currentTool: 'pen'};
        }

        case "DRAG":
        case "PRESS": {
            return {...state, paint: true,
                clickX: [...state.clickX, action.payload.mouseX],
                clickY: [...state.clickY, action.payload.mouseY],
                clickDrag: [...state.clickDrag, action.payload.dragging],
                clickColor: [
                    ...state.clickColor,
                    state.currentTool === 'eraser' ? '#fff' : state.currentColor
                ],
                clickSize: [...state.clickSize, state.currentSize],
            };
        }

        case "CANCEL":
        case "RELEASE": {
            return {...state, paint: action.payload};
        }

        case "CHANGE_TOOL": {
            return {
                ...state,
                currentTool: action.payload,
            };
        }

        case "CHANGE_SIZE": {
            return {
                ...state,
                currentSize: action.payload,
            };
        }

        case "BROAD_UPDATE": {
            return {
                ...state,
                paint: action.payload.paint,
                clickX: action.payload.clickX,
                clickY: action.payload.clickY,
                clickDrag: action.payload.clickDrag,
                clickColor: action.payload.clickColor,
                clickSize: action.payload.clickSize,
            };
        }
    }

    return state;
}
