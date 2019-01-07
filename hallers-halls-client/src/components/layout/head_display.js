import React, {Component} from 'react'
import { Link } from 'react-router-dom'


export default class HeadDisplay extends Component {

    render() {

      if (this.props.auth.includes("Bearer")) {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/users/new">{this.props.user.name}</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/items">Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Actions
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="nav-link" to={`/users/${this.props.user.id}/edit`}>Edit Your Info</Link>
                  <Link className="nav-link" to="/items/new">Create an Item</Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        )
      } else {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/users/new">Haller's Halls</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link  disabled" to="#">Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  disabled" to="#">Users</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Actions
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="nav-link" to="users/new">Create User</Link>
                  <Link className="nav-link" to="/login">Log In!</Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        )
      }
      

      
    }
}