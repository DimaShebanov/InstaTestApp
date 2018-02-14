import { ADD_PHOTO } from '../actions/photos';


const initialState = [
    'some photo maybe?'
];

export default (state = initialState, action) => {
  
    switch (action.type) {
        case ADD_PHOTO:
            return [...state, action.payload];

        default:
            return state;
  }
}
