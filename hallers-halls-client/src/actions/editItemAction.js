export default function editItemAction(itemInfo) {
    return dispatch => {
        dispatch({type: "SENDING_ITEM"}, itemInfo);
        return fetch(`http://localhost:3001/api/items/${itemInfo.id}`, { method: 'PATCH', 
            headers: {'Content-Type': 'application/json', Authorization: itemInfo.auth},
            body: JSON.stringify({item: {...itemInfo}})})
            .then(resp => {return resp.json()})
            .then(item => {if (item.errors) {
                return dispatch({type: "FAILED_ITEM", errors: item.errors})
            } else {
                return dispatch({type: "SUCCESS_ITEM", item: {...item, messages: ["saved!"]}})
            }})
        .catch( err => {debugger; return dispatch({type: "FAILED_ITEM", err})})
    }
}

