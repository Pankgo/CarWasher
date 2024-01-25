import React, { useEffect,useCallback, useState} from "react";
import BottomRouter from "./BottomRouter";
import axios from 'axios';
import '../Styles/Login.css'

function Login({setislogin}){
    const [Id, setId] = useState("")
    const [Password, setPassword] = useState("");

        const Idtype = (event) => {
            setId(event.target.value)
        }
        const Passwordtype = (event) => {
            setPassword(event.target.value)
        }
        

        const [result, setResult] = useState([]);

        const logincheck = async () => {
            try {
              const response = await axios.get("http://localhost:8080/users");
              console.log(response);
              setResult(response.data);
              console.log(result);
        
              const test1 = response.data.find((item) => item.id === Id &&item.password === Password);
              if (test1 === undefined) {
                console.log("error");
                setislogin(false);
              }
              else{console.log("correct!"); setislogin(true)};
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
        <div className="login">
        <form className="loginform" onSubmit={handleLogin}>
            <label>사용자 아이디</label>
            <input type="id" value={Id} onChange={Idtype}/>
            <br/>
            <label>비밀번호</label>
            <input type="password" value={Password} onChange={Passwordtype}/>
            <br/>
            <button  type="">로그인</button>
        </form>
        <div className="Navi">
      <BottomRouter/>
    </div>
        </div>
        
    )
}

export default Login