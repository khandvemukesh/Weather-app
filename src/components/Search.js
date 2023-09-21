import React, { useRef } from 'react'

export default function Search(props) {
    const searchInput = useRef();
    return (
        <div className='flex shadow-xl rounded-2xl'>
            <input type="search" placeholder='City Weather' value={props.searchData} className='border border-black w-full p-2 text-2xl rounded-l-2xl' 
            onChange={() => props.eventHandler(searchInput.current.value)} ref={searchInput}/>
            <button onClick={props.searchWeather} className='pl-2 pr-2 bg-slate-600 text-white rounded-r-2xl'>Search</button>
        </div>
    )
}