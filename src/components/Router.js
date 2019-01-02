import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Front from './Front';
import NotFound from './NotFound';
import Admin from './Admin';
import SoloAct from './SoloAct';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Front}/>
            <Route exact path="/404" component={NotFound}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/:location" component={App} />
            <Route exact path="/:location/:activity" component={SoloAct}/>
        </Switch>
    </BrowserRouter>
)

export default Router;