import BottomRouter from './BottomRouter';
import '../Styles/ShortRequest.css';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useState } from 'react';
import moment from 'moment';
import ko from 'date-fns/locale/ko'; 

function ShortRequest(){
    const [startDate, setStartDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

return(
    <div className='All'>      
        <h1>단기세차 예약</h1>
        <div className='flexbox'>
        <p className='flexbox'>
    날짜 및 시간
    <DatePicker
        className='datebox'
        selected={startDate}
        locale = {ko}
        onChange={(date) => setStartDate(date)}
        minDate={moment().add(1, 'days').toDate()}
        maxDate={moment().add(7, 'days').toDate()} // 현재 날짜로부터 7일 후까지
        dateFormat="yyyy-MM-dd"
        placeholderText="날짜 입력" // 현재날짜 + 1일 부터 7일까지만 선택가능
    />
    <DatePicker
            className='datebox'
            selected={selectedTime}
            locale = {ko}
            onChange={date => setSelectedTime(date)}
            showTimeSelect
            showTimeSelectOnly // 시간만 선택 가능하도록 설정
            timeIntervals={60} // 시간 간격을 설정 (옵션)
            dateFormat="h:mm aa" // 시간 형식 설정 aa => am pm
            placeholderText="시간 입력" // 선택되지 않았을 때의 플레이스홀더 텍스트 설정
        />
    </p>
        </div>
        <div className='flexbox'>
            <p>장소</p>
            <input className = "inputBox"type = "text" id = "place"></input>
        </div>
        <div className='flexbox'>
            <p>모델 </p>
            <input className = "inputBox" type = "text" id = "carmodel"></input>
        </div>
        <div>
            <p>요청사항</p>
            <textarea className = "requestbox" type = "text" id = "request" ></textarea>
        </div>
        <button className = "buttrequest"> 요청</button>
        <div className = "Navi">
            <BottomRouter/>
        </div>
        </div>
)

}
export default ShortRequest;