export default function itemsReducer(state=[], action) {
    switch (action.type) {
        case("ADD_ITEMS"):
            return action.items
        default:
            return state
    }
}
