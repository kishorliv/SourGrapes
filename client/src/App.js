import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import * as ROUTES from './constants/routes';

function App() {

  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path='' render={() => (<p>Sorry, page not found.</p>)} />
      </Switch>
    </div>
    );
}

export default App;
