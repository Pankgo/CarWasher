import BottomRouter from './BottomRouter';
import '../Styles/WashResult.css';

function WashResult(){

return(
    <div>
        <div className = "all">
            <h1>세차 결과 </h1>
            <div>
            <img className="result_img" /> 
            </div>
            <div className = "flexdisplay">
                <p>세차 날짜 </p>
                <div className = "Infobox">세차 날짜</div>
            </div>
            <div className = "flexdisplay"> 
                <p>세차 시간</p>
                <div className = "Infobox">세차 시간</div>
            </div>
            <div >
                <p>요구 사항</p>
                <div className = "questbox">요구사항 내용</div>
            </div>
            <div>
                <p>세차업자 코멘트</p>
                <div className = "questbox">코멘트 내용</div>
            </div>
            <div>
                <button className = "butt rewash">세차 재진행</button>
                <button className = "butt play"> 결제</button>    
            </div>
        </div>
        <div className="Navi">
        <BottomRouter/>
        </div>
    </div>
)

}
export default WashResult;

