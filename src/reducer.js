const initState = [];
const rocketsReducer = (state = initState, action) => {
  if (action.type === 'FETCH_ROCKETS') {
    return action.payload;
  }
  if (action.type === 'RESERVE_ROCKET') {
    state.map((elem) => {
      const reserves = elem;
      if (reserves.id === action.payload) {
        reserves.reserved = true;
      }
      return elem;
    });
    return state;
  }
  if (action.type === 'CANCEL_RESERVATION') {
    state.forEach((element) => {
      const checker = element;
      if (checker.id === action.payload) {
        checker.reserved = false;
      }
    });
    return state;
  }

  return state;
};
export default rocketsReducer;
