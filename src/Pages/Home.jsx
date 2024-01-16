import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Styles/Home.css'
import Search from "./Search";

function Home(){
  const [text , setText] = useState("")

  function ButtonClick(e){
    console.log(e)
    setText(e.target.alt)
  }
  return(
    <div className="main">
    <Search/>
    <br/>
    <button className="left"><img className="nearimg" src="img/nearwash.png"/> 주변 매장 보기</button>
    <button className="right"><img className="mapimg" src="img/map.png"/> 지도에서 보기</button>
    <br/>
    <br/>
    <h4 className="text">내 주변 세차장</h4>
    <div><img className="washimg" src="img/SAMPLE.png"/><h5> @@@세차장</h5><h6> 어쩌구저쩌구어쩌라구</h6></div>
    <div><img className="washimg" src="img/SAMPLE.png"/><h5> @@@세차장</h5><h6> 어쩌구저쩌구어쩌라구</h6></div>
    <div><img className="washimg" src="img/SAMPLE.png"/><h5> @@@세차장</h5><h6> 어쩌구저쩌구어쩌라구</h6></div>
    <br/>
    <h4 className="text">내 주변 세차업자</h4>
    <div><img className="washimg" src="img/SAMPLE.png"/><h5> @@@</h5><h6> 어쩌구저쩌구어쩌라구</h6></div>
    <div><img className="washimg" src="img/SAMPLE.png"/><h5> @@@</h5><h6> 어쩌구저쩌구어쩌라구</h6></div>
    <div><img className="washimg" src="img/SAMPLE.png"/><h5> @@@</h5><h6> 어쩌구저쩌구어쩌라구</h6></div>
    <div className="bottom">
      <ul>
      <Link to = "/Reserve" className="bottomleft"><li><img alt="예약" onClick={ButtonClick} className="bottomimg" src="img/reserve.png"/></li></Link> 
      <Link to = "/Home" className="bottomiddle"><li><img alt="홈" className="bottomimg" src="img/home.png"/></li></Link> 
      <Link to = "/Userinfo" className="bottomright"><li><img alt="계정" className="bottomimg" src="img/account.svg"/></li></Link> 
      </ul>
    </div>
    </div>
  )
}

export default Home
