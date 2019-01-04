import React, { Component } from 'react'
import { connect } from 'react-redux'
import editAuthedUser from '../../actions/editAutherUser'
import { Link } from 'react-router-dom'

class authedUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.user.name,
            email: this.props.user.email,
            id: this.props.user.id,
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
    }

    renderErrors() {
        if(!!this.props.user.messages) {
            return this.props.user.messages.map((x, i) => {
                return <div key={i}>{x}</div>
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editAuthedUser({...this.state, auth: this.props.auth})
        this.setState({
            edit: false
        })
    }

    render() {
        if (this.props.edit === true) {
            return (
                <div>
                    <h3> Your User Page (Editting) </h3><br></br>
                    {this.renderErrors()}
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br></br>
                            <div>Id: {this.props.user.id} <strong>can not be editted</strong></div>
                        <button type="submit">Save Changes</button><br></br>
                        <Link to={`/users/${this.props.user.id}`}>Back to your Homepage</Link>
                    </form><br></br>
                </div>)
        } else {
            return (
                    <div>
                        <h3> Your User Page </h3><br></br>
                        {this.renderErrors()}
                        <br></br>
                        <div>Name: {this.props.user.name}</div>
                        <div>Email: {this.props.user.email}</div>
                        <div>Id: {this.props.user.id}</div><br></br>
                    <Link to={`/users/${this.props.user.id}/edit`}>Edit your Info</Link>
                    </div>
            )
        }
    }
}



export default connect(state => {return {user: state.user, auth: state.login.auth}}, {editAuthedUser})(authedUser)