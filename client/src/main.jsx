import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProjectContextProvider from './context/Project.jsx'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.querySelector(`#root`)).render(
  <React.StrictMode>
   <ProjectContextProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
   </ProjectContextProvider>
  </React.StrictMode>
);
