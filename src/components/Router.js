import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Front from './Front';
import NotFound from './NotFound';
import Login from './Login';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Front}/>
            <Route exact path="/404" component={NotFound}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/:location" component={App} />
        </Switch>
    </BrowserRouter>
)

export default Router;