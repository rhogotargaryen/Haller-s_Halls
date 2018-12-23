export default function userReducer(state = { email: "", password: ""}, action) {
    switch (action.type) {
        case("SET_USER"):
            return {email: action.payload.email, password: "no need to store"}
        case("LOGOUT_USER"):
            return {email: "", password: ""}
        default:
            return state
    }
}