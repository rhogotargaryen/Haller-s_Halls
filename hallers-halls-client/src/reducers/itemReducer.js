export default function itemReducer(state={id: null, name: "", price: null, description: ""}, action) {
    switch (action.type) {
        case("SENDING_ITEMS"):
            return {...state, messages: "uploading item"}
        case("SUCCES_ITEM"):
            return { id: action.itemData.id, name: action.itemData.name, price: action.itemData.price, description: action.itemData.description, messages:null}
        case("FAILED_ITEM"):
            return {...state, messages: action.errors}
        case("LOGOUT_USER"):
            return {id: null, name: "", price: null, description: "", messages: null}
        default:
            return state
    }
}
