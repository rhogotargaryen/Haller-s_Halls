import React, { Component } from 'react'
import { connect } from 'react-redux'

class userContainer extends Component {

    

    render() {
        if (!!this.props.user.id) {
            return (
                <div>
                    <h3> Your User Page </h3><br></br>
                    <div>Name:{this.props.user.name}</div>
                    <div>Email:{this.props.user.email}</div>
                    <div>Id: {this.props.user.id}</div><br></br>
                </div>
            )
        } else {
            return <h3> You must Login First </h3>
        }
    }

}

export default connect(state => {return {user: state.user}})(userContainer)