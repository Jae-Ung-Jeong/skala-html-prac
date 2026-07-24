import { fetchWeather } from "./weatherAPI.js";

// 도시별 위도/경도 데이터
var cityData = {
  seoul:   { name: "서울",  lat: 37.57, lng: 126.98 },
  busan:   { name: "부산",  lat: 35.18, lng: 129.08 },
  tokyo:   { name: "도쿄",  lat: 35.68, lng: 139.77 },
  paris:   { name: "파리",  lat: 48.86, lng: 2.35 },
  newyork: { name: "뉴욕",  lat: 40.71, lng: -74.01 }
};

var citySelect = document.getElementById("citySelect");
var weatherBox = document.getElementById("weather-box");

async function showWeather(city) {
  // 로딩 중 표시
  weatherBox.innerHTML =
    "<h3>📍 " + city.name + "</h3>" +
    "<p>날씨 정보를 불러오는 중... ⏳</p>";

  try {
    var weather = await fetchWeather(city.lat, city.lng);

    weatherBox.innerHTML =
      "<h3>📍 " + city.name + "</h3>" +
      "<p>🌡️ 현재 기온: " + weather.temperature + "°C</p>" +
      "<p>💧 현재 습도: " + weather.humidity + "%</p>";

  } catch (error) {
    weatherBox.innerHTML =
      "<h3>📍 " + city.name + "</h3>" +
      "<p>⚠️ 날씨 정보를 가져오지 못했습니다.</p>";
    console.error("날씨 API 오류:", error);
  }
}

citySelect.addEventListener("change", function () {
  var selectedCity = citySelect.value;

  if (selectedCity === "") {
    weatherBox.innerHTML = "<p>도시를 선택하면 정보가 표시됩니다.</p>";
    return;
  }

  var city = cityData[selectedCity];
  showWeather(city);
});