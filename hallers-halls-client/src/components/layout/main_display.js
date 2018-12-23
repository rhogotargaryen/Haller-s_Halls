import React, {Component} from 'react'
import { Route } from 'react-router-dom';
import LoginComponent from '../auth/login';
import LogoutComponent from '../auth/logout'
import UsersContainer from '../user/users_container'



export default class MainDisplay extends Component {


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={() => <UsersContainer />} />                
                <Route exact path='/login' render={() => <LoginComponent />}/>
                <Route exact path='/logout' render={() => <LogoutComponent />}/>
            </React.Fragment>
        )
    }
}