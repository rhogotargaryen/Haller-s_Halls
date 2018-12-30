export default function userReducer(state = { email: "", password: "", name: "", id: null}, action) {
    switch (action.type) {
        case("SET_USER"):
            return {email: action.payload.email, password: "no need to store"}
        case("USER_AUTHED"):
            return {email: action.user.email, name: action.user.name, id: action.user.id, password: "no need to store"}
        case("LOGOUT_USER"):
            return {email: "", password: ""}
        default:
            return state
    }
}