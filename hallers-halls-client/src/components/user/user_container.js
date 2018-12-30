import React, { Component } from 'react'
import { connect } from 'react-redux'
import editAuthedUser from '../../actions/editAutherUser'
import { Link } from 'react-router-dom'


class userContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            name: this.props.user.name,
            email: this.props.user.email,
            id: this.props.user.id,
            auth: this.props.auth
        }
    }

    startEdit = (event) => {
        event.preventDefault()
        this.setState({
            edit: true
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editAuthedUser(this.state)
        this.setState({
            edit: false
        })
    }

    render() {
        if (!!this.props.user.id & this.state.edit === false) {
            return (
                <div>
                    <h3> Your User Page </h3><br></br>
                    <div>Name:{this.state.name}</div>
                    <div>Email:{this.state.email}</div>
                    <div>Id: {this.props.user.id}</div><br></br>
                    <button onClick={this.startEdit}>Edit Your Info</button>
                </div>
            )
        }
        else if (!!this.props.user.id & this.state.edit === true) {
            return (                <div>
                <h3> Your User Page (Editting) </h3><br></br>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br></br>
                        <div>Id: {this.props.user.id} <strong>can not be editted</strong></div>
                    <button type="submit">Save Changes</button>
                </form><br></br>
            </div>)
        } else {
            return (<div><h3> You must Login First </h3><br></br>
                        <Link to="/login">Login Here</Link>
                    </div>)
        }
    }

}



export default connect(state => {return {user: state.user, auth: state.login.auth}}, {editAuthedUser})(userContainer)