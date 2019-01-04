import React from 'react'

const User = (props) => {
    if (props.user.id === null) {
        return (
            <div>
                <h2>User Not Found</h2>
            </div>
    )
    } else if(props.user.id === null) {
        return <p>rest</p>
    }else {
        return (
            <div>
                <div>Name:{props.user.name}</div>
                <div>Email:{props.user.email}</div><br></br>
            </div>)
    }
}

export default User