import React from 'react';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import NotFound from './Pages/NotFound';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const routes = {
    HOME: '/',
    DETAIL: '/detail/:id'
}

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path={routes.HOME} exact component={Home} />
            <Route path={routes.DETAIL} exact component={Detail} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)


export default Routes;
