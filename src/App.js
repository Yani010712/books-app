import React from 'react';

import Titles from './components/Titles';
import Navigation from './components/Navigation';
import Main from './components/Main';

import "./App.css";
import FormImage from './books-image-for-form.jpg';

var formStyle = {
  backgroundImage: `url(${FormImage})`
}

class App extends React.Component {
  render() {
    return (
        <div className="app container" style={formStyle}>
            <Titles/>
            <Navigation />
            <Main />
        </div>
    );
  }
}

export default App;
