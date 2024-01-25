import React, { useCallback, useState } from "react";
import BottomRouter from "../Routers/BottomRouter";
import axios  from "axios";
import '../Styles/Login.css'

function Signup(){
    const [Id, setId] = useState("")
    const [Password, setPassword] = useState("")

    const Idtype = (event) => {
        setId(event.target.value)
    }
    const Passwordtype = (event) => {
        setPassword(event.target.value)
    }

    return(
        <div className="login">
        <form className="loginform" >
            <label>아이디</label>
            <input type="Id" value={Id} onChange={Idtype} placeholder="사용할 아이디"/>
            <br/>
            <label>비밀번호</label>
            <input type="password" value={Password} onChange={Passwordtype}placeholder="사용할 비밀번호"/>
            <br/>
            <button>신청하기</button>
        </form>
        <div className="Navi">
      <BottomRouter/>
    </div>  
        </div>
        
    )
}

export default Signup