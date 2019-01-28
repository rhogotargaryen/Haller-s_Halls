import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import fetchUsers from '../../actions/fetchUsers'
import User from '../../components/user/user'


class UsersContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUsers(this.props.auth))
    }

    renderUsers = () => {
        if(this.props.auth.includes("Bearer")) {
            return this.props.users.map((x, i) => <User key={i} user={x} displayOnly={false}/>)
        } else {
            return <Redirect to='/login' />
        }
    }

    render() {
        return (
            <div className="row justify-content-center">
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