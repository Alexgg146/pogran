import React from 'react';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import { Admin } from './components/Admin/Admin';
import { Route, Routes } from 'react-router-dom';
function App() {
    return (
        <div className='app'>
          <Routes>
            <Route path="/" element={<> <Header/>
          <Main/></>}></Route>
          <Route path="/admin" element={<> <Header/>
          <Admin/></>}></Route>
          </Routes>
        </div>
    );
}

export default App;
