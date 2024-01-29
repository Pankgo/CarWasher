import BottomRouter from './BottomRouter';
import '../Styles/ReviewList.css';
import { useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

function ReviewList(){

    const [reviews, setReviews] = useState([]);
    const [option, selectOption] = useState("latest");



    //사용자 리뷰 가져오는 함수
    const getReviews = async () => {
        try {
          const result = await axios.get("http://localhost:8080/review"); 
          setReviews(result.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      // 선택별 출력값을 달리하는 함수
      const filteredReviews = reviews.filter((review) => {
        if (option === 'latest') {
          return true; // 모든 리뷰를 표시
        } else if (option === 'long') {
          return review.division === '장기'; // 장기만 표시
        } else if (option === 'short') {
          return review.division === '단기'; // 단기만 표시
        }
        return false; 
      });

      //필터링된 리뷰들 출력 
      const Printreviews = filteredReviews.map((review, index) => {
        return (
          <Link to = {`/ReviewInfo/${review.reviewID}`} key={index} className = "custom-link"> 
          <div className='disflex' key={index}>
            <input type="checkbox" className='circlecheck' />
            <div className='Infobox'>
              <p>{review.washer}</p>
              <p>{review.division}</p>
              <p>{review.date}</p>
            </div>
          </div></Link>
        );
      });

      const handleSortreview = (e) => {
        const selectedValue = e.target.value;
        selectOption(selectedValue);
      };

      useEffect(() => {
        getReviews();
      }, []);
return(
    <div>
        <div className='All'>
            <div className='disflex'>
                <img className='reviewimg' src = "img/Features List.png"></img>
                <h1>리뷰관리</h1>
            </div>
            <div>
            <select id="selectsort" className = 'selectsortbut' onChange={handleSortreview}
        value={option}>
                <option value="latest" className = "selectoption">최신순</option>
                <option value="long" className = "selectoption">장기세차</option>
                <option value="short" className = "selectoption">단기세차</option>
            </select>
            </div>
            <div className = "reviewList">
                {Printreviews}
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
