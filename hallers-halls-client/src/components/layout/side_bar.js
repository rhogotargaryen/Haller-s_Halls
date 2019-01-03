import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
    
    renderAuthLinks() {
        if (this.props.auth.includes("Bearer")) {
            return (<div><div><Link to={`/users/${this.props.user.id}`}>Your Homepage</Link></div><br></br>
            <div><Link to="/logout">logout</Link></div></div>)
        } else {
            return (<div><div><Link to="/users/new">Create User</Link></div><br></br>
                    <div><Link to="/login">login</Link></div></div>)
        }
    }

    render() {
        return (
                <div className="col-xs-4">
                    {this.renderAuthLinks()}
                    <div><Link to="/users">users</Link></div>
                    <div><Link to="/items">items</Link></div>
                </div>
        )
    }
}