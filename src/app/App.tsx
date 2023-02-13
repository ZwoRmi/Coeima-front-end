import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../components/footer/Footer';
import { Navbar } from '../components/navbar/Navbar';
import { Account } from '../pages/account/Account';
import { Forum } from '../pages/forum/Forum';
import { Home } from '../pages/home/Home';
import { Service } from '../pages/service/Service';
import { Login } from '../pages/connection/Login';
import { Register } from '../pages/connection/Register';


// npm i react router dom=>Import BrowserRouter/react-router-dom;Route,Routes/react-router-dom' permettant de créer les routes du site-----------//

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
