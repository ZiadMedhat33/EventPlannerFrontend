import { Link } from 'react-router-dom';
import './list-style.css';
export default function List({event_id}) {
    const [attendees, setAttendees] = useState([]);
        useEffect(() => {
            function makeRows(data) {
                let rows = data.map(attendee => (
                    <tr>
                        <td>{attendee.email}</td>
                        <td>{attendee.role}</td>
                        <td>${attendee.status}</td>
                        <td>${attendee.invited_at}</td>
                    </tr>
                ));
                return rows;
            }
            async function loadAttendees() {
                const data = await getAttendees(event_id);
                setAttendees(makeRows(data));
            }
            loadAttendees();
        }, []);
    return (
        <>
        <table class="event-members-table">
            <tr>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Invited At</th>
            </tr>
            {attendees}
        </table>
        </>
    )
}