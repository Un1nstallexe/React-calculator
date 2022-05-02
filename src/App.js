import React from 'react';
import './App.css';
import Screen from './components/screen/screen.js';
import { Component } from 'react';
import mathParser from './components/parser/parser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'rtrrttr'

    }
  }

  onScreenChange = (text) => {
    if (text.includes("=")) {
      this.setState({
        text:mathParser(text.slice(0,-1))
      })
      console.log('bruh');
    }
    else {
      this.setState({
      text:text
    });
    }
    console.dir(text);
  }

  render () {
    return (
      <div className="shell">
      <Screen 
      text={this.state.text}
      onScreenChange={this.onScreenChange}/> 
      </div>
    )
  }
}

export default App;
