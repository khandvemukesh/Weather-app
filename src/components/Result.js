import React from 'react'

export default function Result({ weatherData, historyData , historySearch }) {

    const historyItems = historyData.map(
        (item, index) => {
            return <li onClick={() => historySearch(item)} 
            className='text-xl p-2 cursor-pointer' 
            key={index}>{item}</li>
        }
    )
    return (
        <div className='text-[#fff] grid grid-cols-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl mt-5 p-2 rounded-xl'>
            
            <div className="col-span-4">
                {
                    weatherData.length !== 0
                        ?
                        <>
                            <h2 className='text-4xl text-center'>{weatherData.name}</h2>
                            <div className='text-2xl flex justify-around my-2'>
                                <div>Max Temp: {weatherData.main.temp_max} deg</div>
                                <div>Min Temp: {weatherData.main.temp_min} deg</div>
                            </div>
                            <div className='text-2xl flex justify-around my-2 items-center'>
                                <div>
                                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                                </div>
                                <div>{weatherData.weather[0].main}</div>
                            </div>
                            <div className="col-span-1 border-t-2">
                            <span className='text-center text-xl block font-bold mt-4'>History</span>
                            <ul className="text-center text-[20px]">
                             {historyItems}
                            </ul>
            </div>
                        </>
                        :
                        <>
                            <h3 className='text-center p-3 text-3xl'>Please Enter The City !</h3>
                        </>
                }
            </div>


        </div>
    )
}
