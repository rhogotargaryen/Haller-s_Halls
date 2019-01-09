export default function postUserAction(user) {
    let temp_auth = null
    return dispatch => {
        dispatch({type: "SENDING_USER"}, user);
        return fetch(`http://localhost:3001/signup`, { method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: {...user}})})
            .then(resp => {temp_auth = resp.headers.get('authorization'); return resp.json()})
            .then(userData => {return temp_auth === null ? dispatch({type: "FAILED_USER", userData, messages: "failed GERNERIC post user action!"}) : dispatch({type: "USER_AUTHED", user: userData, auth: temp_auth})}
        ).catch( err => {return dispatch({type: "FAILED_USER", messages: "failed GERNERIC post user action"})})
    }
}