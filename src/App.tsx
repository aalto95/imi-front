import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import './App.css';
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import MainPage from './pages/MainPage'
import { isSidebarActiveState } from './recoil/selectors/sidebarSelector'
import { enGB, eo, ru } from 'date-fns/locale'

declare const window: any;

const App = () => {
  const isSidebarActive = useRecoilValue(isSidebarActiveState)
  useEffect(() => {
    window.__localeId__ = 'ru'
  }, []);
  return (
    <div>
      <Header />
      {isSidebarActive && <Sidebar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
