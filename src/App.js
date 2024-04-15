import './App.css';
import React, { useState } from 'react';
import LembreteEntrada from './components/LembreteEntrada';
import LembreteLista from './components/LembreteLista';

function App() {
  const [reminders, setReminders] = useState([]);

  function handleInputDone(inputValue) {
    if (inputValue.trim() != "") {
      setReminders([...reminders, inputValue])
    }
  }

  return (
    <div className="App container">
      <div className="row mt-5">
        <div>
          <LembreteLista lista={reminders} />
          <LembreteEntrada onInputDoneCallback={handleInputDone}/>
        </div>
      </div>
    </div>
  );
}

export default App;
