import React, { Component} from 'react'
import { connect } from 'react-redux'
import loginAction from '../../actions/loginAction'

class LoginComponent extends Component {

    state = this.props.user

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
        if (this.props.auth === "loading") {
            return <p>Attempting to log in!</p>
        }
        else if (this.props.auth.length > 10) {
            window.history.pushState(null, "", "/")
            window.history.forward()
        }
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


const mapStateToProps = (state) => {
    return { user: state.user,
        auth: state.auth
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (userData) => dispatch({type: "SET_USER", payload: userData}),
        login: (userData) => dispatch(loginAction(userData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)