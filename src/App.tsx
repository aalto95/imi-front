import React from 'react';
import './App.css';
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import TileBlocks from './components/TileBlocks'

function App() {
  return (
    <div>
      <Header />
      <TileBlocks />
      <Footer />
    </div>
  );
}

export default App;
