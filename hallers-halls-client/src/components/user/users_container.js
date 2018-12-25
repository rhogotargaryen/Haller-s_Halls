import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import fetchUsers from '../../actions/fetchUsers'


class UsersContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUsers(this.props.auth))
    }

    renderUsers = () => {
        if(this.props.auth.length > 10) {
            return this.props.users.map(x => <div>{x.email}</div>)
        } else {
            return <Redirect to='/login' />
        }
    }

    render() {
        return (
            <div>
                {this.renderUsers()}
            </div>
        )
    }
            
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        auth: state.login.auth,
        user: state.user
    }
}

export default connect(mapStateToProps)(UsersContainer)