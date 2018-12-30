export default function editAuthedUser(user) {
    return dispatch => {
        dispatch({type: "EDITTING_USER"}, user);
        return fetch(`http://localhost:3001/api/users/${user.id}`, { method: 'PATCH', 
            headers: { Authorization: user.auth, 'Content-Type': 'application/json'},
            body: JSON.stringify({user: user})})
            .then(resp => resp.json())
            .then(userData => dispatch({type: "EDITTED_USER", userData}))
        .catch(err => dispatch({type: "FAILED_EDIT"}))
    }
}