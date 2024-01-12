import React from "react";
import './App.css'

function App(){
  return(
    <div className="main">
    <div><button className="search"><img src="img/search.png"/></button>
    <input placeholder="매장검색" className="searchtext"></input></div>
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
      <button className="bottomleft"><img className="bottomimg" src="img/reserve.png"/></button>
      <button className="bottomiddle"><img className="bottomimg" src="img/home.png"/></button>
      <button className="bottomright"><img className="bottomimg" src="img/account.svg"/></button>
    </div>
    </div>
  )
}

export default App