function isLoggedIn(){
    if(localStorage.getItem("Authorization")){
        return true;
    }
    return false;
}
export async function Search (keywords, role) {
    try {
        const token = localStorage.getItem("Authorization");
        const res = await fetch("http://localhost:3000/api/events/search", {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` }
        });
        const data = await res.json();
        if (!res.ok) throw new Error(`Searching for events failed, Error code: ${res.status}`);
        console.log("Search successful")
        return data.data;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}
export async function getAttendees(event_id){
    try {
        const token = localStorage.getItem("Authorization");
        const res = await fetch(`http://localhost:3000/api/events/${event_id}/attendees`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` }
        });
        const data = await res.json();
        if (!res.ok) throw new Error(`Getting attendees for events failed, Error code: ${res.status}`);
        console.log("Getting attendees was successful")
        return data.data;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}