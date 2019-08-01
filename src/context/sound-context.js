import React, { createContext, useState } from 'react';

const SoundContext = createContext({ sounds: '', setSounds: () => {} });

const SoundContextProvider = props => {
  const [sounds, setTheseSounds] = useState('');

  function setSounds(value) {
    setTheseSounds(value);
  }
  return <SoundContext.Provider value={{ sounds, setSounds }} {...props} />;
};

export { SoundContext, SoundContextProvider };
