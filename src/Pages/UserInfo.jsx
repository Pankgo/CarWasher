import React, { Component } from 'react';
import '../Styles/UserInfo.css'
import UserName from './PtruserName';

class UserInfo extends Component {
    render () {
      return (
        <body>
        <h2>MYInfo</h2>
        <div class = "center">
          <div class = "imgcontent">
              <img class = "headuser" src="img/user1.png" alt="사용자1 아이콘" />
              <UserName></UserName>
          </div>
          <div class = "admin">
              <p class = "contenthead">관리</p>
              <div class = "imgcontent">
                <img class = "imgcss" src="img/carwash1.png" alt="과거 예약 아이콘" />      
                <p class = "imgtext">과거예약</p>
              </div>
              <div class = "imgcontent"> 
                <img class = "imgcss" src="img/review.png" alt="리뷰 아이콘" /> 
                <p class = "imgtext">리뷰</p>
              </div>
          </div>
          <div class = "myBest">
              <p class = "contenthead">마이베스트</p>
              <div class = "imgcontent">
                <img class = "imgcss" src="img/user2.png" alt="사용자2 아이콘" />      
                <p class = "imgtext">세차업자</p>
              </div>
              <div class = "imgcontent"> 
                <img class = "imgcss" src="img/carwash1.png" alt="세차장 아이콘" /> 
                <p class = "imgtext">세차장</p>
              </div>
          </div>
          <div class = "userCenter">
              <p class = "contenthead">고객 센터</p>
              <div class = "imgcontent">
                <img class = "imgcss" src="img/call1.png" alt="고객센터 연결 아이콘" />      
                <p class = "imgtext">고객센터 연결</p>
              </div>
              <div class = "imgcontent"> 
                <img class = "imgcss" src="img/report.png" alt="공지사항 아이콘" /> 
                <p class = "imgtext">공지사항</p>
              </div>
              <div class = "imgcontent"> 
                <img class = "imgcss" src="img/mail.png" alt="1:1문의 아이콘" /> 
                <p class = "imgtext">1:1 문의</p>
              </div>
          </div> 
        </div>
        </body>
      );
    }
  }

  export default UserInfo;