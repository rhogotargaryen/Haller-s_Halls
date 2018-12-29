

export default function loginAction(user) {
    return dispatch => {
        dispatch({type: "AUTHORIZING"});
        return fetch('http://localhost:3001/login', {method: 'post',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({user: user})
            })
        .then(resp => resp.headers.get('authorization'))
        .then(auth => {
            return auth === null ? dispatch({type: "FAILED_AUTH"}) : dispatch({type: "USER_AUTHED", auth})
            }
        )
    }
}