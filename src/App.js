import React, { useState, useEffect } from 'react';
import Tone from 'tone';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import baseStartMain from './Sounds/Plutone_V1_04072019 BaseStart_Main.m4a';
import bassMain from './Sounds/Plutone_V1_04072019 Bass_Main.m4a';
import synthStr from './Sounds/Plutone_V1_04072019 SynthStr_Main.m4a';
import keysMain from './Sounds/Plutone_V1_04072019 Keys_Main.m4a';
import kickMain from './Sounds/Plutone_V1_04072019 Kick_Main.m4a';
import drumsMain from './Sounds/Plutone_V1_04072019 Drums_main.m4a';
import fxMain from './Sounds/Plutone_V1_04072019 FX_Main.m4a';
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
        baseStartMain,
        bassMain,
        kickMain,
        drumsMain,
        synthStr,
        keysMain,
        fxMain,
      },
      {
        volume: -100,
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
