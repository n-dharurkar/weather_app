import React, { useEffect, useState } from "react";

export default function Search({ active, selectedLocation }) {
    const [term, setTerm] = useState("")
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        if (term !== "") {
            fetch(`https://api.weatherapi.com/v1/search.json?key=7f66b15ac9b946548d7174656220402&q=${term}`).then(res => res.json()).then(data => {
                setSuggestions(data)
            })
        } else{
            setSuggestions([])
        }
    }, [term])

    console.log(suggestions)

    return (
        <div className={`search-bar ${active ? 'active' : ""}`}>
            <input onChange={(e) => {
                setTerm(e.target.value)
            }} type="text" className="search-input" placeholder="Search your location..." />
            <button className="btn-search btn-search-close">
                <img src="/icons/close.png" alt="Close search" />
            </button>
            {
                suggestions.length > 0 && 
                <div className="suggestions">
                    <ul>
                        {
                            suggestions.map(s => <Suggestion 
                                key={s.id} 
                                region={s.region} 
                                id={s.id} 
                                title={s.name} 
                                onPlaceClick={() => {
                                    selectedLocation(s.lat, s.lon)
                                    setSuggestions([])
                                }}
                            />)
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

function Suggestion({ id, title, region, onPlaceClick }) {
    return <li>
        <button onClick={onPlaceClick}>{title}, <small>{region}</small></button>
    </li>
}