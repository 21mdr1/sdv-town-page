import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Festivals from './pages/Festivals/Festivals';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/festivals' element={<Festivals />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
