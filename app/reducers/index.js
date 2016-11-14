import { combineReducers } from 'redux';

import app from './appReducer';
import picto from './pictoReducer';
import chat from './chatReducer';

export default combineReducers({
    app,
    picto,
    chat,
});
