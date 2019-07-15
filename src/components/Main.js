import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

const Main = () => (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
      </Switch>
    );
    export default Main;
