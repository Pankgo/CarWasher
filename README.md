24/03/02
프로젝트명 : p2p세차서비스 
사용기술 : React.js , jsonserver
프로젝트 결과 : 화면 개발 도중 실제 서비스 구축 못할것같아 중단
개발팀원 : 박준서 이주환

24/02/14

로그인, 회원가입 팝업창 뜨도록 수정, 일부 css 수정 App.js 코드 존나 스파게티인거 깔끔하게 수정 

오류 해결 못해서 업로드는 나중에

24/02/13

ShortRequest에 시간 표시가 무조건 UTC로 나오는거 수정 

이랬던거
![1234](https://github.com/Pankgo/CarWasher/assets/147930457/06271fc1-c58e-4b82-9e39-0e37e7ed370e)

이렇게 수정했음
![결과값](https://github.com/Pankgo/CarWasher/assets/147930457/aab0d0ec-7d18-4fee-aefd-549922a4d7e4)

npm install moment-timezone --save 해서 moment-timezone 설치해야 작동함

제일 위에 import도 import moment from "moment-timezone"; 이걸로 수정해야되고

24/02/07
세차장 화면 및 기능 설계
단기세차화면 화면 설계
단기세차요청폼에서 import해야해서 datepicker, moment,date-fns(한국어 패치)설치하셈
test json 업데이트

24/02/01

alert대신 웬만한건 모달팝업창 뜨게 만들었음 내정보 페이지에서 정보 수정후 팝업창 닫으면 수정된 정보 반영해서 업데이트 되는 코드추가

Modal.jsx에서 로그인 오류, 예약 메모, 정보 수정 팝업 전부 처리하고있음 추후 기능 추가시에도 같은 컴포넌트에 추가할예정

24/01/30

서버 명칭은 8080으로 해놔서 3002로만 바꾸면 실행됨

test.json 내용도 리뷰땜에 변경함

상세 리뷰에 등록 및 수정 기능 추가(별점, 리뷰내용)


24/01/29

로그인체크 부분 일부수정 로그인시 해당 계정에 맞는 이름, 전화번호, 차량번호 등을 가져올수있게 수정함 

USERINFO 페이지에서 내정보 수정창 연결되게함 

RESERVE페이지에서 차량번호부분 계정별로 다르게 나오게 함 

업로드는 내일

리뷰 기능 추가(출력 , 정렬, 해당 상세리뷰 링크 연결)


24/01/25 마감 
로그인 체크 기능구현 

추가로 로그인시 해당 유저 이름받아오는거도 고려해서 코드 수정해야됨 

회원가입하면 해당정보 JSON파일에 저장되는거도 구현

24/01/25

재구성한 구조 업데이트 완료 

미들웨어는 일단은 localhost 사용할거임 

Json-server 라이브러리깔아서

mysql 쓸때랑 비슷하게 쓰면되는데 json-server쓰는법은 인터넷 검색해보셈 

24/01/24

구조 조금 더 손봤음 

Function이랑 페이지도 분리, 로그인 에서 회원가입으로 넘어가는거 만듬

예약화면에서 메모보기 클릭시 모달뷰 뜨는거 만듬 

react-modal이랑 json-server설치하기바람 

로그인시 데이터랑 비교해서 오류뜨는건 나중에 추가할예정 

업로드 하기귀찮아서 내일 할듯











24/01/18
로그인창 구현 AccountRouter를 중계자로 사용 
Login, UserInfo 컴포넌트에 islogin [ture or false]값을 전달 
기초값 false, false일시 AccountRouter에서 Login 랜더, ture일시 Userinfo랜더
지금은 로그인 버튼만 눌러도 islogin 값 ture로 바뀌게 해둠 추후에 서버 연결 하면 
저장된 데이터와 비교해서 로그인 오류창도 만들 계획 

근데 islogin값이 계속 저장되있는게 아니라 다른 페이지 갔다오면 초기화됨 
이건 서버 연결해야될듯


24/01/16 마감 
검색창, 하단 네비바 컴포넌트 분리, CSS 대폭수정
Chrome 모바일 화면을 보기 s20ultra 기준으로 적용 
기본적으로 BrouseRouter로 페이지 이동 기능 구현 예정 




24/01/16
구조 재구성 
Src폴더 - Index.js(수정ㄴ) App.js, 나머지 페이지들 

Public - img 폴더 안에 이미지들 다때려박으셈 이미지경로 전부 "img/이미지이름" 이런식으로 해주셈

하단 버튼은 

.Navi{
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
}







24/01/12 
메인화면 REACT로 예시본 생성 
CSS 이런느낌으로 쓸거고 정리는 나중에 
![image](https://github.com/Pankgo/CarWasher/assets/147930457/66fe45f8-6a94-4832-a084-550349e67fe3)
