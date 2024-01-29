import React, { useCallback, useState } from "react";
import BottomRouter from "../Routers/BottomRouter";
import axios  from "axios";
import '../Styles/Login.css'
import { Link } from "react-router-dom";

function Login({setislogin}){
    const [Id, setId] = useState("")
    const [Password, setPassword] = useState("")

    const Idtype = (event) => {
        setId(event.target.value)
    }
    const Passwordtype = (event) => {
        setPassword(event.target.value)
    }

    const onSubmit = useCallback((event) => {
        event.preventDefault()

        setislogin(true)

        console.log('Id', Id);
        console.log('Password', Password)
    }, [Id,Password])
        
    function toSignup(){
      <ul><Link to = '/Signup'><li>회원가입</li></Link></ul> 
    }
    return(
        <>
        <div className="login">
        <form className="loginform" onSubmit={onSubmit}>
            <label>사용자 아이디</label>
            <input type="Id" value={Id} onChange={Idtype}/>
            <br/>
            <label>비밀번호</label>
            <input type="password" value={Password} onChange={Passwordtype}/>
            <br/>
            <button>로그인</button>
        </form>
        <div className="signup">
        <h5>회원이 아니신가요?</h5><button><Link to = '/Signup'><li>회원가입</li></Link></button>
        </div>
        </div>
        <div className="Navi">
      <BottomRouter/>
    </div>
    </>
    )
}

export default Login