import React from 'react';
import './style.css';

function LembreteLista({lista}) {
  return (
    <div className='container d-flex justify-content-center'>
      <div className='row justify-content-center col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12'>
        <div className='d-flex flex-column p-3 gap-2 lista-border'>
          {
            lista.map((lembrete) =>
              <div className='p-3 border border-1 border-secondary text-center'>
                {lembrete}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default LembreteLista;