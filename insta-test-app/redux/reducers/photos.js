import { ADD_PHOTO } from '../actions/photos';


const initialState = [
];

export default (state = initialState, action) => {
    let ret = state;
    switch (action.type) {
        case ADD_PHOTO:
            const lastID = state.length;
            ret = [
                ...state,
                {
                    uri : action.payload,
                    id : lastID
                }
            ];
    }
    return ret;
}
