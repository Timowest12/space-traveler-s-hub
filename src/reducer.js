const initState = [];
const rocketsReducer = (state = initState, action) => {
  if (action.type === 'FETCH_ROCKETS') {
    return action.payload;
  }
  if (action.type === 'RESERVE_ROCKET') {
    state.map((elem) => {
      if (elem.id === action.payload) {
        elem.reserved = true;// eslint-disable-line no-param-reassign
      }
      return elem;
    });
    return state;
  }
  if (action.type === 'CANCEL_RESERVATION') {
    state.forEach((element) => {
      if (element.id === action.payload) {
        element.reserved = false;// eslint-disable-line no-param-reassign
      }
    });
    return state;
  }

  return state;
};
export default rocketsReducer;
