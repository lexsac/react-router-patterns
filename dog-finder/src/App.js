import React from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <Routes />
    </BrowserRouter>
  );
}

export default App;
