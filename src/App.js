
import React, { Component } from 'react'
import Greeting from './Greeting';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
    this.handleIncrement=this.handleIncrement.bind(this);
    this.handleDecrement=this.handleDecrement.bind(this);
    this.handleRefresh=this.handleRefresh.bind(this);
  }
  handleIncrement=()=>{
    this.setState(
      {
        count:this.state.count+1
      }
    )
  }
  handleDecrement=()=>{
    if(this.state.count>0){
      this.setState(
        {
          count:this.state.count-1
        }
      )
    }
  }
  handleRefresh=()=>{
    this.setState({
      count:0
    })
  }
  render() {
    const count=this.state.count;
    const name=this.props.name;
    return (
      <div className="App">
       <Greeting name={name} greet="How are you doing?"/>
        <h1>count:-{count}</h1>
        <button style={{background:"yellow"}}onClick={this.handleIncrement}>Increment</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{background:"yellow"}}onClick={this.handleDecrement}>Decrement</button><br/>
        <button style={{background:"Green"}}onClick={this.handleRefresh}>Refresh</button>
      </div>
    )
  }
}




