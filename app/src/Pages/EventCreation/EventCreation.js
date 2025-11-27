import "./EventCreation.css"
import { useState } from "react";

export default function EventCreation() {
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [err, setErr] = useState(false);
    async function createEvent(event) {
        event.preventDefault();
        const form = event.target;
        const data = {
            title: form.title.value,
            location: form.location.value,
            time: form.time.value,
            date: form.date.value,
            description: form.description.value
        };

        try {
            const response = await fetch("/api/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("Authorization")
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                setMessage(result.message || "Event created successfully");
                setSuccess(true);
                setErr(false);
            } else {

                const errorMsg = result.message
                    || JSON.stringify(result.data)
                    || `Error ${response.status}`;
                setMessage(errorMsg);
                setSuccess(false);
                setErr(true);
            }

        } catch (error) {
            setMessage(error.message || "Network error");
            setSuccess(false);
            setErr(true);
        }
    }

    return (
        <form onSubmit={createEvent}>
            <h1>Please fill the form to create an event</h1>

            <input type="text" name="title" placeholder="title" required />
            <input type="text" name="location" placeholder="location" required />

            <input type="time" name="time" />
            <input type="date" name="date" />

            <textarea name="description" rows="20" cols="100" required placeholder="description"></textarea>

            <input type="submit" value="Create" className="submit" />

            {success && <p className="success">{message}</p>}
            {err && <p className="err">{message}</p>}

        </form>
    );
}
