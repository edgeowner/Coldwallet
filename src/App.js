
import React, { Component } from 'react';
import './App.css';
import GeneratePrvKeyControl from './GeneratePrvKeyControl'
import RecoverPrvKeyControl from './RecoverPrvKeyControl'
import NormalScannerControl from './NormalScannerControl'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome</h1>
        </header>

        <div className="App-intro">
            <GeneratePrvKeyControl />

            <hr/>
            <RecoverPrvKeyControl />
            <hr/>
            <NormalScannerControl />
        </div>
      </div>
    );
  }
}

export default App;
