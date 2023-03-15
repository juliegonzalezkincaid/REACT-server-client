// Source in our stylesheet
// 'import' is similar to 'require' on the server
// impoprt allows us to use the code/styles from app.css 

import './App.css';
import { useState } from 'react'; // useState updates the DOM when the variable changes
import CreatureList from '../CreatureList/CreatureList.jsx';

//This is how we PREVIOUSLY delcared variables
  //* let firstName = 'Chris ';
 //*  let counter = 0;
// *  counter += 1; // DO NOT modify state directly
//*   <button onClick="increaseClickCounter()">Submit</button>
 

// App is a component
// Our functions and variables will go here
function App () {
   // *    name      function     default value 
   const [counter, setCounter] = useState(0);
   const [firstName , setFirstName] = useState('Chris');

              // Function to increase/ decrease click counter
  let increaseCounter = () => {
     console.log('before', counter);
     setCounter(counter + 1);
    //! counter is not different yet
 }
  let decreaseCounter =() => {
    setCounter(counter - 1);
    console.log(counter)
    console.log('after', counter);
 }

  return (
    // This looks like HTML but is really JSX
    <div>
      <header>
        <h1>Welcome to React! {counter}</h1>
      </header>
        <p>Hello World!{firstName}</p>
        <p>You Clicked {counter} times!</p>
       
       <button onClick ={increaseCounter}> Increase </button>
       <button onClick ={decreaseCounter}> Decrease </button>
{/* Render our CreaturlList on the DOM */}
      <CreatureList />
  
    </div>
  );
}

export default App
