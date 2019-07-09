import React, { useState, useEffect } from 'react';
import Tone from 'tone';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactTimeout from 'react-timeout';
import bassMain from './Sounds/Plutone_V1_04072019 Bass_Main.wav';
import synthStr from './Sounds/Plutone_V1_04072019 SynthStr_Main.wav';
import keysMain from './Sounds/Plutone_V1_04072019 Keys_Main.wav';
import Home from './Pages/Home';
import Plutone from './Pages/Plutone';
import Loading from './components/Loading';
import './App.module.scss';

// const Plutone = lazy(() => import('./Pages/Plutone'));

const App = () => {
  const [isLoading, setLoading] = useState(true); // false
  const [songStems, setSongStems] = useState(null);

  const trackLoad = trackObj => {
    if (songStems === null) setSongStems(trackObj);
    console.log(songStems);
    // tracks.get(songStems[1]).start();
  };

  useEffect(() => {
    const tracks = new Tone.Players(
      {
        bassMain,
        synthStr,
        keysMain,
      },
      {
        volume: -3,
        onload: () => {
          setLoading(false);
        },
      },
    ).toMaster();
    trackLoad(tracks);
  });

  return (
    <Router>
      {isLoading ? (
        <Loading />
      ) : (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/Plutone"
            render={routeProps => <Plutone {...routeProps} songStems={songStems} />}
          />
        </Switch>
      )}
    </Router>
  );
};

export default ReactTimeout(App);
