export default function editAuthedUser(user) {
    return dispatch => {
        dispatch({type: "SENDING_USER"}, user);
        return fetch(`http://localhost:3001/api/users/${user.id}`, { method: 'PATCH', 
            headers: { Authorization: user.auth, 'Content-Type': 'application/json'},
            body: JSON.stringify({user: {...user, auth: ""}})})
            .then(resp => {return resp.json()})
            .then(userData => {
                if (userData.errors) {
                    return dispatch({type: "FAILED_USER", userData, messages: userData.errors})
                } else {
                    return dispatch({type: "SUCCESS_USER", userData, messages: ["success!"]})
                }
            }).catch(err => dispatch({type: "FAILED_USER", messages: ["failed GENERIC edit auth action 2"] }))
    }
}