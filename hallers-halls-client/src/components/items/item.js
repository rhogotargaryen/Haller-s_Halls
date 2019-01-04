import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
    
    if (props.auth) {
        return <div><br></br>
        <div>Name: {props.item.name}</div>
        <div>description: {props.item.description}</div>
        <div>belongs to: {props.item.user.name}</div>
        <div>price:{props.item.price}</div>
        <Link to={`/items/${props.item.id}/edit`}>edit info</Link>
    </div>
    }

    return <div><br></br>
        <div>Name: {props.item.name}</div>
        <div>description: {props.item.description}</div>
        <div>belongs to: {props.item.user.name}</div>
        <div>price:{props.item.price}</div>
        <Link to={`/items/${props.item.id}`}>more info</Link>
    </div>
}

export default Item