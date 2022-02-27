import React from 'react';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Menu from './components/Menu';

render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();