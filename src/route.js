import {HashRouter,Switch,Route} from 'react-router-dom';
import {Dashboard} from './component/Dashboard/Dashboard';
import {Wizard} from './component/Wizard/Wizard';

export default (
    <Switch>
      <Route exact path="/" component={ Dashboard } />
      <Route path="/wizard" component={ Wizard } />
    </Switch>
  )