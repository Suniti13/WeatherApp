import React, {useState} from 'react'
import './App.css';
import WeatherCard from './components/WeatherCard';
import CitySelector from './components/CitySelector';
import UseFetch from './hooks/useFetch';
import {API_KEY, API_BASE_URL} from './apis/config';

function App() {

  const [city, setCity] = useState('');
  const {data, error, isLoading, setUrl} = UseFetch();

  // error handling and loading
  const getContent = () => {
    if(error) {
      let msg = `Error when fetching: ${error}`;
      return <WeatherCard msg = {msg} />
    }

    if(!data && isLoading) {
      let msg = `Loading...`;
      return <WeatherCard msg = {msg} />
    }

    if(!data){
      let msg = `Search for a City`;
      return <WeatherCard msg = {msg} />
    }

    return <WeatherCard data = {data} />
  };

  return (
    <div className="App">

      <div className="header">
        <h1>Weather App</h1>
      </div>
      
      <CitySelector 
        onSearch={() => setUrl(`${ API_BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)} 
        setCity={setCity}
      />
      
      {getContent()}
      
    </div>
  );
}

export default App;
