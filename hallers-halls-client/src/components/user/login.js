import React, { Component} from 'react'
import { connect } from 'react-redux'
import loginAction from '../../actions/loginAction'

class LoginComponent extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.setUser(this.state)
        this.props.login(this.state)
    }

    render() {
        debugger
        return(
            <div>
                <form id='login-form' onSubmit={this.handleSubmit}>
                <br></br>
                    <label>Email:
                    <input type='textfield' onChange={this.handleChange} name="email"/>
                    </label><br></br>
                <br></br>
                    <label>Password:
                    <input type='password' onChange={this.handleChange} name="password"/>
                <br></br></label><br></br>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
    
}


const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (userData) => dispatch({type: "SET_USER", payload: userData}),
        login: (userData) => dispatch(loginAction(userData))
    }
}


export default connect(null, mapDispatchToProps)(LoginComponent)