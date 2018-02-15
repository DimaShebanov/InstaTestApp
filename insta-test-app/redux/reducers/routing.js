import { GO } from '../actions/routing';

const initialState = 'photos';

export default (state = initialState, action) => {
  let ret = state;
  ret = action.type === GO ? action.payload : state;
  return ret;
}
