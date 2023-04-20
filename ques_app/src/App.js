import './App.css';
import Question from './Components/question';
import logo from './Images/friedhead.svg';
import React, { Component } from "react";


class App extends React.Component{
  state={
    question:"What is the world's deepest lake?",
    answer:"Lake Baikal, Russia, Siberia",
  };

  answerhandler = (event) => {
      this.setState({question:this.state.answer});
  };
  render(){
    
    return(
         
       <div className='overall'>
        <div className='header'>
          <img src={logo} className='imagecss spin'/>
          <div className='day'>30 days of React</div>
          <div className='subday'>Day One/ Question And Answer App</div>
        </div>
        <Question question={this.state.question} click={this.answerhandler}/>
       </div>
    );
  }
}

export default App;

