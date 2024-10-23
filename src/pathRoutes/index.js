import {
    replace,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import AdminLogin from "../pages/Login/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard/Admindashboard"; // Import AdminDashboard
import { UploadClients, UploadLyrics, UploadProductions } from "../pages/AdminDashboard/Admin-UploadPopup";
// import AdminDashboardUpload from "../pages/AdminDashboard/Admin-UploadPopup"; // Import Admin Dashboard Upload Files Popup
import { useSelector } from "react-redux";

const PathRouter = () => {
    const [cookie] = useCookies(["token"]);
    const auth = useSelector(state => state.auth);
        
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        !cookie.token  || !auth.token ? (
                            <AdminLogin />
                        ) : (
                            <Navigate to={"/admin-dashboard"} replace />
                        )
                    }
                />
                <Route
                    path="/admin-dashboard"
                    element={
                        cookie.token && auth.token ? (
                            <AdminDashboard />
                        ) : (
                            <Navigate to={"/"} replace />
                        )
                    }
                />
                <Route
                    path="/upload-clients"
                    element={
                        cookie.token && auth.token ? (
                            <UploadClients />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }
                />
                <Route
                    path="/upload-productions"
                    element={
                        cookie.token && auth.token ? (
                            <UploadProductions />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }
                />
                <Route
                    path="/upload-lyrics"
                    element={
                        cookie.token && auth.token ? (
                            <UploadLyrics />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }
                />
            </Routes>
        </Router>
    );
};

export default PathRouter;
