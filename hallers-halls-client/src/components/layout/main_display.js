import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom';
import LoginComponent from '../auth/login';
import LogoutComponent from '../auth/logout'
import UsersContainer from '../user/users_container'
import ItemsContainer from '../items/items_container'
import ItemContainer from '../items/item_container'
import UserContainer from '../user/user_container'
export default class MainDisplay extends Component {

    render() {
        return (
            <div className="col-xs-8">
            <React.Fragment>
                <Switch>
                    <Route exact path="/" render={() => <LoginComponent />} />
                    <Route exact path="/users/:userId/edit" render={(routerProps) => <UserContainer edit={true} {...routerProps} />} />
                    <Route exact path="/user/edit" render={(routerProps) => <UserContainer {...routerProps}/>} />
                    <Route exact path="/users/new" render={(routerProps) => <UserContainer new={true} {...routerProps} />} />
                    <Route exact path="/users/:userId" render={(routerProps) => <UserContainer edit={false} {...routerProps} />} />
                    <Route exact path="/users" render={() => <UsersContainer />} />
                    <Route exact path="/items/new" render={(routerProps) => <ItemContainer new={true} {...routerProps} />} />
                    <Route exact path="/items/:itemId/edit" render={(routerProps) => <ItemContainer edit={true} {...routerProps} />} />
                    <Route exact path="/items/:itemId" render={(routerProps) => <ItemContainer {...routerProps} edit={false} />} />
                    <Route exact path="/items" render={() => <ItemsContainer />} />
                    <Route exact path='/login' render={() => <LoginComponent />}/>
                    <Route exact path='/logout' render={() => <LogoutComponent />}/>
                </Switch>
            </React.Fragment>
            </div>
        )
    }
}

