import React, { Component} from 'react'
import postUserAction from '../../actions/postUserAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import loginAction from '../../actions/loginAction'

class SignUp extends Component {
        state = {
                name: this.props.user.name,
                email: this.props.user.email,
                refresh: true,
                password: "",
            }

    renderErrors() {
        if(!!this.props.user.messages) {
            return this.props.user.messages.map((x, i) => {
                return <div className="alert alert-light" key={i}>{x}</div>
            })
        }
    }

    handleChange = function(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }.bind(this)

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.postUserAction(this.state)
    }

    render() {
        if(this.props.auth.includes("Bearer")) {
            return <Redirect to={`/users/${this.props.user.id}`} />
        }
        return (
            <div className="card container" style={{width: "18rem"}}> 
                <div className="card-body">
                    <h5> Sign Up </h5><br></br>
                        <div>{this.renderErrors()}</div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name: </label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
                        <label>Email: </label>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br></br>
                        <label>Password: </label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br></br>
                        <button className="btn btn-light" type="submit">Create User</button>
                    </form><br></br>
                </div>
            </div>
        )
    }
}

export default connect(state => {return {user: state.user, auth: state.login.auth}}, {postUserAction, loginAction})(SignUp)