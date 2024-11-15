import React from "react";
import { useState, useEffect } from "react";
import "./weather.css";

export default function Weather() {
  // api에서 사용하는 지역값
  const [areaValue, setAreaValue] = useState("Seoul");

  // 사용자에게 표시할 지역값
  const [areaKr, setAreaKr] = useState("서울특별시");


  // fetch는 자바스크립트의 데이터를 불러오는 함수이며, 기본적으로 Promise라는 것으로 반환 받으며 
  // 요청 방식은 get, post 
  // 동기 비동기의 차이 동기는 요청을 바로 실행하는것 , 비동기는 내가 원하는 시점에 실행 
  useEffect(()=>{
    const init = {
        // fetch() 데이터 사용 설정
        method: "GET",  // GET, POST, PUT, DELETE....
    }
    const weatherEl = document.querySelector('.weather')
    weatherEl.innerHTML = `<img src="./image/load.gif" alt="로딩화면" />`
    // fetch() 함수 실행 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=587fdb5d989a222343bfa863c6f05672`, init)
    .then(async response => {
        try {
            const data = await response.json()
        } catch(error) {
            // 요청 실패시, 에러 처리
            // console.error("fetch error : ", error)
        }
    })
  }, [areaValue, areaKr])   // 의존관계 useState

  return (
    <section>
      <div className="weather"></div>
      <select name="" id="select" className="areaList"></select>
    </section>
  );
}

// 날씨 api 사이트의 지역 영어 이름을 불러와서 객체 리스트로 저장
/*
    날씨 api 사이트의 지역 영어 이름을 불러와서 객체 리스트로 저장 
    id로 고유값을 구분하였고, 각각 kr, text는 별도로 작성함
    특이한 경우 comment도 달아 놓음
*/
const areaGroup = [
  {
    id: 0,
    kr: "서울",
    en: "Seoul",
    text: "서울특별시",
  },
  {
    id: 1,
    kr: "부산",
    en: "Busan",
    text: "부산광역시",
  },
  {
    id: 2,
    kr: "인천",
    en: "Incheon",
    text: "인천광역시",
  },
  {
    id: 3,
    kr: "대구",
    en: "Daegu",
    text: "대구광역시",
  },
  {
    id: 4,
    kr: "대전",
    en: "Daejeon",
    text: "대전광역시",
  },
  {
    id: 5,
    kr: "광주",
    en: "Gwangju",
    text: "광주광역시",
  },
  {
    id: 6,
    kr: "수원",
    en: "Suwon-si",
    text: "경기도 수원시",
  },
  {
    id: 7,
    kr: "울산",
    en: "Ulsan",
    text: "울산광역시",
  },
  {
    id: 8,
    kr: "고양",
    en: "Goyang-si",
    text: "경기도 고양시",
  },
  {
    id: 9,
    kr: "용인",
    en: "Yongin",
    text: "경기도 용인시",
  },
  {
    id: 10,
    kr: "창원",
    en: "ChangWon",
    text: "경상남도 창원시",
  },
  {
    id: 11,
    kr: "성남",
    en: "Seongnam-si",
    text: "경기도 성남시",
  },
  {
    id: 12,
    kr: "청주",
    en: "Cheongju-si",
    text: "충청북도 청주시",
  },
  {
    id: 13,
    kr: "부천",
    en: "Bucheon-si",
    text: "경기도 부천시",
  },
  {
    id: 14,
    kr: "화성",
    en: "Hwaseong-si",
    text: "경기도 화성시",
  },
  {
    id: 15,
    kr: "남양주",
    en: "Hwado",
    text: "경기도 남양주시",
    comment: "날씨 위치가 남양주시 화도읍으로 찍혀있어서 화도읍 날씨로 적용.",
  },
  {
    id: 16,
    kr: "전주",
    en: "Jeonju",
    text: "전라북도 전주시",
  },
  {
    id: 17,
    kr: "천안",
    en: "Cheonan",
    text: "충청남도 천안시",
  },
  {
    id: 18,
    kr: "안산",
    en: "Ansan-si",
    text: "경기도 안산시",
  },
  {
    id: 19,
    kr: "안양",
    en: "Anyang-si",
    text: "경기도 안양시",
  },
  {
    id: 20,
    kr: "김해",
    en: "Gimhae",
    text: "경상남도 김해시",
  },
  {
    id: 21,
    kr: "평택",
    en: "Pyeongtaek-si",
    text: "경기도 평택시",
  },
  {
    id: 22,
    kr: "포항",
    en: "Pohang",
    text: "경상북도 포항시",
  },
  {
    id: 23,
    kr: "제주",
    en: "Jeju",
    text: "제주특별자치도 제주시",
  },
  {
    id: 24,
    kr: "시흥",
    en: "Ansan-si",
    text: "경기도 시흥시",
    comment: "시흥시 날씨를 지원하지 않아, 가까운 안산 날씨로 적용.",
  },
  {
    id: 25,
    kr: "파주",
    en: "Paju",
    text: "경기도 파주시",
  },
  {
    id: 26,
    kr: "의정부",
    en: "Uijeongbu-si",
    text: "경기도 의정부시",
  },
  {
    id: 27,
    kr: "김포",
    en: "Gimpo-si",
    text: "경기도 김포시",
  },
  {
    id: 28,
    kr: "구미",
    en: "Gumi",
    text: "경상북도 구미시",
  },
  {
    id: 29,
    kr: "경기도 광주",
    en: "Goenae",
    text: "경기도 광주시",
    comment: "날씨 위치가 광주시 남종면으로 찍혀있어서 남종면의 날씨로 적용.",
  },
];

/* api 아이콘 정보 객체데이터로 만듦 */
const weatherIcon = {
  // 맑음 (clear sky)
  "01d": "01d",
  "01n": "01n",
  // 흐림 (약간의 구름    few clouds)
  "02d": "02d",
  "02n": "02n",
  // 흐림 (흩어진 구름 scattered clouds)
  "03d": "02d",
  "03n": "02n",
  // 많은 구름 (broken clouds)
  "04d": "02d",
  "04n": "02n",
  // 소나기 (shower rain)
  "09d": "09d",
  "09n": "09d",
  // 비 (비)
  "10d": "10d",
  "10n": "10d",
  // 번개 (thunderstorm)
  "11d": "11d",
  "11n": "11d",
  // 눈 (눈)
  "13d": "13d",
  "13n": "13d",
  // 안개 (mist)
  "50d": "50d",
  "50n": "50d",
};
