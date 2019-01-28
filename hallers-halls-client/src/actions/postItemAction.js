export default function postItemAction(itemInfo) {
    return dispatch => {
        dispatch({type: "SENDIND_ITEM"}, itemInfo);
        return fetch(`http://localhost:3001/api/items`, { method: 'POST', 
            headers: {'Content-Type': 'application/json', Authorization: itemInfo.auth},
            body: JSON.stringify({item: {...itemInfo}})})
            .then(resp => {return resp.json()})
            .then(item => {if (item.errors) {
                return dispatch({type: "FAILED_ITEM", messages: item.errors})
            } else {
                console.log("d")
                return dispatch({type: "SUCCESS_ITEM", item, messages: ["saved!"]})
            }})
            .catch( err => { return dispatch({type: "FAILED_ITEM", messages: ["failed GENERIC post item action 1"]})})
    }
}