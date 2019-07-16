import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App'
import Author from './Author';



class Router extends React.Component{
  render (){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App}></Route>
          <Route path='/author' component={Author}></Route>
        </Switch>
      </BrowserRouter>

    )
  }
}
export default Router;
