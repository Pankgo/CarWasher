import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Reserve from "./Pages/Reserve";
import UserInfo from "./Functions/UserInfo";
import Login from "./Functions/Login";
import Signup from "./Functions/Signup";
import Userinfoedit from "./Pages/Userinfoedit";

function App() {
  const [islogin, setislogin] = useState(false)
  const [UID, setUID] = useState("")
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Account" element={islogin ? <UserInfo setislogin={setislogin} UID={UID}/> : <Login setislogin={setislogin} setUID={setUID}/>}></Route>
      <Route path="/Userinfo" element={islogin ? <Userinfoedit setislogin={setislogin} UID={UID}/> : <Login setislogin={setislogin} setUID={setUID}/>}></Route>
      <Route path="/Reserve" element={islogin ? <Reserve setislogin={setislogin} UID={UID}/> : <Login setislogin={setislogin} setUID={setUID}/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
