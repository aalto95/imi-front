import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import './App.css';
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import MainPage from './pages/MainPage'
import TestPage from './pages/TestPage'
import { isSidebarActiveState } from './recoil/selectors/sidebarSelector'

const App = () => {
  const isSidebarActive = useRecoilValue(isSidebarActiveState)
  return (
    <div>
      <Header />
      {isSidebarActive && <Sidebar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path="/test_page" element={<TestPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
