import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from "/App";
import Recipe from "./Recipe";

const Router = () => (
    <BrowserRouter>
    <Switch>
    <Route path='/' Component={App} exact />
    <Route path='/recipe' Component={Recipe} />
    </Switch>

    </BrowserRouter>
)

export default Router;