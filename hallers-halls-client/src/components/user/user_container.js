import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AuthedUser from './authedUser'
import SignUp from '../auth/signup'
import User from './user'
import fetchUsers from '../../actions/fetchUsers'

class userContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUsers(this.props.auth))
    }

    selectedUser(showUserId) {
        const a = this.props.users.filter(x => {return x.id === showUserId})
        return a.length !== 0 ? a[0] : {id: null}
    }

    render() {
        if (this.props.auth.includes("Bearer")) {
            const a = parseInt(this.props.match.params.userId)
            if (this.props.edit === true && a === this.props.user.id){
                return <AuthedUser edit={true}/>
            } else if (this.props.edit === true && a !== this.props.user.id) {
                return <div><p>you're not authorized to edit someone elses account :(</p></div>
            } else if (this.props.edit === false && a === this.props.user.id) {
                return <AuthedUser edit={false}/>
            } else if (this.props.new === true) {
                return <SignUp />
            } else {
                return <User user={this.selectedUser(a)}/>
            }
        } else {
            return  <Redirect to='/login'/>
        }
    }
}



export default connect(state => {return {auth: state.login.auth, user: state.user, users: state.users}})(userContainer)