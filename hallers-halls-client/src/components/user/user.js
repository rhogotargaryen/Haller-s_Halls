import React from 'react'

const User = (props) => {
    if (props.user.id === null) {
        return (
            <div>
                <h3>User Not Found</h3>
            </div>
    )} else {
        return (
            <div>
                <div>Name:{props.user.name}</div>
                <div>Email:{props.user.email}</div><br></br>
            </div>)
    }
}

export default User