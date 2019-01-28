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
            return <h5>Logging you out now</h5>
        }
        else if (this.props.auth.includes("Bearer")) {
            return (
                <div className="card container" style={{width: "18rem"}}> 
                    <div className="card-body">
                        <h5>Thanks For Visiting!</h5>
                        <br></br>
                        <button className="btn btn-light" href="" onClick={this.logOut}>logout</button>
                    </div>
                </div>
            )
        } else {
            return (
            <div className="card container" style={{width: "18rem"}}> 
                <div className="card-body">
                    <h5>Not Logged In</h5>
                </div>
            </div>
            )
        }
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: (auth) => dispatch(logoutAction(auth))
    }
}

export default connect((state) => {return {auth: state.login.auth}}, mapDispatchToProps)(LogoutComponent)