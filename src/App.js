import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router';
import ReactTimeout from 'react-timeout';
import Home from './Pages/Home';
import Plutone from './Pages/Plutone';
import Loading from './components/Loading';
import './App.module.scss';

// const Plutone = lazy(() => import('./Pages/Plutone'));

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    this.props.setTimeOut(setLoading(false), 5000);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loading />
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Plutone" component={Plutone} />
        </Switch>
      )}
    </Router>
  );
};

export default ReactTimeout(App);
