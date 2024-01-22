
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
