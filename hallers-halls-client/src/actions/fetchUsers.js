
export default function fetchUsers(auth) {
 return dispatch => {
    dispatch({ type: "LOADING_GET_USERS"});
        return fetch("http://localhost:3001/api/users", { headers: { Authorization: auth}})
            .then(resp =>  resp.json())
            .then(users => {
                dispatch({type: "ADD_USERS", users})
        }).catch(err => console.log("must log in for most site functonality"))
    }
}
