export default function postItemAction(itemInfo) {
    return dispatch => {
        dispatch({type: "SENDIND_ITEM"}, itemInfo);
        return fetch(`http://localhost:3001/signup`, { method: 'POST', 
            headers: {'Content-Type': 'application/json', Authorization: itemInfo.auth},
            body: JSON.stringify({item: {...itemInfo}})})
            .then(resp => {return resp.json()})
            .then(itemData => {return dispatch({type: "SUCCESS_ITEM", item: itemData})}
        ).catch( err => {debugger; return dispatch({type: "FAILED_ITEM", err})})
    }
}