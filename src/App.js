import React from 'react';

import Titles from './components/Titles';
import Navigation from './components/Navigation';
import Main from './components/Main';

import "./App.css";
import FormImage from './books-image-for-form.jpg';

var formStyle = {
  backgroundImage: `url(${FormImage})`

}

// var mainStyle = {
//   backgroundColor: white
// }

class App extends React.Component {
  render() {
    return (
      <div class="container">

        <div className="app container" style={formStyle}>
          <div>
            <Titles/>
            <Navigation />
          </div>
        </div>

        <br></br>

        <div class="container">
          <div className="app container">
            <Main />
          </div>
        </div>


      </div>

    );
  }
}

export default App;
