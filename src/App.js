import './App.css';
import React, { useState } from 'react';
import LembreteEntrada from './components/LembreteEntrada';
import LembreteLista from './components/LembreteLista';

function App() {
  const [reminders, setReminders] = useState([
    'Fazer o projeto de PDM',
    'Levar o peixe para tomar banho',
    'Trazer a vó do jiu-jitsu',
    'Comprar passagem para Florianópolis'
  ]);

  return (
    <div className="App container">
      <div className="row mt-5">
        <div>
          <LembreteLista lista={reminders} />
          <LembreteEntrada />
        </div>
      </div>
    </div>
  );
}

export default App;
