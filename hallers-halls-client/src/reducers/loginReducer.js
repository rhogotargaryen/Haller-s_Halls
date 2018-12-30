import moment from 'moment'

export default function loginReducer(state = {auth: "", persistExpiresAt: ""}, action) {
    switch(action.type) {
        case("AUTHORIZING"):
            return {...state, auth: "loading" }
        case("USER_AUTHED"):
            return {...state, auth: action.auth, persistExpiresAt: moment().add(4, 'h').format() }
        case("FAILED_AUTH"):
            return {...state, auth: "FAILED LOGIN"}
        case("LOGOUT_USER"):
            return { ...state, auth: "logging out", persistExpiresAt: "" }
        case("LOGGED_OUT"):
            return { ...state, auth: "", persistExpiresAt: ""}
        default:
            return state
    }
}
