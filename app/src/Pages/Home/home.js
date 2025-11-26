import React, { useState, useEffect } from 'react';
import { Search } from '../../Services/events';
import Card from '../../Components/Card/card';
export default function Home() {
    const events = Search();
    let eventsCards = [];
    eventsCards = events.forEach(element => {
        return Card({id:element.id,title:element.title, date:element.event_date, time:element.event_time, location:element.location,description:element.description});
    });
    return (
        <>
            <div className={'cards-grid'}>
                {eventsCards==[]?(<h1>No events</h1>):(
                    eventsCards
                )}
            </div>
        </>
    );
}
