import './App.css';
import React from 'react';
import logo from './Images/friedhead.svg';
import Color from './Components/Color';

class App extends React.Component
{
  state={
    color1:"138",
    color2:"131",
    color3:"198",
  };

  colorgenerator = () => {
    return Math.floor(Math.random()*250)+1;
  };

  colorHandler = (event) => {
    this.setState({
      color1:this.colorgenerator(),
      color2:this.colorgenerator(),
      color3:this.colorgenerator(),
    }
    )
  };

  render(){

    return(
      <div>
        <div className='overall'>
          <div className='header'>
            <img src={logo} className='imagecss spin'/>
            <div className='day'>30 days of React</div>
            <div className='subday'>Day Three/ Random Colour Picker App</div>
          </div>
          
          <Color  color1={(this.state.color1).toString()}
                  color2={(this.state.color2).toString()}
                  color3={(this.state.color3).toString()}
                  colorHandler={this.colorHandler}
          />
         </div>
      </div>
    );
  }
}

export default App;
