export default function fetchItem(auth) {
    return dispatch => {
       dispatch({ type: "LOADING_ITEM"});
           return fetch(`http://localhost:3001/api/items/${auth.itemId}`, { headers: { Authorization: auth.auth}})
               .then(resp =>  resp.json())
               .then(item => {
                   dispatch({type: "SUCCESS_ITEM", item})})
            .catch(err => {return dispatch({type: "FAILED_ITEM"}, {...err})})
       }
   }