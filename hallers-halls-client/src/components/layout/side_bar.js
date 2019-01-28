import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
    
    renderAuthLinks() {
        if (this.props.auth.includes("Bearer")) {
            return (
            <div className="row justify-content-center justify-content-sm-start">
                <div className="row-sm-auto col-auto"><Link className="badge badge-light" to={`/users/${this.props.user.id}`}>Your Homepage</Link></div><br></br>
                <div className="row-sm-auto col-auto"><Link className="badge badge-light" to="/users">users</Link></div>
                <div className="row-sm-auto col-auto"><Link className="badge badge-light" to="/items">items</Link></div>
                <div className="row-sm-auto col-auto"><Link className="badge badge-light" to="/items/new">create new item</Link></div>
                <div className="row-sm-auto col-auto"><Link className="badge badge-light" to="/logout">logout</Link></div>
            </div>)
        } else {
            return (
                <div className="row justify-content-center justify-content-sm-start">
                    <div className="row-sm-auto col-auto"><Link className="badge badge-light" to="/users/new">Create User</Link></div><br></br>
                    <div className="row-sm-auto col-auto"><Link className="badge badge-light" to="/login">login</Link></div>
                    <div className="row-sm-auto col-auto"><Link className="badge badge-light" to="/users">users</Link></div>
                    <div className="row-sm-auto col-auto"><Link className="badge badge-light" to="/items">items</Link></div>
                </div>)
        }
    }

    render() {
        return (
                <div className="col-sm-2">
                    {this.renderAuthLinks()}
                </div>
        )
    }
}