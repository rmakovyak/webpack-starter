import { MAKE_BARK } from '../actions/action';

const initialState = {
  hasBarked: false
}

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_BARK:
      return {hasBarked: action.payload}
    default:
      return state;
  }
}

export default dogReducer;
