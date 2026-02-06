import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./services/weatherApi.js";



function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(city) {
    try {
      setLoading(true);
      setError("");
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>

      <SearchBox onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
