export default function userReducer(state = { email: "", password: ""}, action) {
    switch (action.type) {
        case("SET_USER"):
            return action.payload
        default:
            return state
    }
}