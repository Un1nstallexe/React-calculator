import React from 'react';
import './App.css';
import Screen from './components/screen/screen.js';
import Keypad from './components/keypad/keypad';
import { Component } from 'react';
import mathParser from './components/parser/parser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:""
    }
  }
  evalText = (a)=>{
    this.setState(({
      text:`${mathParser(a)}`
    }));
    console.log(this.state.text)
  }
  filterMistakes = (string)=>{
    const arr = string.replace(/\s/g, '')
    .match(/[+\-*/)(√]|([0-9.eπ\s]+)/g) || [];
    console.log(arr);
    if (arr[arr.length-1] && (arr[arr.length-1].match(/\./g) || []).length>1) {
      this.clear();
    }
  }
  onScreenChange = (text) => {
    console.log(text)
    if (text.includes("=")) {
      this.evalText(text.slice(0,-1));
    } else {
      this.setState({
      text:text
    });
    this.filterMistakes(text);
    }  
  }

  onTypeText = (string)=> {
    if (string==='=') {
      this.evalText(this.state.text)
    } else {
      this.setState(({text})=>({
      text: text + string
    })); 
    this.filterMistakes(this.state.text+string);
    }
    console.log(this.state.text);
  }

  clear = ()=>{
    this.setState(({text})=>({
      text:text.slice(0,-1)
    }))
  }

  clearAll = ()=>{
    this.setState(({text})=>({
      text:''
    }))
  }

  render () {
    return (
      <div className="calc-wrapper">
      <Screen 
      text={this.state.text}
      onScreenChange={this.onScreenChange}/> 
      <Keypad
      typeText={this.onTypeText}
      clear={this.clear}
      clearAll={this.clearAll}/>
      </div>
    )
  }
}

export default App;
