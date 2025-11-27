import { useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "../../Components/EventMembersList/List";
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
            <h1 className={"title"}>{title}</h1>
            <div className={"date-time-wrapper"}>
                <h2 className={"date"}>{date}</h2>
                <h2 className={"time"}>{time}</h2>
            </div>
            <h6 className={"card-location"}>{location}</h6>
            <h6 className={"card-location"}>{role}</h6>
            <p className={"card-description"}>{description}</p>
            <h1>Attendees List</h1>
            <List event_id={id}/>
        </>
    );
}