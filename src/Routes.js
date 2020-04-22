import React from 'react';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import NotFound from './Pages/NotFound';
import { Route, Switch, HashRouter } from 'react-router-dom';

const routes = {
    HOME: '/',
    DETAIL: '/detail/:id'
}

export const Routes = () => (
    <HashRouter basename='/'>
        <Switch>
            <Route path={routes.HOME} exact component={Home} />
            <Route path={routes.DETAIL} exact component={Detail} />
            <Route component={NotFound} />
        </Switch>
    </HashRouter>
)


export default Routes;
