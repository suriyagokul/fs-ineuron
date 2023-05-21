import React, {createContext} from 'react'
import Card from './Card';

export const myContext = createContext();

 const App = () => {
  let email = "abcdef@gmail.com";
  let fname = "suriya";
  return (
    <myContext.Provider value={{email, fname}}>
      <div>
        App
        <Card />
      </div>
    </myContext.Provider>
  )
}

export default App;

