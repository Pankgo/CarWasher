import React, { useCallback, useState, useEffect } from "react";
import BottomRouter from "../Routers/BottomRouter";
import axios  from "axios";
import '../Styles/Account.css'
import { Link } from "react-router-dom";
import DB from "../Middleware/Middleware";

function Login({setislogin, setUID}){
    const [Id, setId] = useState("")
    const [Password, setPassword] = useState("")

    const Idtype = (event) => {
        setId(event.target.value)
    }
    const Passwordtype = (event) => {
        setPassword(event.target.value)
    }

    const [result, setResult] = useState([]);

        const logincheck = async () => {
            try {
              const response = await axios.get(DB);
              console.log(response);
              setResult(response.data);
              console.log(result);
        
              const Logincheck = response.data.find((item) => item.id === Id &&item.password === Password);
              if (Logincheck === undefined) {
                console.log("error");
                setislogin(false);
                alert("아이디또는 비밀번호를 확인하세요!")
              }
              else
              {console.log("correct!"); setislogin(true);
                setUID(response.data.find((item) => item.id === Id && item.name))
            };
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
        
          const handleLogin = (e) => {
            e.preventDefault(); // 폼의 기본 동작 막기
            logincheck();
          };
        
          useEffect(() => {
            console.log(result);
          }, [result]);
        
    return(
        <>
        <div className="login">
        <form className="loginform" onSubmit={handleLogin}>
            <label>사용자 아이디</label>
            <input type="Id" value={Id} onChange={Idtype}/>
            <br/>
            <label>비밀번호</label>
            <input type="Password" value={Password} onChange={Passwordtype}/>
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