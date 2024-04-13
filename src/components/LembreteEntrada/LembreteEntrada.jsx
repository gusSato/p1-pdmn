import React from 'react';
import './style.css';

function LembreteEntrada() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row d-flex flex-column col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12">
        <input className="type-reminder fs-5 p-3 mt-4 border border-1 border-secondary text-center" type="text" placeholder="Digite seu novo lembrete" />
        <button className="ok-btn fs-6 p-3 mt-2 border border-0">
          OK
        </button>
      </div>
    </div>
  );
}

export default LembreteEntrada;