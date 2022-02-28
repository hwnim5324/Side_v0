import React from 'react';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Reset } from 'styled-reset';

import Main from './pages/Main';
import SignIn from './pages/SignIn';
import Layout from './components/Layout';

render(
  <BrowserRouter>
  <Reset />
    <Layout>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/SignIn' element={<SignIn />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();