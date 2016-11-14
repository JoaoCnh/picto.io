export default function reducer(state = {
    socket: null,
    username: localStorage.getItem('__pictoUser'),
    currentUsers: [],
}, action) {
    switch (action.type) {
        case "INIT": {
            return {
                ...state,
                socket: action.payload.socket,
                username: action.payload.username,
                currentUsers: [...state.currentUsers, action.payload],
            };
        }

        case "SET_USERNAME": {
            return {
                ...state,
                username: action.payload.username,
                socket: action.payload.socket,
                currentUsers: [...state.currentUsers, action.payload],
            };
        }

        case "NEW_USER": {
            return {
                ...state,
                currentUsers: [...state.currentUsers, action.payload],
            };
        }

        case "USER_LEFT": {
            let userIndex = state.currentUsers.indexOf(action.payload);

            return {
                ...state,
                currentUsers: [
                    ...state.currentUsers.slice(0, userIndex),
                    ...state.currentUsers.slice(userIndex + 1)
                ],
            };
        }
    }

    return state;
}
