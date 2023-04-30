import React from "react";
import logo from "./Images/friedhead.svg";
import './App.css';
import FactButton from "./Components/FactButton";
import FactBox from "./Components/FactBox";



class App extends React.Component
{
  state={
    fruits:[
     { name:"Banana", fact: "I am yellow in Colour"},
     { name:"Apple", fact: "Grab me and bye,bye docs!"},
     { name:"Watermelon", fact: "I have a lot of seeds, duh!"},
    ],

    showFruits:false,
    showFruitMessage:"Show The Fruit Facts!"
  };

  showFruitHandler = (event) => {
      const currentState=this.state.showFruits;
      this.setState({showFruits: !currentState});
      if(currentState === true)
      this.setState({showFruitMessage:"Show Me The Fruits"});
      else
      this.setState({showFruitMessage:"Ah.... boring Facts!"});
  };



  render(){
    let factStyle={display: this.state.showFruits ? "flex" : "none"};
    return(
      <div className='overall'>
      <div className='header'>
        <img src={logo} className='imagecss spin'/>
        <div className='day'>30 days of React</div>
        <div className='subday'>Day Four/ Fun Fruit Facts App</div>
      </div>
        <FactButton messagehandler={this.showFruitHandler} message={this.state.showFruitMessage}/>
        <div className="fruitfacts" style={factStyle}>
        <FactBox fruit={this.state.fruits[0].name} fact={this.state.fruits[0].fact}/>
        <FactBox fruit={this.state.fruits[1].name} fact={this.state.fruits[1].fact}/>
        <FactBox fruit={this.state.fruits[2].name} fact={this.state.fruits[2].fact}/>
        </div>
        
     </div>
    );
  }
}

export default App;