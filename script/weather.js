// 도시별 위도/경도 데이터
var cityData = {
  seoul:   { name: "서울",  lat: 37.57, lng: 126.98 },
  busan:   { name: "부산",  lat: 35.18, lng: 129.08 },
  tokyo:   { name: "도쿄",  lat: 35.68, lng: 139.77 },
  paris:   { name: "파리",  lat: 48.86, lng: 2.35 },
  newyork: { name: "뉴욕",  lat: 40.71, lng: -74.01 }
};

// select 요소와 결과 박스 가져오기
var citySelect = document.getElementById("citySelect");
var weatherBox = document.getElementById("weather-box");

// 날씨 데이터를 가져오는 비동기 함수
async function getWeather(city) {
  // 1) 로딩 중 메시지 먼저 표시
  weatherBox.innerHTML =
    "<h3>📍 " + city.name + "</h3>" +
    "<p>날씨 정보를 불러오는 중... ⏳</p>";

  try {
    var url =
      "https://api.open-meteo.com/v1/forecast?latitude=" + city.lat +
      "&longitude=" + city.lng +
      "&current=temperature_2m,relative_humidity_2m";

    // 2) fetch + await로 API 호출
    var response = await fetch(url);
    var data = await response.json();

    var temp = data.current.temperature_2m;
    var humidity = data.current.relative_humidity_2m;

    // 3) 실시간 데이터로 화면 갱신
    weatherBox.innerHTML =
      "<h3>📍 " + city.name + "</h3>" +
      "<p>🌡️ 현재 기온: " + temp + "°C</p>" +
      "<p>💧 현재 습도: " + humidity + "%</p>";

  } catch (error) {
    weatherBox.innerHTML =
      "<h3>📍 " + city.name + "</h3>" +
      "<p>⚠️ 날씨 정보를 가져오지 못했습니다.</p>";
    console.error("날씨 API 오류:", error);
  }
}

// 도시가 바뀔 때마다 실행
citySelect.addEventListener("change", function () {
  var selectedCity = citySelect.value;

  if (selectedCity === "") {
    weatherBox.innerHTML = "<p>도시를 선택하면 정보가 표시됩니다.</p>";
    return;
  }

  var city = cityData[selectedCity];
  getWeather(city);
});
