import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import router from './router';
import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="main">
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);