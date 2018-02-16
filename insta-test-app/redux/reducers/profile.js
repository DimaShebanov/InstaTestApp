import { EDIT_USER } from '../actions/profile';


const initialState = {};

export default (state = initialState, action) => {
    let ret = state;
    if ( action.type === EDIT_USER ) {
        ret = { ...action.payload };
        console.log(ret);
    }
    return ret;
};
