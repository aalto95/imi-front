import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
