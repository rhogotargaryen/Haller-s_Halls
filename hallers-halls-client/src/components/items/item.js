import React from 'react'

const Item = (props) => (
    <div>
        <div>Name: {props.item.name}</div>
        <div>description: {props.item.description}</div>
        <div>belongs to: {props.item.user.name}</div>
        <div>price:{props.item.price}</div><br></br>
    </div>
)

export default Item