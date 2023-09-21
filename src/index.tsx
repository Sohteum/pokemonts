import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import PokeDetails from './components/PokeDetails';
import { RecoilRoot } from 'recoil';
import LoginPage from './components/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/PokeDetails",
    element: <PokeDetails />
  },
  {
    path: "/login",
    element: <LoginPage />
  }

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
 <RecoilRoot>
    <RouterProvider router={router} />
 </RecoilRoot>
);

