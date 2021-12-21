const initState = []
const rocketsReducer = (state = initState,action) => {
    console.log(action)
    console.log(action)
    if (action.type == 'FETCH_ROCKETS') {
        return action.payload
    }
    else if (action.type == 'RESERVE_ROCKET') {
        state.forEach((elem) => {
            if (elem.id == action.payload) {
                elem.reserved = true
            }
        })
        return state
    }
    else if (action.type == 'CANCEL_RESERVATION') {
        state.forEach((elem) => {
            if (elem.id == action.payload) {
                elem.reserved = false
            }
        })
        return state
    }
    else{
        return state
    }
}
export default rocketsReducer