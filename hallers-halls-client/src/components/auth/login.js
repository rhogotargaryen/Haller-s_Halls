import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import loginAction from '../../actions/loginAction'

class LoginComponent extends Component {

    handleChange = (event) => {
            this.props.user[event.target.name] = event.target.value
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.setUser(this.props.user)
        this.props.login(this.props.user)
    }

    renderLoginForm = (message) => {
        return(
            <div className="card container" style={{width: "18rem"}}> 
                <div className="card-body">
                    <h5>{message}</h5>
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
            </div>
        )
    }

    render() {
        if (this.props.auth.includes("Bearer")) {
            return <Redirect to={`/users/${this.props.user.id}`} />
        }
        switch(this.props.auth) {
            case("loading"):
                return this.renderLoginForm("Attempting To Login.")
            case("FAILED LOGIN"):
                return this.renderLoginForm("Login Failed Try Again.")
            default:
                return this.renderLoginForm("Thank You for using our site. Please log in.")
        }
    }
}


const mapStateToProps = (state) => {
    return { user: state.user,
        auth: state.login.auth
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (userData) => dispatch({type: "SET_USER", payload: userData}),
        login: (userData) => dispatch(loginAction(userData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)