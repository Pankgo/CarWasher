import React from 'react';
import '../Styles/UserInfo.css'
import '../Styles/Home.css'
import BottomRouter from '../Routers/BottomRouter';


function Userinfoedit({setislogin, UID}){
      return (
        <div className='main'>
        <h1 className='title'>계정 정보</h1>
        <div className = "center">
            <br/>
            <div className='infoedit'>
                <h3>이름</h3>
                <h3>{(UID.name)}</h3>
            </div>
            <button className='change'>변경</button>
            <br/>   
            <div className='infoedit'>
                <h3>차량번호</h3>
                <h3>{(UID.carnumber)}</h3>
            </div>
            <button className='change'>변경</button>
            <br/>
            <div className='infoedit'>
                <h3>전화번호</h3>
                <h3>{(UID.phone)}</h3>
            </div>
            <button className='change'>변경</button>
              <div className="Navi">
                <BottomRouter/>
          </div> 
        </div>
        </div>
      );
    }

  export default Userinfoedit;