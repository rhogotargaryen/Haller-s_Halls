import React from 'react'

const AuthedUser = (props) => (
    <div>
        <div>Name:{props.user.name}</div>
        <div>Email:{props.user.email}</div><br></br>
        <div>Id: {props.user.id}</div>
    </div>
)

export default AuthedUser