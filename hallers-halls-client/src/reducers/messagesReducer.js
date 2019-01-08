export default function itemsReducer(state=[], action) {
    switch (action.type) {
        case("SUCCESS_ITEM"):
            return action.item.messages
        case("FAILED_ITEM"):
            return action.errors.map(x => x.detail)
        case("LOGOUT_USER"):
            return null
        case("DROP_ITEM"):
            return null
        default:
            return state
    }
}
