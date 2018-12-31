import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
    
    renderAuthLinks() {
        return this.props.auth.includes("Bearer") ? <div><Link to="/user">Your Homepage</Link></div> : <div><Link to="/signup">Create User</Link></div>
    }

    render() {
        return (
                <div className="col-xs-4">
                    {this.renderAuthLinks()}
                    <div><Link to="/users">users</Link></div>
                    <div><Link to="/items">items</Link></div>
                    <div><Link to="/login">login</Link></div>
                    <div><Link to="/logout">logout</Link></div>
                </div>
        )
    }
}