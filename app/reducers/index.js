import { combineReducers } from 'redux';

import app from './appReducer';
import picto from './pictoReducer';

export default combineReducers({
    app,
    picto,
});
