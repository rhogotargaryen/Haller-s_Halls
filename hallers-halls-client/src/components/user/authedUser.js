import React from 'react'

const AuthedUser = (props) => (
    <div>
        <h3> Your User Page </h3><br></br>
        <div>Name:{props.user.name}</div>
        <div>Email:{props.user.email}</div>
        <div>Id: {props.user.id}</div><br></br>
    </div>
)

export default AuthedUser