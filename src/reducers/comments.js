import { SAVE_COMMENT, DELETE_COMMENT, FETCH_COMMENTS } from "../actions/types";

export default (state = [], action) => {
  switch(action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case DELETE_COMMENT:
      return state;
    case FETCH_COMMENTS:
      return [...state, ...action.payload]
    default:
      return state;
  }
}