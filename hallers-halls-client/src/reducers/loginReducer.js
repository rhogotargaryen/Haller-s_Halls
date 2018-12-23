

export default function loginReducer(state = "", action) {
    switch(action.type) {
        case("AUTHORIZING"):
            return "loading"
        case("USER_AUTHED"):
            return action.auth
        case("AUTH_FAILED"):
            return "could not authenticate, please try again"
        case("LOGOUT_USER"):
            return ""
        default:
            return state
    }
}
