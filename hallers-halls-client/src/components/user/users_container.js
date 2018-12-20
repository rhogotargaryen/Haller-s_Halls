import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchUsers from '../../actions/fetchUsers'


class UsersContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUsers(this.props.auth))
    }

    renderUsers = () => {
        if(this.props.users) return this.props.users.map(x => <div>{x.email}</div>)
    }

    render() {
        return (
            <div>
                <p>test</p>
                {this.renderUsers()}
            </div>
        )
    }
            
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        auth: state.auth,
        user: state.user
    }
}

export default connect(mapStateToProps)(UsersContainer)