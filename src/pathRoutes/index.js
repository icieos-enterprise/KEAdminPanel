import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import AdminLogin from "../pages/Login/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard/Admindashboard"; // Import AdminDashboard

const PathRouter = () => {
    const [cookie] = useCookies(["token"]);
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        !cookie.token ? (
                            <AdminLogin />
                        ) : (
                            <Navigate to={"/admin-dashboard"} replace />
                        )
                    }
                />
                <Route
                    path="/admin-dashboard"
                    element={
                        cookie.token ? (
                            <AdminDashboard />
                        ) : (
                            <Navigate to={"/"} replace />
                        )
                    }
                />
            </Routes>
        </Router>
    );
};

export default PathRouter;