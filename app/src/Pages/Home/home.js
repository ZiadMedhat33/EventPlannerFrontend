import React, { useEffect, useState } from "react";
import { Search } from '../../Services/events';
import Card from '../../Components/Card/card';

export default function Home() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function loadEvents() {
            const data = await Search("", "");
            setEvents(data);
        }
        loadEvents();
    }, []);

    return (
        <>
            <h1><center>Organized Events</center></h1>
            <div className="cards-grid">
                {events.length === 0 ? (
                    <h1>No events</h1>
                ) : (
                    events
                        .filter(event => event.role === "organizer")
                        .map(event => (
                            <Card
                                key={event.id}
                                id={event.id}
                                title={event.title}
                                date={event.event_date}
                                time={event.event_time}
                                location={event.location}
                                description={event.description}
                                role={event.role}
                            />
                        ))
                )}
            </div>

            <h1><center>Other Events</center></h1>
            <div className="cards-grid">
                {events.length === 0 ? (
                    <h1>No events</h1>
                ) : (
                    events
                        .filter(event => event.role !== "organizer")
                        .map(event => (
                            <Card
                                key={event.id}
                                id={event.id}
                                title={event.title}
                                date={event.event_date}
                                time={event.event_time}
                                location={event.location}
                                description={event.description}
                                role={event.role}
                            />
                        ))
                )}
            </div>
        </>
    );
}
