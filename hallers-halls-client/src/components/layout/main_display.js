import React, {Component} from 'react'
import { Route } from 'react-router-dom';
import LoginComponent from '../auth/login';
import LogoutComponent from '../auth/logout'
import UsersContainer from '../user/users_container'
import ItemsContainer from '../items/items_container'
import ItemContainer from '../items/item_container'
import UserContainer from '../user/user_container'
import SignUp from '../auth/signup'

export default class MainDisplay extends Component {

    render() {
        return (
            <div className="col-xs-8">
            <React.Fragment>
                <Route exact path="/user" render={(routerProps) => <UserContainer {...routerProps} />} />
                <Route exact path="/users" render={() => <UsersContainer />} />
                <Route exact path="/user/new" render={() => <SignUp />} />
                <Route exact path="/user/edit" render={(routerProps) => <UserContainer {...routerProps}/>} />
                <Route path="/users/:userId" render={(routerProps) => <UserContainer {...routerProps} />} />
                <Route exact path="/items" render={() => <ItemsContainer />} />
                <Route path="/items/:itemId" render={() => <ItemContainer />} />
                <Route exact path='/login' render={() => <LoginComponent />}/>
                <Route exact path='/logout' render={() => <LogoutComponent />}/>
            </React.Fragment>
            </div>
        )
    }
}

