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
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;

    return <WeatherCard data = {data} />
  };

  return (
    <div className="App">
      
      <CitySelector 
        onSearch={() => setUrl(`${ API_BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)} 
        setCity={setCity}
      />
      
      {getContent()}
      
    </div>
  );
}

export default App;
