import { createContext } from 'react';
import './App.css';
import CompA from './Components/CompA';

const FirstName = createContext();
function App() {
  return (
    <>
      <FirstName.Provider value={"Srijani"}>
          <CompA/>
      </FirstName.Provider>
    </>
    
    
  );
}

export default App;
export {FirstName};
