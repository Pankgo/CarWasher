import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Reserve from "./Pages/Reserve";
import UserInfo from "./Functions/UserInfo";
import Login from "./Functions/Login";
import Signup from "./Functions/Signup";

function App() {
  const [islogin, setislogin] = useState(false)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Account" element={islogin ? <UserInfo setislogin={setislogin}/> : <Login setislogin={setislogin}/>}></Route>
      <Route path="/Reserve" element={islogin ? <Reserve setislogin={setislogin}/> : <Login setislogin={setislogin}/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
