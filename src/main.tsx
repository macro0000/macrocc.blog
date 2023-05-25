import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import List from './pages/list/index.tsx';
import Detail from './pages/detail/index.tsx';

const router = createHashRouter([
  { path: '/', element: <App /> },
  { path: '/list', element: <List /> },
  { path: '/detail/:detailId', element: <Detail /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
