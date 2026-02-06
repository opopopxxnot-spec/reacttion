function WeatherCard({ data }) {
  return (
    <div className="card">
      <h2>{data.name}</h2>
      <p>🌡 Temperature: {data.main.temp}°C</p>
      <p>☁ Weather: {data.weather[0].main}</p>
      <p>💨 Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
