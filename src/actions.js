import Axios from 'axios';

const fetchRockets = () => async (dispatch) => {
  const response = await Axios.get('https://api.spacexdata.com/v3/rockets');
  dispatch({
    type: 'FETCH_ROCKETS',
    payload: response.data,
  });
};
export default fetchRockets;
