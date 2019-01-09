export default function itemReducer(state={id: null, name: "", price: null, description: "", user: {id: null}}, action) {
    switch (action.type) {
        case("SENDING_ITEM"):
            return {...state, messages: ["please wait", "uploading item"]}
        case("LOADING_ITEM"):
            return {...state, messages: ["please wait", "loading item"]}
        case("SUCCESS_ITEM"):
            return { id: action.item.id, name: action.item.name, price: action.item.price, description: action.item.description, messages: null, user: {...action.item.user}}
        case("FAILED_ITEM"):
                return {...state, messages: action.messages}
        case("LOGOUT_USER"):
            return {id: null, name: "", price: null, description: "", user: {id: null}, messages: null}
        case("DROP_ITEM"):
            return  {id: null, name: "", price: null, description: "", user: {id: null}, messages: null}
        default:
            return state
    }
}
