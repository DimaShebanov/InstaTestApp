import { combineReducers } from 'redux';
import photos from './photos';
import profile from './profile';
import routing from './routing';

export default combineReducers({
    photos,
    routing,
    profile
});
