import styles from'./home.module.css'
const Home = () => {
    const weatherData = [
      { country: "Nepal", temperature: 25, condition: "Sunny" },
      { country: "USA", temperature: 18, condition: "Cloudy" },
      { country: "Brazil", temperature: 30, condition: "Partly Cloudy" },
      { country: "Canada", temperature: -5, condition: "Snowy" },  
    ];
    return (
    <div className={styles.home}>
      <div className="weather-container">
        <h2>Weather for Different Countries</h2>
        <div className="weather-list">
          {weatherData.map(({ country, temperature, condition }) => (
            <div key={country} className={styles.box}>
              <h3>{country}</h3>
              <p>Temperature: {temperature}°C</p>
              <p>Condition: {condition}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  };

  export default Home;