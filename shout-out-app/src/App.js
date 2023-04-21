import './App.css';
import Shoutinput from './Components/Shoutinput';
import Shoutoutput from './Components/Shoutoutput';
import logo from './Images/friedhead.svg';
import React from "react";
class App extends React.Component
{
  state={
    shout:"",
  };

  shoutHandler = (event) => {
    this.setState({shout: event.target.value})
  };

  render(){
    return (
      <div>
        <div className='overall'>
          <div className='header'>
            <img src={logo} className='imagecss spin'/>
            <div className='day'>30 days of React</div>
            <div className='subday'>Day Two/ Shout-Out App</div>
          </div>
          <Shoutinput shouthandler={this.shoutHandler}/>
          <Shoutoutput shoutval={(this.state.shout).toUpperCase()}/>
         </div>
      </div>
    );
  }
}

export default App;
