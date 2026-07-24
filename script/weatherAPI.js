// 날씨 데이터를 가져오는 함수 (export)
export async function fetchWeather(lat, lng) {
  var url =
    "https://api.open-meteo.com/v1/forecast?latitude=" + lat +
    "&longitude=" + lng +
    "&current=temperature_2m,relative_humidity_2m";

  var response = await fetch(url);
  var data = await response.json();

  return {
    temperature: data.current.temperature_2m,
    humidity: data.current.relative_humidity_2m
  };
}