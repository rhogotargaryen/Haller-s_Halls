import React, { Component} from 'react'

class SignUp extends Component {
    state  = {
        name: "",
        email: "",
        password: ""
    }

    render() {
        return (
        <div>
            <h3> Your User Page (Editting) </h3><br></br>
            {this.renderErrors()}
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br></br>
                <div>Id: {this.props.user.id} <strong>can not be editted</strong></div>
                <button type="submit">Save Changes</button>
            </form><br></br>
        </div>)
    }
}

export default SignUp