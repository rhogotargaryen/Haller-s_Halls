import React, {Component} from 'react'
import { Route } from 'react-router-dom';
import LoginComponent from '../auth/login';
import LogoutComponent from '../auth/logout'
import UsersContainer from '../user/users_container'
import ItemsContainer from '../items/items_container'


export default class MainDisplay extends Component {

    render() {
        return (
            <div className="col-xs-8">
            <React.Fragment>
                <Route exact path="/" render={() => <UsersContainer />} />
                <Route exact path="/items" render={() => <ItemsContainer />} />
                <Route exact path='/login' render={() => <LoginComponent />}/>
                <Route exact path='/logout' render={() => <LogoutComponent />}/>
            </React.Fragment>
            </div>
        )
    }
}