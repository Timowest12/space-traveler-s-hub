import Axios from 'axios';

export const fetchRockets = () => async (dispatch, getState) => {
  const response = await Axios.get('https://api.spacexdata.com/v3/rockets');
  console.log(response.data);
  dispatch({
    type: 'FETCH_ROCKETS',
    payload: response.data,
  });
};
export const reserveRocket = (id) => {

};
