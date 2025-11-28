import './list-style.css';
import { useEffect, useState } from "react";
import { getAttendees, inviteAttendee } from '../../Services/events';
import { useNavigate } from 'react-router-dom';
import EventDetails from '../EventDetails/EventDetails';

export default function List({ event_id }) {
    const [rows, setRows] = useState([]);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    function makeRows(data) {
        return data.map((attendee) => (
            <tr key={attendee.id}>
                <td>{attendee.email}</td>
                <td>{attendee.role}</td>
                <td>{attendee.status}</td>
                <td>{attendee.invited_at}</td>
            </tr>
        ));
    }
    async function loadAttendees() {
        try {
            const data = await getAttendees(event_id);
            if (!Array.isArray(data) || data.length === 0) {
                setRows([]);
            } else {
                setRows(makeRows(data));
            }
        } catch (e) {
            navigate("/");
        }
    }
    const handleInvite = async () => {
        try {
            await inviteAttendee(event_id,email);
            loadAttendees();
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loadAttendees();
    }, [event_id]);
    return (
        <>
            <form onSubmit={handleInvite}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Invite A New Attendee</button>
            </form>
            {rows.length === 0 ? (
                <h3>No Attendees</h3>
            ) : (
                <table className="event-members-table">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Invited At</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            )}
        </>
    );
}
