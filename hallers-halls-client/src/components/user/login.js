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
        this.props.login()
    }

    consoleLog = () => {
        console.log(this.props)
    }

    render() {
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
                {this.consoleLog()}
            </div>
        )
    }
    
}


const mapDispatchToProps = (dispatch) => {
    return {
        setUser: () => dispatch({type: "SET_USER", payload: this.state}),
        login: () => dispatch(loginAction({email: this.state.email, password: this.state.password}))
    }
}


export default connect(null, mapDispatchToProps)(LoginComponent)