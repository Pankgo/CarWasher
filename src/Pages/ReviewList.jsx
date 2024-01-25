import BottomRouter from './BottomRouter';
import '../Styles/ReviewList.css';

function ReviewList({ reviewList }){

return(
    <div>
        <div className='All'>
            <div className='disflex'>
                <img className='reviewimg' src = "img/Features List.png"></img>
                <h1>리뷰관리</h1>
            </div>
            <div>
            <select id="selectsort" className = 'selectsortbut'>
                <option value="latest" className = "selectoption">최신순</option>
                <option value="washer" className = "selectoption">세차업자만</option>
                <option value="center" className = "selectoption">세차장만</option>
            </select>
            </div>
            <div className = "reviewList">
                <div className='disflex'>
                    <input type = "checkbox" className='circlecheck' ></input>
                    <div className='Infobox'>
                        <p>00세차장</p>
                        <p>23.05.15</p>
                    </div>
                </div>
                <div className='disflex'> 
                    <input type = "checkbox" className='circlecheck'></input>
                    <div className='Infobox'>
                        <p>00세차장</p>
                        <p>23.05.15</p>
                    </div>
                </div>
                <div className='disflex'>
                    <input type = "checkbox" className='circlecheck'></input>
                    <div className='Infobox'>
                        <p>00세차장</p>
                        <p>23.05.15</p>
                    </div>
                </div>
                <div className='disflex'>
                    <input type = "checkbox" className='circlecheck'></input>
                    <div className='Infobox'>
                        <p>00세차장</p>
                        <p>23.05.15</p>
                    </div>
                </div>
                <button className = "delbutton">삭제</button>
            </div>
        </div>
        <div className = "Navi">
            <BottomRouter/>
        </div>
        
    </div>

)

}
export default ReviewList;
