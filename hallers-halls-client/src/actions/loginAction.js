

export default function loginAction(user) {
    let temp_auth = null
    return dispatch => {
        dispatch({type: "AUTHORIZING"});
        return fetch('http://localhost:3001/login', {method: 'post',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({user: user})
            })
        .then(resp => {temp_auth = resp.headers.get('authorization'); return resp.json()})
        .then(userData => {
            return temp_auth === null ? dispatch({type: "FAILED_AUTH"}) : dispatch({type: "USER_AUTHED", user: userData, auth: temp_auth})
            }
        ).catch( err => dispatch({type: "FAILED_AUTH"}))
    }
}