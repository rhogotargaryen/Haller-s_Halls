import React from 'react'

const User = (props) => (
    <div>
        <div>Name:{props.user.name}</div>
        <div>Email:{props.user.email}</div><br></br>
    </div>
)

export default User