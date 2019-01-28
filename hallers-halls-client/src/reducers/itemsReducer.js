export default function itemsReducer(state=[], action) {
    switch (action.type) {
        case("ADD_ITEMS"):
            return action.items
        case("LOGOUT_USER"):
            return []
        //case("SUCCESS_ITEM"):
            //return [...state, action.item]
        default:
            return state
    }
}
