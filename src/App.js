import React from 'react';

import Titles from './components/Titles';
import Navigation from './components/Navigation';
import Main from './components/Main';

import "./App.css";

class App extends React.Component {
  render() {
    return (
        <div className="app container">
            <Titles/>
            <Navigation />
            <Main />
        </div>
    );
  }
}

export default App;
