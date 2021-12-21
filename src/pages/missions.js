const fetchData = () => fetch('https://api.spacexdata.com/v3/missions');

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;