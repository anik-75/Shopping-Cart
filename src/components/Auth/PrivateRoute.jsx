import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
function PrivateRoute() {
  const isAuthenticated =
    useSelector((state) => state.authentication.isLoggedIn) ||
    localStorage.getItem("user");

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
}

export default PrivateRoute;
