import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import PokeDetails from './components/PokeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/PokeDetails",
    element: <PokeDetails />
  }

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

