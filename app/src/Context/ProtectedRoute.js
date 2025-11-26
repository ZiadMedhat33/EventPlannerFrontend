import {useEffect, useNavigate} from "react";
function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token");

    useEffect(() => {
        if (!isLoggedIn) navigate("/login");
    }, [isLoggedIn]);

    if (!isLoggedIn) return null;

    return children;
}
export default ProtectedRoute;