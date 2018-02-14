import { GO } from '../actions/routing';

const initialState = 'photos';

export default (state = initialState, action) => {
  switch (action.type) {

  case GO:
    return action.payload;
  default:
    return state
  }
}
