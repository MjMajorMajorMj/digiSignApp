import React, { Component } from 'react';
import Lobby from './Lobby';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Irvine"
    }
  }
  render() {
    const { location } = this.state;
    return (
      <div>
        <Lobby location={location} />
      </div>
    );
  }
}

export default App;
