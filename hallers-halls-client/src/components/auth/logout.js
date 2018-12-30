import React, { Component} from 'react'
import { connect } from 'react-redux'
import logoutAction from '../../actions/logoutAction'

class LogoutComponent extends Component {

    logOut = function (event) {
        event.preventDefault()
        this.props.logout(this.props.auth)
    }.bind(this)

    render() {
        if (this.props.auth === "logging out") {
            return <h3>Logging you out now</h3>
        }
        else if (this.props.auth.includes("Bearer")) {
            return (
                <div> 
                    <button href="" onClick={this.logOut}>logout</button>
                </div>
            )
        } else {
            return <h3>Not Logged In</h3>
        }
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: (auth) => dispatch(logoutAction(auth))
    }
}

export default connect((state) => {return {auth: state.login.auth}}, mapDispatchToProps)(LogoutComponent)