import React from 'react';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Reset } from 'styled-reset';

import Layout from './components/Layout';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import FindId from './pages/FindId';
import FindPw from './pages/FindPw';
import SignUp from './pages/SignUp';

render(
  <BrowserRouter>
  <Reset />
    <Layout>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/FindId' element={<FindId />} />
        <Route path='/FindPw' element={<FindPw />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();