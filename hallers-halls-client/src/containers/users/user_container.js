import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AuthedUser from '../../components/user/authedUser'
import SignUp from '../../components/auth/signup'
import User from '../../components/user/user'
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
            const params_int = parseInt(this.props.match.params.userId)
            if (this.props.edit === true && params_int === this.props.user.id){
                return <AuthedUser edit={true}/>
            } else if (this.props.edit === true && params_int !== this.props.user.id) {
                return <div><p>you're not authorized to edit someone elses account :(</p></div>
            } else if (this.props.edit === false && params_int === this.props.user.id) {
                return <AuthedUser edit={false} />
            } else if (isNaN(params_int) && !!this.props.user.id) {
                return <Redirect to={`/users/${this.props.user.id}`} />
            } else {
                return <User user={this.selectedUser(params_int)} displayOnly={true}/>
            }
        } else if (!this.props.match.url.includes("new")) {
            return  <Redirect to="/login" />
        } else {
            return <SignUp />
        }
    }
}



export default connect(state => {return {auth: state.login.auth, user: state.user, users: state.users}})(userContainer)