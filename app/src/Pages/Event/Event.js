import React, { useEffect, useState } from "react";
import { Search } from '../../Services/events';
import Card from '../../Components/Card/card';
export default function Home() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        async function loadAttendees() {
            
        }
        loadEvents();
    }, []);
    return (
        <>
            <h1 className={"title"}>{title}</h1>
            <div className={"date-time-wrapper"}>
                <h2 className={"date"}>{date}</h2>
                <h2 className={"time"}>{time}</h2>
            </div>
            <h6 className={"card-location"}>{location}</h6>
            <h6 className={"card-location"}>{role}</h6>
            <p className={"card-description"}>{description}</p>
        </>
    );
}