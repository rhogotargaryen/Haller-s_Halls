export default function logoutAction(auth) {
    return dispatch => {
        dispatch({type: "LOGOUT_USER"}, auth);
        return fetch('http://localhost:3001/logout', {method: 'delete',
        headers: { Authorization: auth}})
        .then(resp => dispatch({type: 'LOGGED_OUT'}))
    }
}