import Axios from "axios"

export const fetchRockets = () => {
    return async (dispatch,getState) => {
        const response = await Axios.get('https://api.spacexdata.com/v3/rockets')
        console.log(response.data)
        dispatch({
            type:'FETCH_ROCKETS',
            payload:response.data
        })
    }
}