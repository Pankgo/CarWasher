import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/UserInfo.css'
import '../Styles/Home.css'
import BottomRouter from '../Routers/BottomRouter';

function UserInfo({setislogin, UID, setUID, modalvalue, setmodalvalue, openModal, closeModal, modalopen, modalstyle}){
  const Logout = () =>{
    setislogin(false)
  }
      return (
        <div className='main'>
        <h1 className='title'>MYInfo</h1>
        <div className = "center">
          <div className = "imgcontent">
              <img className = "headuser" src="img/user1.png" alt="사용자1 아이콘" />
              <h2>{(UID.name)} 님 반갑습니다</h2>
              {console.log(UID)}
          </div>
          <br/>
          <div className = "content">
            <br/>
            <div className='imgcontent'>
            
            <button><Link to = "/Userinfo"><img className = "imgcss" src="img/user1.png" alt="사용자1 아이콘" /></Link></button>
            <p className='imgtext'>내 정보</p>
            </div>
              <div className = "imgcontent">
                <img className = "imgcss" src="img/carwash1.png" alt="과거 예약 아이콘" />      
                <p className = "imgtext">과거예약</p>
              </div>
              <div className = "imgcontent"> 
                <img className = "imgcss" src="img/review.png" alt="리뷰 아이콘" /> 
                <p className = "imgtext">리뷰</p>
              </div>
              <br/>
          </div>
          <br/>
          <div className = "content">
              <p className = "contenthead">즐겨찾는</p>
              <div className = "imgcontent">
                <img className = "imgcss" src="img/user2.png" alt="사용자2 아이콘" />      
                <p className = "imgtext">세차업자</p>
              </div>
              <div className = "imgcontent"> 
                <img className = "imgcss" src="img/carwash1.png" alt="세차장 아이콘" /> 
                <p className = "imgtext">세차장</p>
              </div>
              <br/>
          </div>
          <br/>
          <div className = "content">
              <p className = "contenthead">고객 센터</p>
              <div className = "imgcontent">
                <img className = "imgcss" src="img/call1.png" alt="고객센터 연결 아이콘" />      
                <p className = "imgtext">고객센터 연결</p>
              </div>
              <div className = "imgcontent"> 
                <img className = "imgcss" src="img/report.png" alt="공지사항 아이콘" /> 
                <p className = "imgtext">공지사항</p>
              </div>
              <div className = "imgcontent"> 
                <img className = "imgcss" src="img/mail.png" alt="1:1문의 아이콘" /> 
                <p className = "imgtext">1:1 문의</p>
              </div>
              <br/>
              </div>
              <button className='logout' onClick={Logout}>로그아웃</button>
              <div className="Navi">
                <BottomRouter/>
          </div> 
        </div>
        </div>
      );
    }

  export default UserInfo;