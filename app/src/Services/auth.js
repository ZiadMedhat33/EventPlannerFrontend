export async function login (email, password) {
    try {
        const res = await fetch("http://localhost:4000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(`Login failed, Error code: ${res.status}`);
        localStorage.setItem("refreshToken", data.refreshToken);
        console.log("Login successful")
        return data.accessToken;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}
export async function refreshAccessToken() {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return null;
    const res = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: refreshToken }),
    });
    if (!res.ok) {
        console.warn(`Error code: ${res.status}, Refresh token invalid or expired`);
        localStorage.removeItem("refreshToken");
        return null;
    }
    const data = await res.json();
    return data.accessToken;
}
export async function logout() {
    const refreshToken = localStorage.getItem("refreshToken");

    await fetch("http://localhost:4000/auth/logout", {
        method: "DELETE",
        headers: {
        "Authorization": `Bearer ${refreshToken}`,
        },
    });
    localStorage.removeItem("refreshToken");
}