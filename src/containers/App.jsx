import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';

const App = () => {
  return (
    <div className='grid-container'>
      <Header />
      <aside className='sidenav' />
      <main className='main' />
      <footer className='footer' />
    </div>
  );
};

export default App;
