const initState = []
const rocketsReducer = (state = initState,action) => {
    console.log(action)
    if (action.type == 'FETCH_ROCKETS') {
        return action.payload
    }
    else{
        return state
    }
}
export default rocketsReducer