import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserInfo from "./Pages/UserInfo";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/UserInfo" element={<UserInfo/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
