import moment from 'moment'

export default function userReducer(state = { email: "", password: "", name: "", persistExpiresAt: "", id: null}, action) {
    switch (action.type) {
        case("SET_USER"):
            return {...state, email: action.payload.email, password: "no need to store"}
        case("USER_AUTHED"):
            return {...state, email: action.user.email, name: action.user.name, messages: null, id: action.user.id, persistExpiresAt: moment().add(4, 'h').format()}
        case("LOGOUT_USER"):
            return {...state, email: "", password: "", name: "", id: null, persistExpiresAt: "", messages: null}
        case("SENDING_USER"):
            return {...state, messages: ["uploading changes"]}
        case("SUCCESS_USER"):
            return {...state, name: action.userData.name, email: action.userData.email, messages: null}
        case("FAILED_USER"):
            return {...state, messages: action.userData.errors}
        default:
            return state
    }
}