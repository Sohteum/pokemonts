import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import PokeDetails from './components/PokeDetails';
import LoginPage from './components/LoginPage';
import "./css/style.css";
import "./css/login.css";
import CompHeader from './components/CompHeader';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/header",
    element: <CompHeader />
  },
  {
    path: "/PokeDetails",
    element: <PokeDetails url={url}   />
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

