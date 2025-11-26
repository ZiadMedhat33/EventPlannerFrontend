function isLoggedIn(){
    if(localStorage.getItem("Authorization")){
        return true;
    }
    return false;
}
export async function Search (keywords, role) {
    if (!isLoggedIn()) {
        throw new Error("User is not logged in");
    }
    try {
        const token = localStorage.getItem("Authorization");
        const url = "http://localhost:3000/api/events/search";
        const res = await fetch(url, {
            method: "POST",
            headers: { "Authorization": `Bearer ${token}` }
        });
        const data = await res.json();
        if (!res.ok) throw new Error(`Searching for events failed, Error code: ${res.status}`);
        console.log("Search successful")
        return data;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}