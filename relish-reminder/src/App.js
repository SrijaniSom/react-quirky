
import './App.css';
import Relish from './Components/Relish';
import logo from "./Images/friedhead.svg";
import React, {Component} from "react";

class App extends React.Component {
  state = {
    relishStyles: [
      { name: 'Branston Pickle', description: 'A british pickle that is brown in colour' },
      { name: 'Fruit Chutney', description: 'A chutney, surprisingly made of fruits' },
      { name: 'Onion Jam', description: 'A sweet chutney made of onions' },
      { name: 'Tomato Relish', description: 'A classic made with apples and tomatoes' },
      { name: 'Picalilli', description: 'Its a yellow one that tastes weird' },
      { name: 'Mango Chutney', description: 'A spicy one, served with Indian currys' },
    ],
  };

  relishesHandler = (relishIndex) => {
    const relishes = [...this.state.relishStyles];
    relishes.splice(relishIndex, 1);
    this.setState( { relishStyles: relishes } )
  };
  
render(){

  let relish = null;

if (this.state.relishStyles.length > 0) {
  relish = (
    <div>
      {
        this.state.relishStyles.map((relish, index) => {
          return <Relish
            className='item'
            name={relish.name}
            description={relish.description}
            click={() => this.relishesHandler(index)}
          />
        })
      }
    </div>
  )
}

else {
  relish = (
    <div style={{justifyContent:"center",display:"flex",flexDirection:"column",gap:"1rem"}}>
      <h1 style={{marginTop:"1rem",color:"#8a83c6",marginBottom:"0.5rem"}}>Don't Forget About Relishes</h1>
      <button style={{marginTop:"1rem",fontSize:"18px",textAlign:"center",marginLeft:"30%",width:"40%",marginRight:"30%",background:"white",color:"black"}}
      onClick={() => window.location.reload()}>OK</button>
    </div>
  )
}



  return (
    <div className='overall'>
      <div className='header'>
        <img src={logo} className='imagecss spin' />
        <div className='day'>30 days of React</div>
        <div className='subday'>Day Five/ Relish Reminder App</div>
      </div>

      <div className='container'>
        {relish}
      </div>
    </div>
  );
}
 
}

export default App;