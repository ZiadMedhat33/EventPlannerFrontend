import './List-style.css';
import { useEffect, useState } from "react";
import { getAttendees } from '../../Services/events';
import { useNavigate } from 'react-router-dom';

export default function List({ event_id }) {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        function makeRows(data) {
            return data.map((attendee, index) => (
                <tr key={index}>
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
                navigate("/"); // redirect correctly
            }
        }
        loadAttendees();
    }, [event_id, navigate]);
    return (
        <>
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
