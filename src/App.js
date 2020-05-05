import React from 'react';
import Menu from './components/Menu';

class App extends React.Component {
  render() {
    return(
      <div>
        <Menu item1 = "HOME" item2 = "INTRO" action = {this._alertHandler} />
        <Menu item1 = "TEST" item2 = "EXAM" action = {this._alertHandler} />
        <Menu item1 = "Lion" item2 = "Apeach" action = {this._alertHandler} />
        
      </div>
    );
  }

  _alertHandler = () => {
    alert("Why ? ");
  };
}

export default App;