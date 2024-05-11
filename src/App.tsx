import React from 'react';
import logo from './logo.svg';
import './App.css';
import {} from "antd";
import AppHeader from './components/AppHeader';
import PageContent from './components/PageContent';
import AppFooter from './components/AppFooter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppHeader/>
      <PageContent/>
      <AppFooter/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;


