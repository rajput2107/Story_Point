import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Story1 from '../stories/Story1';
import Story2 from '../stories/Story2';
import Story3 from '../stories/Story3';
import Story4 from '../stories/Story4';
import Story5 from '../stories/Story5';
import Story6 from '../stories/Story6';
import Story7 from '../stories/Story7';
import Story8 from '../stories/Story8';
import Story9 from '../stories/Story9';


const Routes = props => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/Story1" component={Story1}/>
        <PrivateRoute exact path="/Story2" component={Story2}/>
        <PrivateRoute exact path="/Story3" component={Story3}/>
        <PrivateRoute exact path="/Story4" component={Story4}/>
        <PrivateRoute exact path="/Story5" component={Story5}/>
        <PrivateRoute exact path="/Story6" component={Story6}/>
        <PrivateRoute exact path="/Story7" component={Story7}/>
        <PrivateRoute exact path="/Story8" component={Story8}/>
        <PrivateRoute exact path="/Story9" component={Story9}/>
        
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;