import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Front from './Front';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Front}/>
            <Route path="/:location" component={App} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;