
export default function fetchUsers(auth) {
 return dispatch => {
    dispatch({ type: "LOADING_GET_USERS"});
        return fetch("http://localhost:3001/api/users", { headers: 
            auth})
            .then(resp => resp.json())
            .then(users => {
                dispatch({type: "ADD_USERS", users})
        })
    }
}