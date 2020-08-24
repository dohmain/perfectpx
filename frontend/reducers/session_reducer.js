import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const defaultState = { id: null };

export default (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return Object.assign({}, state, { id: action.user.users.id });
      
    case LOGOUT_CURRENT_USER:
      return defaultState;
      
    default:
      return state;
  }
};
