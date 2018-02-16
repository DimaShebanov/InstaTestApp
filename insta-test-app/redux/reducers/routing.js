import { GO } from '../actions/routing';

const initialState = 'profile';

export default (state = initialState, action) => {
  let ret = state;
  ret = action.type === GO ? action.payload : state;
  return ret;
};
