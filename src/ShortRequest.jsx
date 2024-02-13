import BottomRouter from "../Routers/BottomRouter";
import "../Styles/ShortRequest.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment-timezone";
import { ko } from "date-fns/locale/ko";
import { RequestDB } from "../Middleware/Middleware";

function ShortRequest({
  setislogin,
  UID,
  setUID,
  modalvalue,
  setmodalvalue,
  openModal,
  closeModal,
  modalopen,
}) {
  const [startDate, setStartDate] = useState(null); //날짜
  const [selectedTime, setSelectedTime] = useState(null); //시간

  const [newplace, setplace] = useState("");
  const [newmodel, setmodel] = useState("");
  const [newrequest, setrequest] = useState("");

  function sendrequest() {
    const requestdata = {
      id: UID.id,
      place: newplace,
      model: newmodel,
      division: "단기",
      date: KRDATE, //기존 UTC 날짜, 시간 출력 한국꺼로 나오게 변경함
      time: KRTIME,
      note: newrequest,
    };
    axios.post(RequestDB, requestdata);
  }

  const handleplace = (e) => {
    setplace(e.target.value);
  };
  const handlemodel = (e) => {
    setmodel(e.target.value);
  };
  const handlerequest = (e) => {
    setrequest(e.target.value);
  };

  const KRDATE = moment(startDate).tz("Asia/Seoul").format("YYYY-MM-DD");

  const KRTIME = moment(selectedTime).tz("Asia/Seoul").format("HH:mm");

  return (
    <div className="margin">
      <h1>단기세차 예약</h1>
      <div className="flexbox">
        <h3>날짜및시간</h3>
        <div className="dateDiv">
          <DatePicker
            className="datebox"
            selected={startDate}
            locale={ko}
            onChange={(date) => setStartDate(date)}
            minDate={moment().add(1, "days").toDate()}
            maxDate={moment().add(7, "days").toDate()} // 현재 날짜로부터 7일 후까지
            dateFormat="yyyy년 MM월 dd일"
            placeholderText="날짜 선택" // 현재날짜 + 1일 부터 7일까지만 선택가능
          />
          <DatePicker
            className="datebox"
            selected={selectedTime}
            locale={ko}
            onChange={(time) => setSelectedTime(time)}
            showTimeSelect
            showTimeSelectOnly // 시간만 선택 가능하도록 설정
            timeIntervals={60} // 시간 간격을 설정 (옵션)
            dateFormat="h 시 mm분  aa" // 시간 형식 설정 aa => am pm
            placeholderText="시간 입력" // 선택되지 않았을 때의 플레이스홀더 텍스트 설정
          />
        </div>
      </div>
      <div className="flexbox">
        <h3>장소</h3>
        <input className="inputBox" type="text" onChange={handleplace}></input>
      </div>
      <div className="flexbox">
        <h3>모델 </h3>
        <input className="inputBox" type="text" onChange={handlemodel}></input>
      </div>
      <div>
        <h3>요청사항</h3>
        <textarea
          className="requestbox"
          type="text"
          onChange={handlerequest}
        ></textarea>
      </div>
      <button className="buttrequest" onClick={sendrequest}>
        {" "}
        요청
      </button>
      <div className="Navi">
        <BottomRouter />
      </div>
    </div>
  );
}
export default ShortRequest;
