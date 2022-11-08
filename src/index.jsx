import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
   },
   {
      path: '/about',
      element: <About />,
   },
   {
      path: '/logement/:id',
      element: <Logement />,
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
