import { useState } from 'react';
import Search from './components/Search';
import Result from './components/Result';
import axios from 'axios';


function App() {
  const [search, setSearch]=useState("");
  const [weather, setWeather]=useState([]);
  const [history, setHistory]=useState([]);

  const searchChange=(value)=>{
    setSearch(value);
  }

  const searchWeatherHandler = () => {

    if (search !== "") {
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
      )
        .then(
          (response) => {
            if (history.indexOf(search) === -1) {
              setHistory(
                [
                  ...history,
                  search
                ]
              )
            }
            // console.log(response.data);
            setWeather(response.data);
          }
        ).catch(
          (error) => {
            console.log(error);
          }
        )
    }
  }

  const historySearchHandler = async (data) => {
     setSearch(data)
    if (data !== "") {
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
      )
        .then(
          (response) => {
            if (history.indexOf(data) === -1) {
              setHistory(
                [
                  ...history,
                  data
                ]
              )
            }
            // console.log(response.data);
          setWeather(response.data);
          }
        ).catch(
          (error) => {
            console.log(error);
          }
        )
    }
  }

  return (
    <div className="max-w-[1240px] mx-auto mt-2 p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl">
       <div className="p-2 text-[#fff] text-[30px] mt-4 mb-4 text-center">Weather App</div>
      <Search searchData={search} eventHandler={searchChange} searchWeather={searchWeatherHandler} />
      <Result weatherData={weather} historyData={history} historySearch={historySearchHandler} />
    </div>
  );
}

export default App;
