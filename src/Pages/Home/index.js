import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <p>This is the home page</p>
      <Link to="/Plutone">Click me</Link>
    </div>
  );
};

export default Home;
