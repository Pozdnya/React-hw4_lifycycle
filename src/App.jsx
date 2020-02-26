import React from 'react';
import Button from './components/Button/index'
import ButtonFC from './components/ButtonFC/index'
import './App.css';

function App() {
  return (
    <>
      <p className ='p'>Классовый компонент</p>
      <Button />
      <p className ='p'>Функциональный компонет</p>
      <ButtonFC />
    </>
  )
}

export default App;
