import React, { useState, useEffect } from 'react';
import Tone from 'tone';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import baseStartMain from './Sounds/Plutone_V2_16072019 baseStart.m4a';
import bassMain from './Sounds/Plutone_V2_16072019 bass.m4a';
import synthStr from './Sounds/Plutone_V2_16072019 synthStr.m4a';
import keysMain from './Sounds/Plutone_V2_16072019 keys.m4a';
import kickMain from './Sounds/Plutone_V2_16072019 kick.m4a';
import drumsMain from './Sounds/Plutone_V2_16072019 drums.m4a';
import fxMain from './Sounds/Plutone_V2_16072019 FX.m4a';
import Home from './Pages/Home';
import Plutone from './Pages/Plutone';
import Loading from './components/Loading';
import './App.module.scss';

const App = () => {
  const [areTracksLoading, setTracksLoading] = useState(true);
  const [shardTrack, setShardTrack] = useState(null);

  const trackLoad = trackObj => {
    if (shardTrack === null) setShardTrack(trackObj);
  };

  useEffect(() => {
    const tracks = new Tone.Players(
      {
        // baseStartMain,
        bassMain,
        synthStr,
        // fxMain,
        keysMain,
        drumsMain,
        kickMain,
      },
      {
        volume: -90,
        mute: false,
        onload: () => {
          setTracksLoading(false);
        },
      },
    ).toMaster();
    trackLoad(tracks);
  });

  return (
    <Router>
      {areTracksLoading ? (
        <Loading />
      ) : (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/Plutone"
            render={routeProps => <Plutone {...routeProps} shardTrack={shardTrack} />}
          />
        </Switch>
      )}
    </Router>
  );
};

export default App;
