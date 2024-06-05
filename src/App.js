// import logo from './logo.svg';
import React, { Suspense } from 'react';
// import { ThemeProvider } from '@mui/material';
// import { theme } from 'theme';
import { HashRouter } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={<div>...Loading</div>}>
          <AppRoutes />
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
