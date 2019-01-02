import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AuthedUser from './authedUser'


class userContainer extends Component {

    render() {
        if (this.props.auth.includes("Bearer")) {
            if (this.props.match.url.includes("edit")){
                return <AuthedUser edit={true}/>
            } else {
                return <AuthedUser edit={false}/>
            }
        } else {
            return  <Redirect to='/users/new'/>
        }
    }
}



export default connect(state => {return {auth: state.login.auth}})(userContainer)