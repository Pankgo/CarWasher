import BottomRouter from './BottomRouter';
import '../Styles/WashCenterInfo.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';

const WashCenterInfo = () => {

    const [centerInfo, setcenterInfo] = useState({});
    const {centerInfojson} = useParams();

    const GetcenterInfo = async() => {
        try {
            const result = await axios.get(`http://localhost:3002/washcenter/${centerInfojson}`)
            console.log(result);
            setcenterInfo(result.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        GetcenterInfo()
        },[]);

return(
<div>
<img className='washCenterImg'></img>
<div className='All'>
        <div>
            <h1>{centerInfo.name} 세차장</h1>
            <div className='flexbox ratingText'>
                <p className='centerrating'>★</p>
                <p>{centerInfo.rating}</p>
            </div>
        </div>
    <div className='flexbox'>
        <p>영업시간</p>
        <div className='All'>
             {centerInfo.weekdayTime ? <p>평일 {centerInfo.weekdayTime[0]}시~{centerInfo.weekdayTime[1]}시</p> 
             : <p>평일 없음</p>}
             {centerInfo.holiydayTime ? <p>주말 {centerInfo.holiydayTime[0]}시~{centerInfo.holiydayTime[1]}시</p> 
             : <p>주말 없음</p>}
        </div>
    </div>
    <div className='flexbox'>
        <p>휴무일</p>
        <p className='restDateText'>{centerInfo.dayoff}</p>
    </div>
    <div className='flexbox'>
        <p>전화번호</p>
        <p className='All'>{centerInfo.phonenumber}</p>
    </div>
    <div className='flexbox'>
        <p>위치</p>
        <p className='locateText'>{centerInfo.place}</p>
    </div>
    <div className='currentSpotText'>
        <p>현재 남은 자리 : {centerInfo.currentsite}</p>
    </div>
    <div className='setCenter'>
        <button className='reservateSpotbut'>자리 예약</button>
    </div>
</div>
    <div className='Navi'>
        <BottomRouter/>
    </div>
</div>

);




}

export default WashCenterInfo;