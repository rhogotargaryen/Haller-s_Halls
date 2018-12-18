

loginReducer = (state = {auth: ""}, action) => {
    switch(action.type) {
        case("USER_AUTHED"):
            return {...state, auth: action.payload}
        default:
            return state
    }
}

export default loginReducer