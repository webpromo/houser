import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
// import StepOne from './component/Wizard/StepOne';

export default (
    <Switch>
      <Route exact path="/" component={ Dashboard } />
      <Route path="/wizard" component={ Wizard } />
    </Switch>
  )