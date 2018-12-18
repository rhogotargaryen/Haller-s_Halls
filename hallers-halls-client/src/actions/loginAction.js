

export default function loginAction(email, password) {
    return dispatch => {
        dispatch({type: "AUTHORIZING"});
        return fetch('http://localhost:3001/login', {method: 'post',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({user: {email, password}})
            })
        .then(resp => resp.headers.get('authorization'))
        .then(auth => dispatch({type: "USER_AUTHED", auth}))
        .catch(dispatch("FAILED_AUTH"))
    }
}