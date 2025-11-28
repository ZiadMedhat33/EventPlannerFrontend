import { useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "../../Components/EventMembersList/List";
import EventDetails from "../../Components/EventDetails/EventDetails";
export default function Event() {
    const {
        id,
        title,
        date,
        time,
        location,
        role,
        description
    } = useParams();
    useEffect(() => {
        
    }, []);
    return (
        <>
            <EventDetails
                givenId={id}
                givenTitle={title}
                givenDate={date}
                givenTime={time}
                givenLocation={location}
                givenRole={role}
                givenDescription={description}
                onSubmit={(updated) => console.log("Updated event:", updated)}
            />

            <h1>Attendees List</h1>
            <List event_id={id}/>
        </>
    );
}