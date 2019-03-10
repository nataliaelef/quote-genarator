import React, { Component } from 'react';
import './App.css';
import Quotes from './components/Quote';
import Button from './components/Button';
import quotes from './data/quotes';

//when we are in a class and we want to access a prop we need to use this
class App extends Component {
  state = {
    quoteIndex: 0,
    interval: null
  };
  render() {
    //we are distructuring the state so that our code is not too long
    const { quoteIndex } = this.state;

    return (
      <div className="App">
        <h1>Friends Quote Generator</h1>
        <Quotes quote={quotes[quoteIndex]} />
        <Button onClick={this.getNewQuote} text="Get New Quote" />
        <Button onClick={this.toggleAutoQuote} text="Auto Random Quotes" />
      </div>
    );
  }

  //this should be an arrow func otherwise we are getting undefined
  //we do that so that the func inherites the this from the App
  //arrow func bind the this and take it with them
  //if we don't use an arrow func it will have the this from where it gets invoked, not from the this of App
  getNewQuote = () => {
    //to amend the state
    //it takes a function
    //we dont need a func in this case as we are just getting a ramdom index from our array
    this.setState({
      quoteIndex: Math.floor(Math.random() * quotes.length)
    });
  };

  toggleAutoQuote = () => {
    if (!this.state.interval) {
      this.setState({
        interval: setInterval(this.getNewQuote, 2000)
      });
    } else {
      clearInterval(this.state.interval);
      this.setState({ interval: null });
    }
  };
}

export default App;
