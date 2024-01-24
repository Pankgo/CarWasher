import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Account from "./Pages/AccountRouter"
import WashResult from "./Pages/WashResultRouter"
import ReviewList from "./Pages/ReviewList"

function App() {

 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Account" element={<Account/>}></Route>
      <Route path = "/WashResult" element = {<WashResult/>}></Route>
      <Route path = "/ReviewList" element = {<ReviewList/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
