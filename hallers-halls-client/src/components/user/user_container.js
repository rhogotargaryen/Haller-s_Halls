import React, { Component } from 'react'
import AuthedUser from './authedUser'
import { connect } from 'react-redux'

class userContainer extends Component {

    render() {
        if (!!this.props.user.id) {
            return (
                <AuthedUser user = {this.props.user} />
            )
        } else {
            return <h3> You must Login First </h3>
        }
    }

}

export default connect(state => {return {user: state.user}})(userContainer)