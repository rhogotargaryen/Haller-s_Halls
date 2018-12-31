export default function postUserAction(user) {
    return dispatch => {
        dispatch({type: "CREATING_USER"}, user);
        return fetch(`http://localhost:3001/api/users/${user.id}`, { method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: {...user})})
            .then(resp => resp.json())
            .then(userData => {
                if (userData.errors) {
                    return dispatch({type: "FAILED_EDIT", userData})
                }
                else {
                    return dispatch({type: "EDITED_USER", userData})
                }
            })
    }
}