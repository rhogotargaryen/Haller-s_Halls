export default function editAuthedUser(user) {
    return dispatch => {
        dispatch({type: "EDITING_USER"}, user);
        return fetch(`http://localhost:3001/api/users/${user.id}`, { method: 'PATCH', 
            headers: { Authorization: user.auth, 'Content-Type': 'application/json'},
            body: JSON.stringify({user: {...user, auth: ""}})})
            .then(resp => resp.json())
            .then(userData => dispatch({type: "EDITED_USER", userData}))
        .catch(err => dispatch({type: "FAILED_EDIT"}))
    }
}