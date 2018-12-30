export default function logoutAction(auth) {
    return dispatch => {
        dispatch({type: "LOGGING_OUT"}, auth);
        return fetch('http://localhost:3001/logout', {method: 'delete',
        headers: { Authorization: auth}})
        .then(resp => {console.log(resp); return dispatch({type: 'LOGGED_OUT'})})
    }
}