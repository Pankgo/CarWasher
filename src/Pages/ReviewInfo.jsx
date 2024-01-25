import BottomRouter from './BottomRouter';
import '../Styles/ReviewInfo.css';
import React from "react";
function ReviewInfo(){

return(
    <div>
        <div className="all">
            <div>
                <h1>상세리뷰관리</h1>
            </div>
            <div>
                <img className = "Imgborder"></img>
                <button className = "enrollImgbutton">사진 첨부</button>
            </div>
            <div>
                <p>구분</p>
                <p>차량</p>
                <p>세차업자</p>
            </div>
            <div>
                <div className="star-rating">
                    <input type="radio" className="star" value="1"></input>
                    <input type="radio" className="star" value="2"></input>
                    <input type="radio" className="star" value="3"></input>
                    <input type="radio" className="star" value="4"></input>
                    <input type="radio" className="star" value="5"></input>
                </div>
            </div>
            <input className='reviewbox' type = "text" value = " " placehorder = "텍스트 입력" ></input>
            <button className='enrollreviewbutton'>등록</button>
        </div>
        <div className="Navi">
            <BottomRouter/>
        </div>
    </div>
)

}
export default ReviewInfo;

