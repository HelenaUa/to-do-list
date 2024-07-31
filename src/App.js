// import logo from './logo.svg';
import React, { Suspense } from 'react';
// import { ThemeProvider } from '@mui/material';
// import { theme } from 'theme';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <>
      <BrowserRouter basename="/to-do-list">
        <Suspense fallback={<div>...Loading</div>}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
