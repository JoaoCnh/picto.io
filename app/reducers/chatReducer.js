export default function reducer(state = {
    messages: [],
    error: false,
    currentMessage: '',
    sendingMessage: false,
}, action) {
    switch (action.type) {
        case "UPDATE_MESSAGE": {
            return {
                ...state,
                currentMessage: action.payload,
            };
        }

        case "SENDING_MESSAGE": {
            return {
                ...state,
                sendingMessage: true,
            };
        }

        case "SEND_MESSAGE": {
            return {
                ...state,
                currentMessage: '',
                error: false,
                sendingMessage: false,
                messages: [...state.messages, action.payload],
            };
        }

        case "NEW_MESSAGE": {
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        }

        case "MESSAGE_ERROR": {
            return {
                ...state,
                error: true,
            };
        };
    }

    return state;
}
