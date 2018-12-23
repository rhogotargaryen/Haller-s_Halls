import React, { Component} from 'react'
import { connect } from 'react-redux'

class LogoutComponent extends Component {

    logOut = function (event) {
        event.preventDefault()
        this.props.dispatch({type: "LOGOUT_USER"})
    }.bind(this)

    render() {
        return (
            <div> 
                <button href="" onClick={this.logOut}>logout</button>
            </div>
        )
    }
}

export default connect()(LogoutComponent)