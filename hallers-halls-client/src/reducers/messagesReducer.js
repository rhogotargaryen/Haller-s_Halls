export default function itemsReducer(state=[], action) {
    switch (action.type) {
        case("SUCCESS_ITEM"):
            return action.messages
        case("FAILED_ITEM"):
            return action.messages
        case("LOGOUT_USER"):
            return []
        case("DROP_ITEM"):
            return []
        case("SENDING_USER"):
            return ["uploading changes"]
        case("SUCCESS_USER"):
            return action.messages
        case("FAILED_USER"):
            return action.messages
        case("DROP_MESSAGES"):
            return []
        default:
            return state
    }
}
