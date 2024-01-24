import React, { useCallback, useState} from "react";
import BottomRouter from "./BottomRouter";
import axios from 'axios';
import '../Styles/Login.css'

function Login({setislogin}){
    const [Id, setId] = useState("")
    const [Password, setPassword] = useState("")
    
        const Idtype = (event) => {
            setId(event.target.value)
        }
        const Passwordtype = (event) => {
            setPassword(event.target.value)
        }
        const onSubmit = useCallback(async (event) => {
            event.preventDefault();
            setislogin(true);
        
            try {
                const response = await axios.post('http://localhost:8080/CheckUser', {
                    id: Id,
                    password: Password,
                });
        
                if (response.status === 200) {
                    const data = response.data;
                    // 로그인 성공 시 처리
                    console.log(data);
                } else {
                    // 로그인 실패 시 처리
                    console.error('Login failed');
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }, [Id, Password]);
        

    return(
        <div className="login">
        <form className="loginform" onSubmit={onSubmit}>
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