import { Link } from 'react-router-dom';
import './card-style.css';
export default function Card({id,title, date, time, location,description,role}) {
    return (
        <>
        <div className={"card"} style={{width: "18rem"}}>
            <Link to={role=="organizer"?(`/event/${id}/${title}/${date}/${time}/${location}/${role}/${description}`):("/")} className={"card-link"}>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>{title}</h5>
                    <div className={"card-date-time-wrapper"}>
                        <h6 className={"card-date"}>{date}</h6>
                        <h6 className={"card-time"}>{time}</h6>
                    </div>
                    <h6 className={"card-location"}>{location}</h6>
                    <h6 className={"card-location"}>{role}</h6>
                    <p className={"card-description"}>{description}</p>
                </div>
            </Link>
        </div>
        </>
    )
}