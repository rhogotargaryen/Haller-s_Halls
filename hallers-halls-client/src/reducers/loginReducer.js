

loginReducer = (state = [], action) => {
    switch(action.type) {
        case("USER_AUTHED"):
            return [...state, action.auth]
        default:
            return state
    }
}

export default loginReducer